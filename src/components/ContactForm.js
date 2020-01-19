import React from 'react';
export default function ContactForm() {
  return (
    <section>
      <h2>Get in touch</h2>
      <form
        method="post"
        name="contact"
        data-netlify-recaptcha="true"
        data-netlify="true"
      >
        <div className="fields">
          <div class="sr-only">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </div>
          <div className="field half">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="field">
            <label htmlFor="message">Your Message</label>
            <textarea name="message" id="message" required />
          </div>
          <div class="field">
            <div data-netlify-recaptcha="true"></div>
          </div>
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Send" className="primary" />
          </li>
        </ul>
      </form>
    </section>
  );
}
