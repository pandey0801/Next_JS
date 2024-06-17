"use client";
import React from 'react'
import NewMeetupForm from '../../../components/meetups/NewMeetupForm'
import Layout from '../../../components/layout/Layout';

export default function meet() {
    const  addMeetupHandler = async(meetupData)=> {
        console.log(meetupData)

        // const addProduct = async ()=>{
          console.log(meetupData);
          let result = await fetch("http://localhost:3000/api/products",{
            method:"POST",
            body:JSON.stringify(meetupData),
          });
        result = await result.json()
        if(result.scuccess){
          alert("new meet add")
        }
        // }
    }
  return (
    <>
    
    <Layout>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </Layout>
    </>
  )
}