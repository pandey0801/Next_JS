/*
"use client";
import { useRef } from 'react';
import Layout from '../../../components/layout/Layout';

function NewMeetupForm() {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    console.log(data);
  }

  return (
    <Layout>
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" required ref={titleInputRef} />
      </div>
      <div>
        <label htmlFor="image">Image URL</label>
        <input type="url" id="image" required ref={imageInputRef} />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" required ref={addressInputRef} />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" required ref={descriptionInputRef}></textarea>
      </div>
      <button type="submit">Add Meetup</button>
    </form>
    </Layout>
  );
}

export default NewMeetupForm;
*/


/*
"use client";
import { useRef } from 'react';
// import Card from '../ui/Card';
import Card from '../../../components/ui/Card'
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
*/

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