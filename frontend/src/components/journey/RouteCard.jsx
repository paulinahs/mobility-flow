function RouteCard({ route }) {
  return (
    <div className="route-card">
      <h3>
        {route.origin} → {route.destination}
      </h3>

      <div className="route-info">
        <div className="route-stat">
          <span className="route-label">Transport</span>
          <span className="route-value">
            {route.transportType}
          </span>
        </div>

        <div className="route-stat">
          <span className="route-label">Time</span>
          <span className="route-value">
            {route.durationMinutes} min
          </span>
        </div>

        <div className="route-stat">
          <span className="route-label">Cost</span>
          <span className="route-value">
            {route.price} SEK
          </span>
        </div>
      </div>
    </div>
  );
}

export default RouteCard;