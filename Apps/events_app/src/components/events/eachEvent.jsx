import Image from "next/image";
import { useRouter } from "next/router";
import React, { Fragment, useRef, useState } from "react";

export const EachEvent = ({ data }) => {
  //SingleEvent
  const inputEmail = useRef();
  const router = useRouter();
  const Id=data.map(el=>{
    return el.id
  })
  const [message, setMessage] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    // const eventId = router?.query.id;
    const eventId=Id;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage("Please introduce a correct email address");
    }

    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = "";
    } catch (e) {
      console.log("ERROR", e);
    }
  };
  return (
    <div className="each-event">
      {data.map((el) => (
        <Fragment key={el.id}>
          <h1>{el.title}</h1>
          <Image
            src={el.image}
            alt={el.title}
            width={1000}
            height={500}
            priority
          />
          <p>{el.description}</p>
        </Fragment>
      ))}
      <form onSubmit={onSubmit} className="email-registration">
        <label>GET REGISTERED FOR THIS EVENT!</label>
        <br />
        <br />
        <input
          ref={inputEmail}
          type="email"
          name="email"
          id="email"
          placeholder="Email here....."
        />
        <button type="submit" className="submit">
          Submit
        </button>
        <p>{message}</p>
      </form>
    </div>
  );
};
