"use client"
import "./business.css";
import Tick from "@/app/components/highlights/page";
import Blue from "@/app/components/buttonBlue/page";
import Nav2 from "@/app/components/navigation2/page";
// import White from "@/app/components/buttonWhite/page";
import Notify from "../waitlist/page";
import React, { useState } from 'react';

const Business = () => {

    const [modal, setModal] = React.useState();

    const Toggle = () => {
        setModal(!modal);
    }

    return (
        <main className="main2">
            <Nav2 Set={Toggle}/>
            <div className={modal === true? "mode_active" : "mode"}><Notify OnPress={Toggle}/></div>
            <p className="title2">Start, <span className="colour">Grow</span> and Advertise<br/>your small <span className="colour">business</span></p>
            <p className="desc2">Connect with customers and grow your business.</p>

            <Tick children="Sign up" />
            <Tick children="Add business info"/>
            <Tick children="Unlock your free webpage"/>
            <Tick children="Connect with customers"/>

            <p className="desc3">Lookupon makes it easy to connect with customers and grow your business</p>

            <Blue title="Sign Up" location={Toggle}/>

            <div className="img_div">
                <img src="/demo.png" alt="" />
                <div className="modal"></div>
                <div className="overlay">
                    <p className="thrift">Davon's Thriftshop</p>
                    <div>
                        <div>
                            <img src="/star.svg" className="star" alt="" />
                            <img src="/star.svg" className="star" alt="" />
                            <img src="/star.svg" className="star" alt="" />
                            <img src="/star.svg" className="star" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <p className="boost">Boost your visibility with Lookupon</p>
            <p className="desc4">
            Strengthening your online presence with Lookupon is the key to building trust with prospective customers.
            </p>

            `<div className="slimfit">
                <Tick children="Elevate your business profile with better discoverability" />
                <Tick children="Swiftly engage with reviews from your customers" />
                <Tick children="Add images to highlight your offerings" />
            </div>`

            {/* <White title="Sign Up" location="buttonWhite" /> */}
        </main>
    )
}

export default Business;