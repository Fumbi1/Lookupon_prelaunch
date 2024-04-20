import Button from "@/components/button/page";
import Link from "next/link";
import Image from "next/image";
import "./signUp.css";

const SignUpRoute = () => {
  return (
    <form action="">
      <p className="form-header">Join Lookupon</p>
      <p className="form-desc">Connect with local businesses around you.</p>
      <div className="button-wrap">
        <Image src="/googleIcon.svg" width="18" height="18" className="google-icon" />
        <Button value="Continue with Google" className="alt-signIn" />
      </div>

      <div className="line-wrap">
        <hr className="hr"/>
        <p>or</p>
        <hr className="hr"/>
      </div>
      <div className="row-input">
        <input type="text" name="" placeholder="First Name" id="a" />
        <input type="text" name="" placeholder="Last Name" id="b" />
      </div>
      <input type="email" name="" placeholder="Email" id="c" /><br />
      <input type="password" name="" placeholder="Password" id="d" />

      <Button value="Sign in" className="sign-up-btn" />
      <div className="last-part">
        <p>Already on Lookupon?</p>
        <Link href="/signIn">Sign in</Link>
      </div>
    </form>
  );
};
export default SignUpRoute;
