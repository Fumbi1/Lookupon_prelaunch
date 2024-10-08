import "./footer.css";
import Image from "next/image"

const Footer = () => {
  return (
    <div className="footer-wrap">
        <div className="footer-content">
            <Image src="/logoDark.svg" width="174" height="32" alt="omooo"/>
            <div className="social-icons">
            <Image src="/social_media.svg" width="56" height="56" alt="omooo"/>
            <Image src="/social_media-1.svg" width="56" height="56" alt="omooo"/>
            <Image src="/social_media-2.svg" width="56" height="56" alt="omooo"/>
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
