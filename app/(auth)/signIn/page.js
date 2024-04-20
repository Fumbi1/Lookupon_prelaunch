import Button from "@/components/button/page";
import Link from "next/link";
import "./signIn.css"

const SignInRoute = () => {
  return <form action="">
    <h4>Join Lookupon</h4>
    <p>Connect with local businesses around you.</p>
    <Button value="Continue with Google" />
    <input type="text" name="" id="" />
    <input type="text" name="" id="" />
    <input type="email" name="" id="" />
    <input type="password" name="" id="" />
    <div>
        <p>Already on Lookupon?</p>
        <Link href="">Sign in</Link>
    </div>
  </form>;
};
export default SignInRoute;
