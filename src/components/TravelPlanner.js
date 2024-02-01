import "./TravelPlanner.css"
import { Link } from 'react-router-dom';
function TravelPlanner() {
    const budget = sessionStorage.getItem('budget');

    return(
        <div className="traveller-container">
            <h1>Plan your Trip!</h1><br></br>
            <br />
            <br></br>
            <div className="buttons-div">
                <Link className="hotel-button button" to="/Hotel">Find a Hotel</Link>
                <Link className="packages-button button" to="/travelpackages">Find Travel Packages</Link>
                {budget === null && <Link to={"/budget"} className="button">First Set Up a Budget</Link>}
            </div>
        </div>
    );
}

export default TravelPlanner;