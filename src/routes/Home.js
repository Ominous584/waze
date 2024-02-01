import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import Hero from "../components/Hero";
import Homeimage from "../assets/12.jpg";
import "../index.css";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        Homeimage={Homeimage}
        title="Your Journey Your Story"
        text="Choose Your Favourite Journey"
        buttonText="Travel Plan"
        url="/travelplan"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
