import Features from "../Components/Features";
 const features = [
    { title: "AI Insights", desc: "Gain actionable insights from your data in real time to make smarter business decisions." },
    { title: "Automation", desc: "Automate repetitive tasks and processes to save time and increase team productivity." },
    { title: "Analytics", desc: "Monitor performance metrics instantly with live dashboards and detailed reports." },
     { title: "Security", desc: "Protect your data with industry-standard security and compliance best practices." },
      { title: "Seamless Integrations", desc: "Connect Ryze effortlessly with your existing tools and platforms without complex setup." },
      { title: "Scalable Infrastructure", desc: "Grow confidently with a platform designed to scale alongside your business needs." },
  ]; 

export default function FeaturesPage() {
  return (
    <main className="page">
      <section className="features">
      <div className="container">
        <h1><i>Powerful Features</i></h1>
        <div className="grid">
          {features.map((f, i) => (
            <div key={i} className="card">
              <h3><i>{f.title}</i></h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </main>
  );
}
  

