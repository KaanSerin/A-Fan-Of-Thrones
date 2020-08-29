import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import { useRouter } from "next/router";

const House = styled.div`
  margin: 20px auto;
  padding: 10px 30px;

  height: 450px;
  width: 100%;

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
  const router = useRouter();

  const onLearnMore = () => {
    router.push(`/house/${data.name}`);
  };

  return (
    <House className="box-card">
      <img
        src={data.image ? data.image : "/images/castle.jpg"}
        alt="Image of a castle interior"
      />
      <div className="details">
        <h4>House Name: {data.name}</h4>
        <p>Location: {data.location ? data.location : data.region}</p>
        <Button onClick={onLearnMore} color="info">
          Learn More
        </Button>
      </div>
    </House>
  );
};

export default HouseCard;
