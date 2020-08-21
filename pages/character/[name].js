import React from "react";
import styled from "styled-components";
import axios from "axios";
import Layout from "../../components/Layout";
import _ from "lodash";
import { valueOrDefault, listOrDefault } from "../../utility";

const CharacterSection = styled.div`
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 5px;

  .character-details {
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .character-details:not(:last-child) {
    border-right: 1px solid rgba(200, 200, 200, 0.4);
  }

  .list-with-title {
    width: 100%;
  }

  .character-details * {
    margin-top: 10px;
  }

  .character-details ul {
    margin: 0 auto;
    width: 70%;
    list-style: upper-roman;
    padding: 0;
  }

  .character-details img {
    width: 100%;
    padding: 10px;
  }
`;

const Character = ({ data }) => {
  return (
    <Layout>
      <CharacterSection>
        <div className="character-details">
          <img src={valueOrDefault(data.image, "/images/knight.jpg")} />
        </div>
        <div className="character-details">
          <h3>Full Name: {data.name}</h3>
          <h5>Gender: {_.capitalize(data.gender)}</h5>
          <h5>Year of Birth: {valueOrDefault(data.birth, "Unknown")}</h5>
          <h5>
            Place of Birth: {valueOrDefault(data.placeOfBirth, "Unknown")}
          </h5>
          <div className="list-with-title">
            <h5>Spouse: </h5>
            <ul>
              {data.spouse.length > 0
                ? data.spouse.map((spouse, index) => (
                    <li key={index}>{spouse}</li>
                  ))
                : "None"}
            </ul>
          </div>

          <div className="list-with-title">
            <h5>Children: </h5>
            <ul>{listOrDefault(data.children, "None")}</ul>
          </div>

          <h5>
            Culture: {valueOrDefault(_.capitalize(data.culture), "Unknown")}
          </h5>
        </div>
        <div className="character-details">
          <div className="list-with-title">
            <h3>Titles: </h3>
            <ul>{listOrDefault(data.titles, "None")}</ul>
          </div>
          <div className="list-with-title">
            <h5>Allegiance: </h5>
            <ul>{listOrDefault(data.allegiance, "Unknown")}</ul>
          </div>
        </div>
      </CharacterSection>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const name = context.query.name;
  console.log(name);
  const response = await axios.get(
    `https://api.got.show/api/book/characters/${name}`
  );
  const data = await response.data;
  return {
    props: {
      data,
    },
  };
};

export default Character;
