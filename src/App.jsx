import "./App.css";
import Navigation from "./Navigation";
import ValueGrid from "./components/ValueGrid";
function App() {
  const user = {
    name: "Bo",
    age: 18,
    email: "bo@bo.dk",
  };
  const companies = [
    { name: "Pentia", description: "Consultant House", employees: 100 },
    { name: "Signifly", description: "Digital Agency", employees: 45 },
  ];

  return (
    <div className="App">
      <Navigation />

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
