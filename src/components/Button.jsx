import { useState } from "react";
export default function Button(props) {
  const [name, setName] = useState("");
  function myCallback(e) {
    setName("stupidAnimation");
  }
  return (
    <button className={name} onClick={myCallback}>
      {props.children} by {props.user.name}
    </button>
  );
}
