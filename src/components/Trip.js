import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Book hotel</h1>
      <div className="hotel">
        <img src="kunhal-riverside-naran.png" alt="trip1" />
        <ul>
          <li><h2>Kunhar Riverside Hotel</h2></li>
          <li><p>Kunhar Hotel RiverSide Block has a garden, terrace, a restaurant and bar in Nārān. This 4-star hotel offers room service and a 24-hour front desk. The hotel features family rooms.</p></li>
          <li><p style={{marginTop: "1rem"}}>Price: 10,000 PKR</p></li>
          <li><a className="booker" href="/hotel">Book</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Trip;
