import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const House = styled.div`
  margin: 20px auto;
  padding: 10px 30px;

  height: 450px;
  width: 90%;

  border: 1px solid #ccc;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    object-fit: contain;
    width: 60%;
    height: 100%;
  }

  div.details {
    width: 35%;
    margin: 0 auto;
  }
`;

const HouseCard = ({ data }) => {
  return (
    <House>
      <img
        src={data.image ? data.image : "/images/castle.jpg"}
        alt="Image of a castle interior"
      />
      <div className="details">
        <h4>House Name: {data.name}</h4>
        <p>Location: {data.location}</p>
        <p>Type: {data.type}</p>
        <Button color="info">Learn More</Button>
      </div>
    </House>
  );
};

export default HouseCard;
