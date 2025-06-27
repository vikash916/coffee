import { useEffect, useState } from "react";
import { stores } from "../Components/StoreData"; 
import "./Store.css";

export const Store = () => {
  const [search, setSearch] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [sortedStores, setSortedStores] = useState(stores);

  // Haversine formula to calculate distance
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setUserLocation({ lat: latitude, lon: longitude });

      const withDistance = stores.map((s) => ({
        ...s,
        distance: calculateDistance(latitude, longitude, s.lat, s.lon).toFixed(1)
      }));

      setSortedStores(withDistance.sort((a, b) => a.distance - b.distance));
    });
  };

  const filtered = sortedStores.filter((s) =>
    s.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="store-container">
      <h2>Our Coffee Stores</h2>
      <p className="store-intro">Find the nearest place to grab your favorite brew.</p>

      <div className="store-controls">
        <input
          type="text"
          placeholder="Search by city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleLocation}>📍 Use My Location</button>
      </div>

      <div className="store-grid">
        {filtered.map((s) => (
          <div className="store-card" key={s.id}>
            <img src={s.image} alt={s.city} className="store-img" />
            <h3>{s.city}</h3>
            <p>{s.address}</p>
            {s.hours && (
              <p>
                <strong>🕒</strong> {s.hours}
              </p>
            )}
            {s.distance && (
              <p>
                <strong>📏</strong> {s.distance} km away
              </p>
            )}
            <a
              className="map-link"
              href={`https://www.google.com/maps/search/?api=1&query=${s.lat},${s.lon}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Map
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
