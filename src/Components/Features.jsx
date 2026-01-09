import { NavLink } from "react-router-dom";

export default function Features() {
 
  return (
    <section className="features">
      <div className="container">
        <h1><i>Powerful Features</i></h1>
       <p>Ryze uses advanced AI to analyze your data and surface meaningful insights in real time. Instead of digging through dashboards, teams can quickly understand trends, identify opportunities, and make confident, data-driven decisions.</p>
      </div>
       <NavLink className="navbar-brand text-center " to="/features">
     <div className="d-flex justify-content-center">
     <button type="button" className="btn btn-success " >
        view More</button>
        </div></NavLink> 
    </section>
  );
}
