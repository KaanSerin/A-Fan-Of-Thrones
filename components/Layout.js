import React from "react";
import Head from "next/head";
import Navigation from "./Navigation";
import styled from "styled-components";

const Main = styled.main`
  * {
    box-sizing: border-box;
  }

  width: 75%;
  max-width: 1200px;
  margin: auto;
  padding: 30px 0;
  font-size: 20px;
  flex-grow: 1;
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
    <div className="full-height-grow">
      <Head>
        <title>A Fan of Thrones</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="A fan website for George R. R. Martin's 'A Song of Ice and Fire' book series and HBO's Game of Thrones."
        />
        <meta
          name="keywords"
          content="A Song of Ice and Fire, A Game of Thrones, George R. R. Martin, Fansite, HBO"
        />
        <meta name="author" content="Kaan Serin" />
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

      <Footer>
        A fan site made with
        <span style={{ display: "inline-block", margin: "0 6px" }}> ❤ </span> by
        Kaan Serin
      </Footer>
    </div>
  );
};

export default Layout;
