import { useSearchParams } from "react-router-dom";
import RouteCard from "../components/journey/RouteCard";
import { mockRoutes } from "../data/mockRoutes";
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

      {mockRoutes.map((route) => (
        <RouteCard
          key={route.id}
          title={route.title}
          transport={route.transport}
          time={route.time}
          cost={route.cost}
        />
      ))}
    </div>
  );
}

export default Results;