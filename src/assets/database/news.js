import { shuffleArray } from "../../utils/shuffle.js";
import { getArtists } from "../../utils/api.js";

export const newsArray = [
  {
    id: 1,
    image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000045911/bc90570730494cfa1ee0ab09820ac4669818b61afb6aaa26def9f4600e2706ea",
    titulo: "Krypto de Superman Legacy Será o cachorro “caroço de manga”! Conheça inspiração de James Gunn",
    data: "13/02/2025",
    content: "Em Superman Legacy, o diretor James Gunn introduz Krypto, o supercão companheiro do Superman, inspirado em seu próprio cachorro adotado, Ozu. Resgatado de uma situação de acúmulo com mais de 60 cães sem contato humano, Ozu inicialmente apresentou comportamentos desafiadores, destruindo móveis e até mesmo o laptop de Gunn. Essa experiência levou o diretor a imaginar como seria lidar com um cão com superpoderes, resultando na inclusão de Krypto no roteiro. Gunn compartilhou imagens de Krypto, representado como um cão sem raça definida, conhecido popularmente como caroço de manga, com pelos espetados. Nos quadrinhos, Krypto possui habilidades semelhantes às do Superman, como voo, superforça e visão de calor. O filme, previsto para 2025, busca capturar a essência do personagem, inspirado na aclamada série All-Star Superman",
    image: "https://tm.ibxk.com.br/2024/10/16/16094342054026.jpg?ims=1200xorig",
  },
];

export const artistsIndexedById = newsArray.reduce((acc, currentObj) => {
  acc[currentObj.id] = currentObj;
  return acc;
}, {});


export const artistsIndexedByName = newsArray.reduce((acc, currentObj) => {
  acc[currentObj.name] = currentObj;
  return acc;
}, {});

shuffleArray(newsArray);
