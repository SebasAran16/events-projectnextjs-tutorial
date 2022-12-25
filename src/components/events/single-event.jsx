import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "../../../styles/Single-event.module.sass";
import { useRouter } from "next/router";

export const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState();

  async function onSubmit(e) {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage("Please introduce a corect email address");
    }

    try {
      // POST fetch request
      // body -> emailValue and the eventId
      const response = await fetch("/api/email-registration", {
        method: "POST",
        // We will send a JSON, so we will specify the type of content...
        headers: {
          "Content-Type": "application/json",
          // Here we will convert any JS value that we pass into a JSON string
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });
      console.log(`Response ${response.json}`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      } else if (response.status == 401) {
        setMessage("Your email was already added");
      }
      const data = await response.json();
      console.log("POST", data);
      setMessage("Your email has been added correctly! ✅");
      inputEmail.current.value = "";
    } catch (e) {
      console.log("Error", e);
    }
  }

  return (
    <div className={styles.mainContainer}>
      <Image
        className={styles.image}
        src={data.image}
        alt="Event Image"
        width={800}
        height={300}
      />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <div>
        <p>{`${data.emails_registered.length} people is comming, will you joing?`}</p>
        <form onSubmit={onSubmit} className={styles.emailRegistration}>
          <input
            ref={inputEmail}
            id="email"
            placeholder="Put your email on me"
          ></input>
          <button>Join</button>
        </form>
      </div>
      <p>{message}</p>
    </div>
  );
};
