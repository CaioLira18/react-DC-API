import { shuffleArray } from "../../utils/shuffle.js";
import batmanImg from '../../../imagens_herois/Batman.png'
import supermanImg from '../../../imagens_herois/Superman.png';
import mulherMaravilhaImg from '../../../imagens_herois/MulherMaravilha.png';
import aquamanImg from '../../../imagens_herois/Aquaman.png';
import supergirlImg from '../../../imagens_herois/Supergirl.png';
import estelarImg from '../../../imagens_herois/Estelar.png';
import robinImg from '../../../imagens_herois/Robin.png';
import ravenaImg from '../../../imagens_herois/Ravena.png';
import mutanoImg from '../../../imagens_herois/Mutano.png';
import flashImg from '../../../imagens_herois/Flash.png';

export const avatarArray = [
  {
    id: 1,
    image: batmanImg,
  },
  {
    id: 2,
    image: supermanImg,
  },
  {
    id: 3,
    image: mulherMaravilhaImg,
  },
  {
    id: 4,
    image: supergirlImg,
  },
  {
    id: 5,
    image: aquamanImg,
  },
  {
    id: 6,
    image: estelarImg,
  },
  {
    id: 7,
    image: robinImg,
  },
  {
    id: 8,
    image: ravenaImg,
  },
  {
    id: 9,
    image: mutanoImg,
  },
  {
    id: 10,
    image: flashImg,
  },
];

export const artistsIndexedById = avatarArray.reduce((acc, currentObj) => {
  acc[currentObj.id] = currentObj;
  return acc;
}, {});


export const artistsIndexedByName = avatarArray.reduce((acc, currentObj) => {
  acc[currentObj.name] = currentObj;
  return acc;
}, {});

shuffleArray(avatarArray);
