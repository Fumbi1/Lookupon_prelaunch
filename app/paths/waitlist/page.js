"use client";
import "./waitlist.css";
import { useRouter } from "next/navigation";
import React, { useState, useRef } from "react";

const Notify = ({ OnPress }) => {
  const Location = useRouter();
  const [email, setEmail] = React.useState("");
//   const abortControllerRef  = useRef<AbortController | null>(null);
const abortControllerRef = useRef(null);


  const UponChange = (e) => {
    setEmail(e.target.value);
  };

  const Email = {
    email: email, 
  }

  const Stringify = JSON.stringify(Email);

//   console.log(Stringify);

  const Waitlist = async (e) => {
    e.preventDefault();
    const mainUrl = "https://lookuponba.onrender.com";
    const waitlist = `${mainUrl}/addToWaitlist`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Email),
      signal: abortControllerRef.current?.signal
    };

    // if (abortControllerRef.current && !abortControllerRef.current.signal.aborted) {
    //     options.signal = abortControllerRef.current.signal;
    // }

    // abortControllerRef.current?.abort();
    // abortControllerRef.current = new AbortController();abortControllerRef.current.signal

    // if (abortControllerRef.current) {
    //     abortControllerRef.current.abort();
    // }
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch(waitlist, options);
      console.log(response);
      Location.push("/paths/questionaire");
    } catch (error) {
      console.log(error);
      if(error.name ===  'AbortError'){
        console.log("Aborted")
        return;
      }
    } finally {
      e.target.reset();
    }
  };

  return (
    <div>
      <div className="main_modal" onClick={OnPress}></div>
      <div className="card">
        <p className="logo">Lookupon</p>
        <p className="alert">Coming Soon!!</p>
        <p className="notified">Get notified when we launch.</p>
        <form className="form_flex" onSubmit={Waitlist}>
          <input
            className="email"
            onChange={UponChange}
            type="email"
            placeholder="Email Address"
            required
          />
          <br />
          <button className="btn2">Notify me</button>
        </form>
      </div>
    </div>
  );
};

export default Notify;
