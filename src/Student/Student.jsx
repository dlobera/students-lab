import React from "react";
import Score from "../Score/Score";

const Student = (props) => {
  return (  
    <>
    <div>
      <h2>{props.student.name}</h2>
      <p>{props.student.bio}</p>
    {props.student.scores.map((score, idx) =>
    <Score key={idx} score={score}/>
    )}
    </div>
    </>
  );
}
 
export default Student;