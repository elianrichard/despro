import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import Head from "next/head";
import ItemCard from "../modules/ItemCard";
import { CounterType } from "../modules/types";

const Home = () => {
  const { data, isLoading } = useQuery(
    ["counter"],
    (): Promise<AxiosResponse<CounterType>> => {
      return axios.get(
        "https://api.thingspeak.com/channels/1925037/feeds.json?api_key=KM6AZDKW2IMRZ1JU&results=1"
      );
    },
    {
      refetchInterval: 1000,
    }
  );

  const counter = data && parseInt(data.data.feeds[0].field1);
  const max = data && parseInt(data.data.feeds[0].field2);

  return (
    <>
      <Head>
        <title>VISITOR COUNTER</title>
      </Head>
      <div className="flex h-screen w-screen select-none flex-col items-center justify-center bg-gray-900">
        <div className="mb-10 flex w-full justify-center text-5xl font-bold">
          <p className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 bg-clip-text text-center text-transparent">
            I-CELL
            <br />
            VISITOR COUNTER
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <ItemCard
            title="Lab. DTE 1"
            isLoading={isLoading}
            counter={counter || 0}
            max={max || 0}
          />
          <ItemCard
            title="Lab. DTE 2"
            isLoading={true}
            counter={0}
            max={0}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
