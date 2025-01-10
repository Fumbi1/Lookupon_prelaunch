"use client"
import Link from "next/link";
import "./nav.css";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

const Nav = ({Set}) => {
    let SetX = null;

    Set = Set || SetX
    const [active, setActive] = React.useState(false);
    const Togglee = () => {
        setActive(!active)
    }
    const Route = useRouter();
    return (
        <div className="nav_wrap">
            <div className="LOGO" onClick={() => {Route.push("/")}}>
                Lookupon
            </div>

            <div className="menu">
                <img src="/menuline.svg" alt="" onClick={Togglee} />
            </div>

            <div className={active === true? "active" : "non_active"}>
                <img src="/remove.svg" alt="" onClick={Togglee}/>
                <p className="first" onClick={Set}>Private beta</p>
                <div className="cont">
                    <Link className="linkk" href="/paths/business" onClick={() => {setActive(false)}}>Lookupon <span className="span2">business</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Nav;