import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const Card = styled.div`
  margin: 20px auto;
  padding: 10px;

  height: 420px;
  width: 320px;

  border: 1px solid #ccc;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  p {
    margin: 5px auto;
  }

  img {
    object-fit: contain;
    height: 52%;
    width: auto;
    margin-bottom: 5px;
  }
`;

const CharacterCard = ({ data }) => {
  return (
    <Card>
      <h4>{data.name !== "" ? data.name : "Unknown"}</h4>
      <img
        src={data.image ? data.image : "./images/knight.jpg"}
        alt="A knight wearing chainmail armor looking super angry"
      />
      <p>Alias: {data.aliases ? data.aliases[0] : "None"}</p>
      <p>Gender: {data.gender}</p>
      <Button color="info" className="mx-5">
        Learn More
      </Button>
    </Card>
  );
};

export default CharacterCard;
