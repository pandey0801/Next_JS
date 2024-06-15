"use client";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import MeetupList from "../../components/meetups/MeetupList";
import { useEffect, useState } from "react";

const Dummy_MEETUPS = [
  {
    id:'m1',
    title:'A First',
    image: "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    address: 'k',
    description: 'this'
  },
  {
    id:'m2',
    title:'A First',
    image : "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    address: 'k',
    description: 'this'
  }
]


export default function Home() {
  const [loadeMeetups, setLoadMeetups] = useState([])
  useEffect(()=>{

    setLoadMeetups(Dummy_MEETUPS)
  },[])
  return (
    <>
    <Layout><MeetupList meetups={loadeMeetups}/></Layout>
    </>
  );
}
