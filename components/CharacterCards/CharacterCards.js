import React from "react";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";

const Characters = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const CharacterCards = ({ data }) => (
  <Characters>
    {data.map((uData) => (
      <CharacterCard key={uData.name} data={uData} />
    ))}
  </Characters>
);

export default CharacterCards;
