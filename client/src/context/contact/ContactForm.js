import React, { useState } from "react";
import ContactContext from "../../context/contact/contactContext";
const ContactForm = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });

  const { name, phone, email, type } = contact;

  const onChange = event =>
    setContact({
      ...contact,
      [event.target.name]: event.target.value
    });
  return (
    <form>
      <h2 className="text-primary">Add Contact</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
      />
      Personal{" "}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
      />
      Professional
      <div
        type="submit"
        value="Add Contact"
        className="btn btn-primary btn-block"
      >
        Add Contact
      </div>
    </form>
  );
};
export default ContactForm;
