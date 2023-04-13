import Button from "./Button";
import Peter from "./Peter";
export default function ValueCard(props) {
  const price = props.title + ",-";
  return (
    <article className="ValueCard">
      {props.children}
      <h3>{price}</h3>
      <p>{props.text}</p>

      <Button user={props.user}>Hi Mom</Button>
    </article>
  );
}
