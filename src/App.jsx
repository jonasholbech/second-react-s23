import "./App.css";
import Navigation from "./Navigation";
import ValueGrid from "./components/ValueGrid";
function App() {
  const user = {
    name: "Bo",
    age: 18,
    email: "bo@bo.dk",
  };
  return (
    <div className="App">
      <Navigation />
      <ValueGrid user={user} />
    </div>
  );
}

export default App;
