import React from "react";
import styled from "styled-components";
import axios from "axios";
import Layout from "../../components/Layout";
import HouseCard from "../../components/HouseCard";
import classes from "./house.module.css";

const House = ({ data }) => {
  return (
    <Layout>
      <div className={classes.HouseContainer}>
        <div className={classes.HouseDetails}>
          <h3>{data.name}</h3>
          <p>
            <strong>Region:</strong> {data.region}
          </p>
          <div>
            <strong>Titles:</strong>
            {"\t"}
            {data.titles[0] === "" ? (
              "None"
            ) : (
              <ul>
                {data.titles.map((title) => (
                  <li key={title}>{title}</li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <strong>Ancestral Weapons:</strong>
            {"\t"}
            {data.ancestralWeapons[0] === "" ? (
              "None"
            ) : (
              <ul>
                {data.titles.map((title) => (
                  <li key={title}>{title}</li>
                ))}
              </ul>
            )}
          </div>
          <p>
            <strong>Founder:</strong>{" "}
            {data.founder === "" ? "Unknown" : data.founder}
          </p>
        </div>
        <img
          src={data.image ? data.image : "/images/castle.jpg"}
          alt="Image of a castle interior"
        />
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const name = context.query.name;
  console.log(name);

  const response = await axios.get(
    `https://www.anapioficeandfire.com/api/houses?name=${name}`
  );

  const data = await response.data[0];

  return {
    props: {
      data,
    },
  };
};

export default House;
