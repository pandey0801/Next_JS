"use client";
import React from 'react'
import NewMeetupForm from '../../../components/meetups/NewMeetupForm'
import Layout from '../../../components/layout/Layout';

export default function meet() {
    function addMeetupHandler(meetupData) {
        console.log(meetupData)
    }
  return (
    <>
    
    <Layout>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </Layout>
    </>
  )
}
