import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1><i>AI That Helps You Grow Smarter, Faster</i></h1>
        <p>
          Ryze helps businesses automate workflows, gain insights,
          and make data-driven decisions using AI.
        </p>
        <div className="hero-ctaions">
         <div className="d-flex justify-content-center">
         <Link to="/pricing"><button type="button" className="btn btn-success ">Get Started</button></Link>
     </div>
         
        </div>
      </div>
    </section>
  );
}
