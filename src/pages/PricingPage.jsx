export default function PricingPage() {
  return (
    <main className="page">
      <section className="pricing">
      <div className="container">
        <h1><i> Pricing</i></h1>
        <h3><i>Choose plan that fits for your business.</i></h3>
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

            <button className="btn btn-success">Select Plan</button>
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
            <button className="btn btn-success">Select Plan</button>
            <p>⭐ Most Popular</p>
          </div>

          <div className="card featured">
             <h3><i>🔹Business</i></h3>
            <p>Best for mid-size organizations
              <li>Full AI feature suite</li>
              <li>Advanced automation rules</li>
              <li>Custom dashboards & reporting</li>
              <li>Unlimited integrations</li>
              <li>Role-based access control</li>
              <li>Up to 50 team members</li>
             💰 Starting at $249/month</p>
            <button className="btn btn-success">Select Plan</button>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}
