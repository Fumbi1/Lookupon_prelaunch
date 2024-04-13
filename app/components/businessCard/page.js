import Image from "next/image";
import "./card.css"

const BusinessCard = ({
  img,
  namee,
  time,
  menu,
  comment,
}) => {
  return (
    <div class="business-card">
      <Image class="business-pic" src={img} height="252" width="360" />
      <div className="card-details">
        <p class="card-name">{namee}</p>
        <p class="card-time">{time}</p>
        <p class="card-menu">{menu}</p>
        <div class="business-comment">
          <Image src="/comment.svg" height="19" width="18" />
          <p class="card-comment">{comment}</p>
        </div>
      </div>
    </div>
  );
};
export default BusinessCard;
