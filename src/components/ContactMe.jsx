const ContactMe = () => {
  return (
    <section className="s2">
      <div className="main-container">
        <a href=""></a>
        <h3 style={{ textAlign: "center" }}>Get In Touch</h3>

        <form
          id="contact-form"
          action="https://formsubmit.co/54f11a2809d7c331325a8bb414cb2f98"
          method="POST"
        >
          <a name="contact"></a>

          <label>Name</label>
          <input
            className="input-field"
            type="text"
            name="name"
            placeholder="Name (optional)"
          />

          <label>Subject</label>
          <input
            className="input-field"
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <label>Email</label>
          <input
            className="input-field"
            type="text"
            name="email"
            placeholder="your@email.com"
            required
          />

          <label>Message</label>
          <textarea
            className="input-field"
            name="message"
            placeholder="Write your message here"
            required
          ></textarea>

          <input id="submit-btn" type="submit" value="Send" />

          <input type="hidden" name="_captcha" value="false" />
        </form>
      </div>
    </section>
  );
};
export default ContactMe;
