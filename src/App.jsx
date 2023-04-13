import "./App.css";
import Navigation from "./Navigation";
import ValueGrid from "./components/ValueGrid";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(666);
  const [navigationVisible, setNavigationVisible] = useState(false);

  const user = {
    name: "Bo",
    age: 18,
    email: "bo@bo.dk",
  };
  const companies = [
    { name: "Pentia", description: "Consultant House", employees: 100 },
    { name: "Signifly", description: "Digital Agency", employees: 45 },
  ];

  function buttonClicked() {
    setCounter((old) => old + 1);
  }
  function toggle() {
    setNavigationVisible((oldState) => !oldState);
  }
  return (
    <div className="App">
      {navigationVisible ? <Navigation /> : null}
      <button className="big" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-border-width"
          viewBox="0 0 16 16"
        >
          <path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button>
      <button className="big" onClick={buttonClicked}>
        {counter}
      </button>
      <p>{counter}</p>
      <p>{counter}</p>
      <p>{counter}</p>
      <p>{counter}</p>
      <p>{counter}</p>
      <p>{counter}</p>
      <p>{counter}</p>
      <p>{counter}</p>
      <p>{counter}</p>
      <p>{counter}</p>
      <section className="brands">
        <ul>
          {companies.map((company) => (
            <Company name={company.name} description={company.description} />
          ))}
        </ul>
      </section>
      <ValueGrid user={user} />
    </div>
  );
}

function Company(props) {
  return (
    <li>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </li>
  );
}
export default App;
