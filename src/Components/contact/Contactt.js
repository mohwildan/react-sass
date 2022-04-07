import React from "react";
import "./Contactt.scss";

function Contactt() {
  return (
      <div className="contact">

    <section>
      <div className="contact-contatiner">
        <div className="name">
          <div className="frish-name">
            <h1>Frish Name <span>*</span></h1>
            <input type="text" name="name" />
          </div>
          <div className="last-name">
            <h1>Last Name <span>*</span></h1>
            <input type="text" name="name" />
          </div>
        </div>
        <div className="email">
            <h1>Email <span>*</span></h1>
            <input type="text" name="email"/>
        </div>
        <div className="message">
            <h1>Message <span>*</span></h1>
            <textarea name="message" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="btn">
        <button>Send message</button>
        </div>
      </div>
    </section>
      </div>
  );
}

export default Contactt;
