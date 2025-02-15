import { shuffleArray } from "../../utils/shuffle.js";
import batmanSilencio from '../../../imagens_HQS/BatmanSilencio.png';
import PiadaMortal from '../../../imagens_HQS/PiadaMortal.png';
import Watchman from '../../../imagens_HQS/Watchman.png';
import cavaleiroDasTrevas from '../../../imagens_HQS/Cavaleiro.png';
import entreFoice from '../../../imagens_HQS/EntreFoice.png';
import reinoDoAmanha from '../../../imagens_HQS/ReinoDoAmanha.png';
import criseDeIndentidade from '../../../imagens_HQS/CriseDeIndentidade.png';
import pontodeIgnição from '../../../imagens_HQS/PontoDeIginção.png';
import grandesAstros from '../../../imagens_HQS/GrandesAstros.png';




export const hqArray = [
  {
    id: 1,
    image: "https://upload.wikimedia.org/wikipedia/pt/a/ad/F8ad1226.jpg",
    name: "Crise nas Infinitas Terras",
    autor: "Marv Wolfman e George Pérez",
    ano_lancamento: "1985",
    descricao: "Uma das sagas mais importantes da DC, redefiniu todo o multiverso da editora.",
  },
  {
    id: 2,
    image: batmanSilencio,
    name: "Batman: Silêncio",
    autor: "Jeph Loeb e Jim Lee",
    ano_lancamento: "2002",
    descricao: "Uma história envolvente com um dos maiores mistérios do Batman.",
  },
  {
    id: 3,
    image: PiadaMortal,
    name: "Batman: A Piada Mortal",
    autor: "Alan Moore e Brian Bolland",
    ano_lancamento: "1988",
    descricao: "Explora a origem do Coringa e um dos momentos mais sombrios do Batman.",
  },
  {
    id: 4,
    image: Watchman,
    name: "Watchmen",
    autor: "Alan Moore e Dave Gibbons",
    ano_lancamento: "1986",
    descricao: "Uma desconstrução do gênero de super-heróis e um dos quadrinhos mais influentes da história.",
  },
  {
    id: 5,
    image: grandesAstros,
    name: "Grandes Astros Superman",
    autor: "Grant Morrison e Frank Quitely",
    ano_lancamento: "2005",
    descricao: "Uma versão emocionante e poética do Superman.",
  },
  {
    id: 6,
    image: cavaleiroDasTrevas,
    name: "O Cavaleiro das Trevas",
    autor: "Frank Miller",
    ano_lancamento: "1986",
    descricao: "Mostra um Batman mais velho e brutal, redefinindo sua mitologia.",
  },
  {
    id: 7,
    image: entreFoice,
    name: "Entre a Foice e o Martelo",
    autor: "Mark Millar",
    ano_lancamento: "2003",
    descricao: "Uma história alternativa onde o Superman cresce na União Soviética.",
  },
  {
    id: 8,
    image: reinoDoAmanha,
    name: "O Reino do Amanhã",
    autor: "Mark Waid e Alex Ross",
    ano_lancamento: "1996",
    descricao: "Uma visão do futuro do Universo DC e o embate entre heróis clássicos e novos vigilantes.",
  },
  {
    id: 9,
    image: criseDeIndentidade,
    name: "Crise de Identidade",
    autor: "Brad Meltzer e Rags Morales",
    ano_lancamento: "2004",
    descricao: "Um thriller emocionante que envolve um assassinato e segredos obscuros dos heróis da DC.",
  },
  {
    id: 10,
    image: pontodeIgnição,
    name: "Ponto de Ignição",
    autor: "Geoff Johns e Andy Kubert",
    ano_lancamento: "2011",
    descricao: "A história que redefiniu o Universo DC, dando origem aos Novos 52.",
  },
];

  
export const songsIndexedByArtist = hqArray.reduce((acc, currentSong) => {
  const artist = currentSong.artist;
  if (artist in acc) {
    acc[artist].push(currentSong);
  } else {
    acc[artist] = [currentSong];
  }
  return acc;
}, {});

export const songsIndexedById = hqArray.reduce((acc, currentSong) => {
  const { _id } = currentSong;

  acc[_id] = currentSong;
  return acc;
}, {});

shuffleArray(hqArray);

console.log(songsIndexedById);
