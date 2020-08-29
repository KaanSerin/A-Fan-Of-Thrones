import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import { useRouter } from "next/router";

const Card = styled.div`
  margin: 20px 0;
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
  const router = useRouter();

  const onLearnMore = () => {
    router.push(`/character/${data.name}`);
  };

  return (
    <Card className="box-card">
      <h4>{data.name !== "" ? data.name : "Unknown"}</h4>
      <img
        src={data.image ? data.image : "/images/knight.jpg"}
        alt="A knight wearing chainmail armor looking super angry"
      />
      <p>Alias: {data.aliases[0] !== "" ? data.aliases[0] : "None"}</p>
      <p>Gender: {data.gender}</p>
      <Button
        onClick={onLearnMore}
        color="info"
        className="mx-5"
        disabled={data.name !== "" ? false : true}
      >
        Learn More
      </Button>
    </Card>
  );
};

export default CharacterCard;
