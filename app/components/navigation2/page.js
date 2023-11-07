"use client"
import Link from "next/link";
import "./nav2.css";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

const Nav2 = ({Set}) => {
    const [active, setActive] = React.useState(false);
    const Togglee = () => {
        setActive(!active)
    }
    const Route = useRouter();
    return (
        <div className="nav_wrap">
            <div className="LOGO" onClick={() => {Route.push("/paths/business")}}>
                Lookupon <span className="span">business</span>
            </div>

            <div className="menu">
                <img src="/menuline.svg" alt="" onClick={Togglee} />
            </div>

            <div className={active === true? "active" : "non_active"}>
                <img src="/remove.svg" alt="" onClick={Togglee}/>
                <p className="first" onClick={Set}>Sign Up</p>
                <div className="cont">
                    <Link className="linkk" href="/" onClick={() => {setActive(false)}}>Lookupon</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav2;