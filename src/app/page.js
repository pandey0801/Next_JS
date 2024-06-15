import Link from "next/link";
import Layout from "../../components/layout/Layout";
import MeetupList from "../../components/meetups/MeetupList";

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
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <h1>wellcome to next wold</h1>
    //   <Link href="/about">check the about section</Link>
    // </main>
    <>
    <Layout><MeetupList meetups={Dummy_MEETUPS}/></Layout>
    </>
  );
}
