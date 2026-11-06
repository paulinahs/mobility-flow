import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

function Home() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const navigate = useNavigate();

const handleSearch = (e) => {
  e.preventDefault();

  console.log(origin);
  console.log(destination);

  navigate(
    `/results?origin=${origin}&destination=${destination}`
  );
};

  return (
    <div className="home">
      <h1>MobilityFlow</h1>

      <p>Find the best route for your journey</p>

      <form onSubmit={handleSearch}>
        <div>
          <label>From</label>
          <input
            type="text"
            placeholder="Göteborg Central"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
        </div>

        <div>
          <label>To</label>
          <input
            type="text"
            placeholder="Chalmers"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        

        <button type="submit">
          Search Route
        </button>
      </form>
    </div>
  );
}




export default Home;