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
  gap: 20px;

  .character-details {
    display: flex;
    flex-direction: column;
    padding: 0 10%;
    align-items: start;
    text-align: start;
  }

  .character-detail {
    display: list-item;
    list-style: circle;
    margin-bottom: 20px;
  }

  .list-with-title {
    width: 100%;
  }

  .character-details ul {
    margin: 0 auto;
    width: 70%;
    list-style: upper-roman;
    padding: 0;
  }

  img {
    width: 100%;
  }
`;

const Character = ({ data }) => {
  return (
    <Layout>
      <CharacterSection>
        <img src={valueOrDefault(data.image, "/images/knight.jpg")} />
        <div className="character-details">
          <h3 className="character-detail">Full Name: {data.name}</h3>
          <h5 className="character-detail">
            Gender: {_.capitalize(data.gender)}
          </h5>
          <h5 className="character-detail">
            Year of Birth: {valueOrDefault(data.birth, "Unknown")}
          </h5>
          <h5 className="character-detail">
            Place of Birth: {valueOrDefault(data.placeOfBirth, "Unknown")}
          </h5>
          <div className="list-with-title character-detail">
            <h5>Spouse: </h5>
            <ul>
              {data.spouse.length > 0
                ? data.spouse.map((spouse, index) => (
                    <li key={index}>{spouse}</li>
                  ))
                : "None"}
            </ul>
          </div>

          <div className="list-with-title character-detail">
            <h5>Children: </h5>
            <ul>{listOrDefault(data.children, "None")}</ul>
          </div>

          <h5 className="character-detail">
            Culture: {valueOrDefault(_.capitalize(data.culture), "Unknown")}
          </h5>
        </div>
        <div className="character-details">
          <div className="list-with-title character-detail">
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
