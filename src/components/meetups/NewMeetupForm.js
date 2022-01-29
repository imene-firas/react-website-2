import react from "react";
import React from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const adressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const entredTitle = titleInputRef.current.value;
    const entredImage = imageInputRef.current.value;
    const entredAdress = adressInputRef.current.value;
    const entredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: entredTitle,
      image: entredImage,
      adress: entredAdress,
      description: entredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" ref={titleInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" ref={imageInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="adress">Meetup Adress</label>
          <input type="text" id="adress" ref={adressInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            id="description"
            rows="5"
            ref={descriptionInputRef}
            required
          />
        </div>
        <div className={classes.actions}>
          <button>Add</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
