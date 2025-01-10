"use client";
import "./waitlist.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Notify = ({ OnPress }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const mainUrl = "https://lookuponba.onrender.com";
    const waitlistUrl = `${mainUrl}/addToWaitlist`;

    try {
      const response = await fetch(waitlistUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to add to waitlist");
      }

      // Simulating a delay to show success message
      await new Promise(resolve => setTimeout(resolve, 1000));

      router.push("/paths/questionaire");
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="main_modal" onClick={!isLoading ? OnPress : undefined}></div>
      <div className="card">
        <p className="logo">Lookupon</p>
        <p className="alert">Private beta</p>
        <p className="notified">
          Be among the first to try out Lookupon!
        </p>

        <p className="update">
          The beta is currently full. Join the waitlist for future updates!
        </p>

        <form className="form_flex" onSubmit={handleSubmit}>
          <input
            className="email"
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            required
            disabled={isLoading}
          />
          <br />
          <button className="btn2" disabled={isLoading}>
            {isLoading ? "Processing..." : "Join the private beta!"}
          </button>
        </form>

        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Notify;