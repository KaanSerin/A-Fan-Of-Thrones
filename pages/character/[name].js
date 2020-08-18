import React from "react";
import styled from "styled-components";
import axios from "axios";
import Layout from "../../components/Layout";
import CharacterCard from "../../components/CharacterCards/CharacterCard";

const Character = ({ data }) => {
  return (
    <Layout>
      <div>Some Character</div>
      <CharacterCard data={data} />
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const name = context.query.name;
  console.log(name);
  const response = await axios.get(
    `https://api.got.show/api/book/characters/${name}`
  );
  const data = await response.data;
  return {
    props: {
      data,
    },
  };
};

export default Character;
