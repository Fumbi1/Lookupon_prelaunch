"use client"
import Image from "next/image";
import "./nav.css";
import Link from "next/link";
import useToggle from "/app/hooks/useToggle"

const Nav = () => {

  const {switch1, switch2, toggle, toggle2} = useToggle()

  return (
    <div className="nav-wrap">
      <div className="nav-flex">
        <Link href="/" className="logo">
          <Image src="/logo.svg" width="172" height="32" alt="omooo"/>
        </Link>
        <div className="userFn">
          <div className="user-wrap">
            <div className="dropdown-wrap">
              <div className="business" onClick={switch1}>
                <Link href="/signIn">
                  <p className="review">Lookupon for business</p>
                </Link>
                <Image className={toggle? "rotate" :  "rotate0"} src="expand.svg" width="20" height="20" alt="omooo"/>
                <div className={toggle? "dropdown" : "dropdown-off"}>
                  <p className="dropdown-list">Add a business</p>
                  <p className="dropdown-list">Sign in to business account</p>
                </div>
              </div>
            </div>
            <span className="review">Write a review</span>
            <div className="dropdown-wrap">
              <Image
                src="/userImage.svg"
                alt="User Image"
                height="26"
                width="28"
                onClick={switch2}
                className={toggle2? "rotate2"  : "rotate0"}
              />
              <div className={toggle2? "dropdown2" : "dropdown-off2"}>
                <p className="dropdown-list">Profile</p>
                <p className="dropdown-list">Account settings</p>
                <p className="dropdown-list">Sign Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
