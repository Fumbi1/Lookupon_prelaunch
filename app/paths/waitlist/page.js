"use client";
import "./waitlist.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Notify = ({ OnPress }) => {
  let OnPressX = null;

  OnPress = OnPress || OnPressX;
  const Location = useRouter();
  const [email, setEmail] = useState("");
  const [disable, setDisable] = useState(false)


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
    };
    
    setDisable(true)
    console.log(disable)
    
    try {
      const response = await fetch(waitlist, options);
      console.log(response);
      if (response.ok) {
        Location.push("/paths/questionaire");
      }
    } catch (error) {
      console.log(error);
    } finally {
      e.target.reset();
      setDisable(false)
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
          <button className="btn2" disabled={disable}>Notify me</button>
        </form>
      </div>
    </div>
  );
};

export default Notify;
