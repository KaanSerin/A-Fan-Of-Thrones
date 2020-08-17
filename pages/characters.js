import React from "react";
import styled from "styled-components";
import axios from "axios";
import Layout from "../components/Layout";
import CharacterCard from "../components/CharacterCards/CharacterCard";
import { v4 as uuid } from "uuid";
import { Button } from "reactstrap";
import { useRouter } from "next/router";

const CharactersStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

const Characters = ({ data }) => {
  const router = useRouter();
  const page = +router.query.page;

  const onNextPage = () => {
    router.push(`/characters?page=${page + 1}`);
  };

  return (
    <Layout>
      <CharactersStyled>
        {data.map((character) => (
          <CharacterCard key={uuid()} data={character} />
        ))}
      </CharactersStyled>

      <Button onClick={onNextPage} color="danger">
        Next Page
      </Button>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  console.log(context.query);
  const page = +context.query.page;

  const response = await axios.get(
    `https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=20`
  );

  const data = await response.data;
  return {
    props: {
      data,
    },
  };
};

export default Characters;
