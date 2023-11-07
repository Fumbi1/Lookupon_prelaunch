"use client"
import "./question.css"

const Question = () => {
  return <div className="main_questionaire">
    <p className="logo">Lookupon</p>
    <p className="appreciation">Thank you! You will be notified when we launch.</p>
    <p className="research">
      Take part in our market research.<br/>Your insights are valuable as we build a great product for you
    </p>

    <div className="wrapp"><button className="take_part" onClick={() => {
    window.open("https://forms.gle/MteJqQhM8LsEUt2Q9", "_blank", "noopener,noreferrer");
  }}>Take part</button></div>
  </div>;
};
export default Question;
