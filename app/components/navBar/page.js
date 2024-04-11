"use client"
import Image from "next/image";
import "./nav.css";
import useToggle from "../../hooks/useToggle"

const Nav = () => {

  const {switch1, switch2, toggle, toggle2} = useToggle()

  return (
    <div class="nav-wrap">
      <div class="nav-flex">
        <Image src="/logo.svg" width="172" height="32" class="logo" />
        <div class="userFn">
          <div className="user-wrap">
            <div className="dropdown-wrap">
              <div class="business" onClick={switch1}>
                <p className="review">Lookupon for business</p>
                <Image class={toggle? "rotate" :  "rotate0"} src="expand.svg" width="20" height="20"/>
                <div class={toggle? "dropdown" : "dropdown-off"}>
                  <p class="dropdown-list">Add a business</p>
                  <p class="dropdown-list">Sign in to business account</p>
                </div>
              </div>
            </div>
            <span class="review">Write a review</span>
            <div className="dropdown-wrap">
              <Image
                src="/userImage.svg"
                alt="User Image"
                height="26"
                width="28"
                onClick={switch2}
                class={toggle2? "rotate2"  : "rotate0"}
              />
              <div class={toggle2? "dropdown2" : "dropdown-off2"}>
                <p class="dropdown-list">Profile</p>
                <p class="dropdown-list">Account settings</p>
                <p class="dropdown-list">Sign Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
