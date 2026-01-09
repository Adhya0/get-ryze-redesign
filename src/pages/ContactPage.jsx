export default function ContactPage() {
  return (
    <main className="page">
      <section className="contact">
        <div className="container" >
          <h1><i>Contact Us</i></h1>
          <p><i>
            Have questions or want to see Ryze in action?<br/>
            Fill out the form and our team will reach out.</i>
          </p>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Your Message" rows="5"></textarea>

            <button type="submit" className="btn btn-success">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
