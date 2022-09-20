import React from "react";

function ContactPage() {
  return (
    <section>
      <a id="Contact"></a>

      <form
        className="form-box"
        action="https://formspree.io/f/mgedngbr"
        method="post"
      >
        <h2>Connect with us!</h2>
        <div>
          <input
            type="text"
            id="username"
            className="username"
            placeholder="Enter username"
            name="username"
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            className="email"
            placeholder="Email"
            name="email"
          />
        </div>
        <div>
          <input
            type="message"
            id="message"
            className="message"
            placeholder=" Type your message here to reach out!"
            name="message"
          />
        </div>

        <div>
          <button type="submit" className="btn">
            Send
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactPage;
