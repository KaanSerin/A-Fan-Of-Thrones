import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const AboutPage = styled.div`
  .title {
    margin-bottom: 20px;
  }

  p {
    line-height: 2.6rem;
  }
`;

const about = ({}) => {
  return (
    <Layout>
      <AboutPage>
        <h2>About Me</h2>
        <p>
          Godfather ipsum dolor sit amet. This one time, this one time I'll let
          you ask me about my affairs. Sonny, please don't do anything. Please
          don't do anything. Fredo, you're my older brother, and I love you. But
          don't ever take sides with anyone against the Family again. Ever. I
          don't like violence, Tom. I'm a businessman; blood is a big expense.
        </p>
        <p>
          Te salut, Don Corleone. If anything in this life is certain, if
          history has taught us anything, it is that you can kill anyone. My
          father taught me many things here - he taught me in this room. He
          taught me: keep your friends close, but your enemies closer. That's my
          family Kay, that's not me. Don't ever give an order like that again.
          Not while I'm alive.
        </p>
      </AboutPage>
    </Layout>
  );
};
export default about;
