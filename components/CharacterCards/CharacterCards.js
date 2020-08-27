import React from "react";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";

const Characters = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CharacterCards = ({ data }) => (
  <Characters>
    {data.map((uData) => (
      <CharacterCard key={uData.name} data={uData} />
    ))}
  </Characters>
);

export default CharacterCards;
