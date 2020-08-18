import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Axios from "axios";
import HouseCard from "../components/HouseCard";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import { Button } from "reactstrap";

const HousesStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const Houses = ({ data }) => {
  const router = useRouter();
  const page = +router.query.page;

  const onNextPage = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For IE, Chrome and Firefox
    router.push(`/houses?page=${page + 1}&pageSize=10`);
  };

  return (
    <Layout>
      <HousesStyled>
        {data.map((house) => (
          <HouseCard key={uuid()} data={house} />
        ))}
      </HousesStyled>
      <Button onClick={onNextPage} color="danger">
        Next Page
      </Button>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const page = +context.query.page;
  const url = `https://www.anapioficeandfire.com/api/houses?page=${page}&pageSize=10`;

  const response = await Axios.get(url);
  const data = await response.data;

  return {
    props: {
      data,
    },
  };
};

export default Houses;
