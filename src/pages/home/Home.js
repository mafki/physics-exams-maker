import React from "react";
import examTypes from "./ExamType";
import niveaus from "./Niveau";
import './home.css'
import Pdfhome from "../pdf-cat/Pdfhome";


export default function App() {
  const [fullname, setfullname] = React.useState("");
  const [date, setdate] = React.useState("");
  const [examType, setexamtype] = React.useState("");
  const [place, setplace] = React.useState("");
  const [niveau, setniveau] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (event) => {
    console.log(`
      Email: ${fullname}
      Password: ${date}
      Country: ${examType}
      Accepted Terms: ${niveau}
    `);
    
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return <Pdfhome fullname={fullname} place={place} date={date}  examtype={examType} niveau={niveau} />;
  }
  return (
    <div className="home">
    <form  onSubmit={handleSubmit}>
      <h1> العلوم الفيزيائية</h1>

      <label>
        الاسم و اللقب
        <input
          name="fullname"
          type="text"
          value={fullname}
          onChange={e => setfullname(e.target.value)}
          required />
      </label>
      
      <label>
        تاريخ اجراء الاختبار
        <input
          name="date"
          type="date"
          value={date}
          onChange={e => setdate(e.target.value)}
          required />
      </label>
      <label>
        المؤسسة
        <input
          name="place"
          type="text"
          value={place}
          onChange={e => setplace(e.target.value)}
          required />
      </label>
      <label>
        نوع الاختبار
        <select
          name="examtype"
          value={examType}
          onChange={e => setexamtype(e.target.value)}
          required>
          <option key=""></option>
          {examTypes.map(examTypea => (
            <option key={examTypea}>{examTypea}</option>
          ))}
        </select>
      </label>
      <label>
            مستوى
        <select
          name="niveau"
          value={niveau}
          onChange={e => setniveau(e.target.value)}
          required>
          <option key=""></option>
          {niveaus.map(niveaua => (
            <option key={niveaua}>{niveaua}</option>
          ))}
        </select>
      </label>
      <button>التالى</button>
    </form>
    </div>
  );
}