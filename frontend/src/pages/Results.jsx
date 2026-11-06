import { useSearchParams } from "react-router-dom";
import RouteCard from "../components/journey/RouteCard";
import "../styles/results.css";

function Results() {
  const [searchParams] = useSearchParams();

  const origin = searchParams.get("origin");
  const destination = searchParams.get("destination");


  return (
    <div className="results">
      <h1>Route Results</h1>

      <div className="journey-summary">
        <p>
          <strong>From:</strong> {origin}
        </p>

        <p>
          <strong>To:</strong> {destination}
        </p>
      </div>

      <RouteCard
  title="🚋 Fastest Route"
  transport="Tram 6"
  time="22 min"
  cost="36 SEK"
/>

<RouteCard
  title="🚲 Cheapest Route"
  transport="Bike + Tram"
  time="18 min"
  cost="20 SEK"
/>

<RouteCard
  title="🌱 Lowest CO₂ Route"
  transport="Tram + Walk"
  time="25 min"
  cost="25 SEK"
/>
    </div>
  );
}

export default Results;