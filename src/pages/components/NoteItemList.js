import "./NoteItemList.css";

export default function NoteItemList({ title, body }) {
  return (
    <div className= "post-card" >
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}