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
  align-items: center;

  img {
    width: 60%;
  }
`;

const HouseCard = ({ data }) => {
  console.log(data);
  return (
    <House>
      <img src="/images/castle.jpg" alt="Image of a castle interior" />
      <h4>House Name: {data.name}</h4>
      <p>Location: {data.location}</p>
      <p>Type: {data.type}</p>
      <Button color="info">Learn More</Button>
    </House>
  );
};

export default HouseCard;
