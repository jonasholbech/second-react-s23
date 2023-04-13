import ValueCard from "./ValueCard";
import Peter from "./Peter";
export default function ValueGrid(props) {
  return (
    <section className="ValueGrid">
      <h2>Whaere can we add value</h2>
      <div className="grid">
        <ValueCard user={props.user} text="lorem ipsum" title="Sustainability">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-down-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
          </svg>
        </ValueCard>

        <ValueCard
          user={props.user}
          text="lorem ipsum"
          title="Good something"
        />
        <ValueCard user={props.user} text="lorem ipsum" title="Conduct" />
        <ValueCard user={props.user} text="lorem ipsum" title="a" />
        <ValueCard user={props.user} text="lorem ipsum" title="b" />
        <ValueCard user={props.user} text="lorem ipsum" title="c" />
      </div>
    </section>
  );
}
