"use client"
import "./white.css";
import { useRouter } from "next/navigation";

const White = ({title= "Sign Up", location= "./paths/buttonBlue"}) => {
    const route = useRouter();
  
    return (
        <div className="container2">
            <div className="btn22" onClick={() => {route.push(`./paths/${location}`)}}>
                {title}
            </div>
        </div>
    )
}

export default White;