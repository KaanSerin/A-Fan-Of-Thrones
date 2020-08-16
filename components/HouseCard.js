import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const House = styled.div`
  margin: 20px auto;
  padding: 10px 0;

  height: 600px;
  width: 90%;

  border: 1px solid red;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
`;

const HouseCard = ({ data }) => {
  console.log(data);
  return (
    <House>
      <h4>House Name: {data.name}</h4>
      <p>Region: {data.region}</p>
      <p>Words: {data.words}</p>
      <Button color="info" className="mx-5">
        Learn More
      </Button>
    </House>
  );
};

export default HouseCard;
