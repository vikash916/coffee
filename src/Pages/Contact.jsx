import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <h1>📬 Contact Us</h1>
      <p>We’d love to hear from you! Reach out for feedback, queries, or just to say hi.</p>

      <div className="contact-form-section">
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const name = formData.get("name");
            const email = formData.get("email");
            const message = formData.get("message");

            console.log("📨 Contact Message Received:");
            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Message:", message);

            e.target.reset();
          }}
        >
          <label>Name</label>
          <input name="name" type="text" placeholder="Your Name" required />

          <label>Email</label>
          <input name="email" type="email" placeholder="you@example.com" required />

          <label>Message</label>
          <textarea name="message" rows="5" placeholder="Write your message..." required />

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>📍 Our Office</h3>
          <p>123 Brew Street, Beans City, India</p>

          <h3>📞 Call Us</h3>
          <p>+91-9876543210</p>

          <h3>📧 Email</h3>
          <p>support@coffeelove.com</p>

          <div className="contact-socials">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};
