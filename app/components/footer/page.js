import "./footer.css";
import Image from "next/image"

const Footer = () => {
  return (
    <div className="footer-wrap">
        <div className="footer-content">
            <Image src="/logoDark.svg" width="174" height="32"/>
            <div>
            <Image src="/social_media.svg" width="56" height="56"/>
            <Image src="/social_media-1.svg" width="56" height="56"/>
            <Image src="/social_media-2.svg" width="56" height="56"/>
            </div>
            <p className="link">
            Lookupon for Business
            </p>
        </div>
        <p className="copyright">Copyright © 2024 Lookupon</p>
    </div>
  )
};
export default Footer;
