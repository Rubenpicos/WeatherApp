import "./App.css";

import WeatherPanel from "./components/WeatherPanel";

function App() {
  return (
    <>
      <section className="container">
        <h1 className="container__title">The weather app</h1>
        <WeatherPanel />
      </section>
    </>
  );
}

export default App;
