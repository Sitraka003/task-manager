import { formatDate, timeDifference } from "@/utils";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/**
  Calculates the time difference between the server time and client time.
  @param {Date} serverTime - The server time.
  @param {Date} clientTime - The client time.
  @returns {string} The time difference in the format "{days} days, {hours} hours, {minutes} minutes, {seconds} seconds".
*/
const calculateTimeDifference = (server: Date, client: Date) => {};


export default function Home({
  time,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const moveToTaskManager = () => {
    router.push("/tasks");
  }
  const [clientTime,setClientTime] = useState(new Date (Date().toString()))
  const [serverTime,setServerTime] = useState(new Date(time.servertime))
  const[diff,setDiff] = useState("")
  useEffect(() => {
    setClientTime(new Date (Date().toString()))  
   setDiff(timeDifference(clientTime,serverTime))
  }, [])
   
  return (
    <>
      <Head>
        <title>Web 2 - Exam TD</title>
        <meta name="description" content="Just an exam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>The easiest exam you will ever find</h1>
        <div>
          {/* Display here the server time (DD-MM-AAAA HH:mm)*/}
          {}
          <p>
            Server time: {formatDate(serverTime) }
            <span className="serverTime">{/* Replace with the value */}</span>
          </p>

          {/* Display here the time difference between the server side and the client side */}
          <p>
            Time diff:{" "}
            <span className="serverTime">{diff}</span>
          </p>
        </div>

        <div>
          <button onClick={moveToTaskManager}>Go to task manager</button>
        </div>
      </main>
    </>
  );
}


type ServerTime = {
  servertime: string
}

export const getServerSideProps: GetServerSideProps<{
  time: ServerTime
}> = async () => {
  const time = { servertime: Date().toString() }
  return { props: { time } }
}