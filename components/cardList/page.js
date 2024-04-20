import "./cardList.css"
import Image from "next/image";

const BusinessCardList = ({
  img,
  namee,
  time,
  menu,
  comment,
}) => {
  return (
    <div className="business-card2">
      <Image className="business-pic2" src={img} height="178" width="178" alt="omooo"/>
      <div className="card-details">
        <p className="card-name">{namee}</p>
        <p className="card-time">{time}</p>
        <p className="card-menu">{menu}</p>
        <div className="business-comment2">
          <Image src="/comment.svg" height="19" width="18" alt="omooo" />
          <p className="card-comment">{comment}</p>
        </div>
      </div>
    </div>
  );
};
export default BusinessCardList;
