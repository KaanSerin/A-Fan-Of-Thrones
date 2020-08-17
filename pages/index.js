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
    "https://api.got.show/api/book/characters/Brienne%20of%20Tarth",
    "https://api.got.show/api/book/characters/Tyrion%20Lannister",
    "https://api.got.show/api/book/characters/Tywin%20Lannister",
  ];

  const favChars = [];

  for (let url of favUrls) {
    const res = await axios.get(url);
    favChars.push(res.data);
  }

  const favHouseUrl = "https://api.got.show/api/show/castles/The%20Eyrie";

  const res = await axios.get(favHouseUrl);
  const favHouse = await res.data[0];
  favHouse.image =
    "https://awoiaf.westeros.org/images/thumb/8/8f/The_Eyrie-TN.jpg/250px-The_Eyrie-TN.jpg";

  return {
    props: {
      favChars,
      favHouse,
    },
  };
};
