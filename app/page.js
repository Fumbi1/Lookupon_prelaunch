"use client";
import './page.css';
import Tick from "./components/highlights/page";
import Blue from "./components/buttonBlue/page";
import White from "./components/buttonWhite/page";
import Notify from './paths/waitlist/page';
import Nav from './components/navigation/page';
import React, { useState } from 'react';

export default function Home() {
const [modal, setModal] = React.useState(false);

const Toggle = () => {
  setModal(!modal);
}

  return (
    <main className='main_home'>
      <Nav Set={Toggle}/>
      <div className={modal === true? "mode_active" : "mode"}><Notify OnPress={Toggle}/></div>
      <div className="firstFlex">
        <div>
          <p className='title'>Discover great <span className="color">local<br/>businesses</span> around you</p>
          <p className='desc'>Connect with local businesses around you.</p>
        </div>

        <div className='phone'>
          <img src='/phone.svg' alt='' />
        </div>

        <Tick children="Sign up" />
        <Tick children="Connect with local businesses" />
        <Tick children="Rate and Review" />

        <Blue title="Join the private beta!" location={Toggle} />
      </div>

      <p className='business'>Do you own a business?</p>
      <p className='connect'>Connect with customers easily with Lookupon<br/>business</p>

      <White title="Lookupon Business" location="business" />

    </main>
  )
}
