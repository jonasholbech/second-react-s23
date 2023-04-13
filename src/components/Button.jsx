export default function Button(props) {
  return (
    <button>
      {props.children} by {props.user.name}
    </button>
  );
}
