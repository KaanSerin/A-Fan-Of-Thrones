import Layout from "../components/Layout";
import axios from "axios";
import CharacterCards from "../components/CharacterCards/CharacterCards";
import HouseCard from "../components/HouseCard";

export default function index({ favChars, favHouse }) {
  return (
    <Layout>
      <h2>My Favorite Characters</h2>
      <CharacterCards data={favChars} />
      <hr />
      <h2>My Favorite Location</h2>
      <HouseCard data={favHouse} />
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const favUrls = [
    "https://www.anapioficeandfire.com/api/characters/216",
    "https://www.anapioficeandfire.com/api/characters/1052",
    "https://www.anapioficeandfire.com/api/characters/823",
  ];

  const favChars = [];

  for (let url of favUrls) {
    const res = await axios.get(url);
    favChars.push(res.data);
  }

  const favHouseUrl = "https://www.anapioficeandfire.com/api/houses/7";

  const res = await axios.get(favHouseUrl);
  const favHouse = await res.data;

  return {
    props: {
      favChars,
      favHouse,
    },
  };
};
