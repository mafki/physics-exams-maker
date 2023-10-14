import React,{useState} from "react";
import PdfCat from "./PdfCat";
import "./pdf.css"; // Import your custom styles for Pdfhome

export default function Pdfhome(props) {
  const [more,setmore]=useState(3)
  const { fullname, loop, place, date, examtype,niveau } = props;

  

  return (
    <div className="pdfhome-container"> {/* Apply styles for Pdfhome container */}
      <div className="pdfhome-details">
        <h2>{fullname}</h2>
        <p> {date} : تاريخ اجراء الاختبار</p>
        <p>نوع الاختبار : {examtype} </p>    
        <p>المؤسسة : {place} </p>
        <p> مستوى : {niveau} </p>
       {/* <label className="ii">
        <div className="iii">: عدد الاختبارات</div>
        <input  className="i"
          name="more"
          type="number"
          value={more+1}
          min="1" max="10"
          onChange={e => setmore(e.target.value)}
          required />
  </label> */}
      </div>
      <div className="s2">
      <PdfCat loop={more} fullname={fullname} place={place} date={date} examtype={examtype} niveau={niveau} />
      </div>
    </div>
  );
}
Pdfhome.defaultProps = {
  loop: 1,
  fullname: "منيرة الحزامي",
  date: "70 / 01 / 3202",
  place: "إبن منظور",
  examtype: "فرض مراقبة رقم 1",
};
