"use client"
import "./white.css";
import { useRouter } from "next/navigation";

const White = ({title, location}) => {
    const route = useRouter();
    let titleX = "Sign Up";
    let locationX = "/";

    title = title || titleX
    location = location || locationX

    return (
        <div className="container2">
            <div className="btn2" onClick={() => {route.push(`./paths/${location}`)}}>
                {title}
            </div>
        </div>
    )
}

export default White;