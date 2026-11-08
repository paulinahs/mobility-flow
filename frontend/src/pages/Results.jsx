import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import RouteCard from "../components/journey/RouteCard";
import { getRoutes } from "../services/routeService";

import "../styles/results.css";

function Results() {
  const [searchParams] = useSearchParams();
  const [routes, setRoutes] = useState([]);

  const origin = searchParams.get("origin");
  const destination = searchParams.get("destination");

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const data = await getRoutes();
        setRoutes(data);
      } catch (error) {
        console.error("Failed to fetch routes:", error);
      }
    };

    fetchRoutes();
  }, []);

  return (
    <div className="results-container">
      <h1>
        Routes from {origin} to {destination}
      </h1>

      {routes.map((route) => (
        <RouteCard
          key={route.id}
          route={route}
        />
      ))}
    </div>
  );
}

export default Results;