<<<<<<< HEAD
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
          <p className='title'>Discover great <span className="color">local<br/>businesses</span> around campus</p>
          <p className='desc'>Connect with local businesses around you.</p>
        </div>

        <div className='phone'>
          <img src='/phone.svg' alt='' />
        </div>

        <Tick children="Sign up" />
        <Tick children="Connect with local businesses" />
        <Tick children="Rate and Review" />

        <Blue title="Sign Up" location={Toggle} />
      </div>

      <p className='business'>Do you own a business?</p>
      <p className='connect'>Connect with customers easily with Lookupon<br/>business</p>

      <White title="Lookupon Business" location="business" />

    </main>
  )
}
=======
"use client"
import "./page.css";
import { useRouter} from "next/navigation";
import SearchBar from "../components/search/page";
import Button from "../components/button/page";
import BusinessCard from "../components/businessCard/page";
import Image from "next/image";
import { categories, cards} from "./utils/arrays"

export default function Home() {

  const path = useRouter();
  const results = () => {
    path.push("./paths/searchPage")
  }
  return (
    <>
    <main>
      <div className="first-section">
        <h1 className="intro-header">
          Explore local businesses
        </h1>

        <p className="intro-desc">
        Connect with local businesses around you.
        </p>

        <div className="search-wrap">
          <SearchBar className="searchbar" type="search" placeholder="restaurant, makeup, clothing..."/>
          <Button value="Search" className="button" onClick={results} />
        </div>

        <div className="display-wrap">
          <Image src="/food.png" alt="sold items" width="1114"  height="360"/>
        </div>

        <div className="categories-section">
          <p className="categories-header">Categories</p>

          <div className="category-grid">
            {categories.map((category) => {
              return(
                  <div className="category" key={category.id}>
                    <Image src={category.image} alt="omooo" width="48" height="48" />
                    <p className="category-title">{category.title}</p>
                  </div>
              )
            })}
          </div>

          <div>
            <p className="categories-header">
            Most Reviewed Businesses
            </p>

            <div className="business-grid">
              {
                cards.map((card, index) => {
                  return(
                  <BusinessCard
                  key={index} img={card.img} namee={card.name} comment={card.comment}
                  />
                  )
                })
              }
            </div>
          </div>
          
        </div>
      </div>
    </main>
    </>
  );
}
>>>>>>> 16d57ac5f2635857a65eb64e734308d274b53b28
