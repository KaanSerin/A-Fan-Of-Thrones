import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const Card = styled.div`
  margin: 20px auto;
  padding: 20px;

  height: 420px;
  width: 320px;

  border: 1px solid black;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin: 5px auto;
  }

  img {
    object-fit: contain;
    height: 60%;
  }
`;

const CharacterCard = ({ data }) => {
  return (
    <Card>
      <h4>Name: {data.name}</h4>
      <img
        src={data.image}
        alt="A knight wearing chainmail armor looking super angry"
      />
      <p>Titles: {data.titles[0] ? data.titles[0] : "None"}</p>
      <p>Gender: {data.gender}</p>
      <Button color="info" className="mx-5">
        Learn More
      </Button>
    </Card>
  );
};

export default CharacterCard;
