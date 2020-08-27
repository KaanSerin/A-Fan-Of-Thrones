import Layout from "../components/Layout";
import axios from "axios";
import CharacterCards from "../components/CharacterCards/CharacterCards";
import HouseCard from "../components/HouseCard";

export default function index({ favChars, favHouse }) {
  return (
    <Layout>
      <h2>My Favorite Characters</h2>
      <CharacterCards data={favChars} />
      <h2 style={{ marginTop: "20px" }}>My Favorite Location</h2>
      <HouseCard data={favHouse} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const favUrls = [
    "https://anapioficeandfire.com/api/characters/216",
    "https://anapioficeandfire.com/api/characters/1052",
    "https://anapioficeandfire.com/api/characters/27",
  ];

  const favChars = [];

  for (let url of favUrls) {
    const res = await axios.get(url);
    favChars.push(res.data);
  }

  favChars[0].image =
    "https://awoiaf.westeros.org/thumb.php?f=Brienne_by_quickreaver.jpg&width=300";
  favChars[1].image =
    "https://awoiaf.westeros.org/thumb.php?f=Tyrion_lannister_Sebastian_Giacobino.jpg&width=350";
  favChars[2].image =
    "https://awoiaf.westeros.org/thumb.php?f=Brittmartin_TywinL.jpg&width=300";

  const favHouseUrl = "https://api.got.show/api/show/castles/The%20Eyrie";

  const res = await axios.get(favHouseUrl);
  let favHouse = await res.data[0];
  favHouse.image =
    "https://awoiaf.westeros.org/images/thumb/8/8f/The_Eyrie-TN.jpg/250px-The_Eyrie-TN.jpg";
  favHouse = { ...favHouse, name: "House Arryn of the Eyrie" };

  return {
    props: {
      favChars,
      favHouse,
    },
  };
};
