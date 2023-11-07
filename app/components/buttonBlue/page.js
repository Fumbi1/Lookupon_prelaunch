"use client"
import "./blue.css";
// import { useRouter } from "next/navigation";

const Blue = ({title, location}) => {
    // const route = useRouter();
    let titleX = "Sign Up";
    let locationX = null;

    title = title || titleX
    location = location || locationX

    return (
        <div className="container">
            <div className="btn" onClick={location}>
                {title}
            </div>
        </div>
    )
}

export default Blue;