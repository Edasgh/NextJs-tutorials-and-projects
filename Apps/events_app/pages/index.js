import Head from "next/head";
import { Inter } from "next/font/google";
import HomePage from "@/src/components/home/home-page";




const inter = Inter({ subsets: ["latin"] });

export default function Home({title ,data}) {
  return (
    <div className="pageComponent">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <HomePage data={data} />
    </div>
  );
}

export const getServerSideProps=async()=>{
  /*
  //INCASE WE HAVE TO FETCH DATA FROM AN EXTERNAL API
  const res= await fetch("URL");
  const data= await res.json()
  
  */


const {events_categories} =await import ("/data/data.json")


  return{
    props:{
      title:"myEvents App - Access all the Events in Your City",
      data:events_categories,
    }
  }  
  }