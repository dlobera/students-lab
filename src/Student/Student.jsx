import Score from "../Score/Score";

const Student = (props) => {
  return (  
    <>
    <div>
    {props.student.name}
    {props.student.bio}
    </div>
    {props.student.scores.map((score, idx) =>
    <Score key={idx} score={score}/>
    )}
    </>
  );
}
 
export default Student;