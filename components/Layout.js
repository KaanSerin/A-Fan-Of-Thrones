import React from "react";
import Head from "next/head";
import Navigation from "./Navigation";
import styled from "styled-components";

const Main = styled.main`
  width: 70%;
  margin: auto;
  padding: 20px 0;
  min-height: 86vh;
  font-size: 20px;
  text-align: center;
`;

const Footer = styled.footer`
  font-size: 0.9rem;
  padding: 20px 0;
  text-align: center;
  background-color: #343a40;
  color: rgb(250, 250, 250);
`;

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>A Fan of Thrones</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
        />
        <script src="https://unpkg.com/nprogress@0.2.0/nprogress.js" />;
      </Head>
      <header>
        <Navigation />
      </header>

      <Main>{children}</Main>

      <Footer>A fan site made with ❤️ by Kaan Serin</Footer>
    </>
  );
};

export default Layout;
