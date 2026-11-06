function RouteCard({ title, transport, time, cost }) {
  return (
    <div className="route-card">
      <h3>{title}</h3>

      <div className="route-info">
        <div className="route-stat">
          <span className="route-label">Transport</span>
          <span className="route-value">{transport}</span>
        </div>

        <div className="route-stat">
          <span className="route-label">Time</span>
          <span className="route-value">{time}</span>
        </div>

        <div className="route-stat">
          <span className="route-label">Cost</span>
          <span className="route-value">{cost}</span>
        </div>
      </div>
    </div>
  );
}

export default RouteCard;