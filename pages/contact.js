import React, { useState } from "react";
import Layout from "../components/Layout";
import { Form, Input, Button, FormGroup } from "reactstrap";
import styled from "styled-components";
import Modal from "../components/Modal/Modal";
import emailjs from "emailjs-com";

const ContactPage = styled.div`
  .title {
    margin-bottom: 20px;
  }
`;

const contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        e.target,
        "user_5Nz1ZMzDVlbq0AGTf2rzt"
      )
      .then((res) => {
        setShowModal(true);
        console.log("Success!", res.status, res.text);
      })
      .catch((err) => {
        setShowModal(true);
        console.log(err);
      });
  };

  const onModalClose = () => {
    setShowModal(false);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Layout>
      <ContactPage>
        <Modal
          header="A Fan of Thrones"
          message="Form Sent Successfuly!"
          open={showModal}
          clicked={onModalClose}
        />
        <h2 className="title">Contact</h2>
        <Form onSubmit={onFormSubmit}>
          <FormGroup>
            <Input
              name="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="message"
              style={{ height: "200px" }}
              type="textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </ContactPage>
    </Layout>
  );
};

export default contact;
