import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
const Contact = props => {
    const apikey = process.env.EMAILJS_PUBLIC_KEY
    console.log(apikey)
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm("default_service", "Boost-Web-Development", form.current, {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        // publicKey: "ksiZ0qgTCY2e-5gho",
      })
      .then(
        () => {
          console.log("SUCCESS!")
        },
        error => {
          console.log("FAILED...", error.text)
        }
      )

    //   clears the form after submitting email.
      e.target.reset()
  }

  return (
    <section id="contact">
      <div className="inner">
        <section>
          <form ref={form} onSubmit={sendEmail}>
            <div className="field half first">
              <label>Name</label>
              <input type="text" name="user_name" id="user_name" />
            </div>
            <div className="field half">
              <label>Email</label>
              <input type="text" name="user_email" id="user_email" />
            </div>
            <div className="field">
              <label >Message</label>
              <textarea name="message" id="message" rows="6"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
            </ul>
          </form>
          {/* <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form> */}
        </section>

        <section className="split">
          <section>
            <div className="contact-method">
              <span className="icon alt fa-envelope"></span>
              <h3>Email</h3>
              <a href="#">mattbwd@gmail.com</a>
            </div>
          </section>
        </section>
      </div>
    </section>
  )
}

export default Contact
