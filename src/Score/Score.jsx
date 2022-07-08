import React from "react";

const Score = (props) => {
  return (  
    <>
    <div>
      <p>Score: {props.score.score}</p>
      <p>Date: {props.score.date}</p>
    </div>
    </>
  );
}
 
export default Score;