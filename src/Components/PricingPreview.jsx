import { NavLink

 } from "react-router-dom";
export default function PricingPreview() {
  return (
    <main className="page">
      <section className="pricing">
      <div className="container">
        <h1><i>Simple Pricing</i></h1>
       
        <div className="grid">
          <div className="card">
            <h3><i>🔹Starter</i></h3>
            <p>Best for individuals & small teams
           
              <li>AI-powered insights (core features)</li>
              <li>Basic workflow automation</li>
              <li>Standard analytics dashboard</li>
              <li>Up to 3 team members</li>
              <li>Email support</li>
           💰 Starting at $29/month
            </p>
            {/* <button className="btn btn-success">Get Started</button> */}
          </div>

          <div className="card featured">
            <h3><i>🔹Growth</i></h3>
            <p>Best for scaling teams
              <li>Advanced AI insights</li>
              <li>Smart workflow automation</li>
              <li>Real-time analytics & reports</li>
              <li>Integrations with popular tools</li>
              <li>Up to 10 team members</li>
             💰 Starting at $99/month</p>
              <p>⭐ Most Popular</p>
            {/* <button className="btn btn-success">Book a Demo</button> */}
          </div>
        </div>
      </div>

       <NavLink className="navbar-brand text-center " to="/pricing">
     <div className="d-flex justify-content-center">
     <button type="button" className="btn btn-success mb-3" >
        Book a Demo</button>
        </div></NavLink> 
    </section>
    </main>
  );
}
