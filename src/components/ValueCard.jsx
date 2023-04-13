import Button from "./Button";
import Peter from "./Peter";
import Icon from "./Icon";
export default function ValueCard({ title, children, icon, text, user }) {
  const price = title + ",-";
  return (
    <article className="ValueCard">
      {children}
      <Icon icon={icon} />
      <h3>{price}</h3>
      <p>{text}</p>

      <Button user={user}>Hi Mom</Button>
    </article>
  );
}
