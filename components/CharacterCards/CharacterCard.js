import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const Card = styled.div`
  margin: 20px auto;
  padding: 10px 0;

  height: 200px;
  width: 300px;

  border: 1px solid black;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
`;

const CharacterCard = ({ data }) => {
  return (
    <Card>
      <h4>Name: {data.name}</h4>
      <p>Titles: {data.titles[0] ? data.titles[0] : "None"}</p>
      <p>Gender: {data.gender}</p>
      <Button color="info" className="mx-5">
        Learn More
      </Button>
    </Card>
  );
};

export default CharacterCard;
