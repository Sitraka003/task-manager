import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/**
  Calculates the time difference between the server time and client time.
  @param {Date} serverTime - The server time.
  @param {Date} clientTime - The client time.
  @returns {string} The time difference in the format "{days} days, {hours} hours, {minutes} minutes, {seconds} seconds".
*/
const calculateTimeDifference = (server: Date, client: Date) => {
  let result = server.getTime() - client.getTime();
  
  return result;
};

export async function getServerSideProps() {
  const dateFromServer = new Date().toISOString();

  return {
    props : {
      serverTime : { time : dateFromServer }
    }
  }
}
export default function Home({ serverTime }:any) {
  let timeFromServer = new Date(Date.parse(serverTime?.time));
  const router = useRouter();
  const [timeDiff, setTimeDiff] = useState();

  const moveToTaskManager = () => {
    router.push("/tasks");
  }


  function formatTime(date:Date) {
    const day = date.getUTCDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const secondes = date.getSeconds();
    
    return `${day}/${hours}:${minutes}:${secondes}`;
  }

  useEffect(()=>{
    let time = calculateTimeDifference(timeFromServer, new Date())
    setTimeDiff(time)    
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
          <p>
            Server time:{" "}
            <span className="serverTime">{formatTime(timeFromServer)}</span>
          </p>

          {/* Display here the time difference between the server side and the client side */}
          <p>
            Time diff:{ " " }
            <span className="serverTime">{ timeDiff }</span>
          </p>
        </div>

        <div>
          <button onClick={moveToTaskManager}>Go to task manager</button>
        </div>
      </main>
    </>
  );
}
