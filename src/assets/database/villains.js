import { shuffleArray } from "../../utils/shuffle.js";
import coringaImg from '../../../imagens_viloes/Coringa.png';
import lexLuthorImg from '../../../imagens_viloes/LexLuthor.png';
import arlequinaImg from '../../../imagens_viloes/Arlequina.png';
import mulherLeopardoImg from '../../../imagens_viloes/MulherLeopardo.png';
import sinestroImg from '../../../imagens_viloes/Sinestro.png';
import exterminadorImg from '../../../imagens_viloes/Exterminador.png';
import darkseidImg from '../../../imagens_viloes/Darkseid.png';
import espantalhoImg from '../../../imagens_viloes/Espantalho.png';
import capitaoFrioImg from '../../../imagens_viloes/CapitaoFrio.png';
import bizarroImg from '../../../imagens_viloes/Bizarro.png';

export const villainsArray = [
  {
    id: 1,
    name: "Coringa",
    true_name: "Desconhecido",
    criacao: "Bill Finger, Bob Kane e Jerry Robinson",
    primeira_aparicao: "Batman #1 (1940)",
    cidade: "Gotham City",
    identidade: "Coringa",
    bio: "O maior inimigo do Batman, Coringa é um criminoso insano com uma obsessão pelo caos e um senso de humor distorcido.",
    foto: coringaImg,
    image: coringaImg,
  },
  {
    id: 2,
    name: "Lex Luthor",
    true_name: "Alexander Joseph Luthor",
    criacao: "Jerry Siegel e Joe Shuster",
    primeira_aparicao: "Action Comics #23 (1940)",
    cidade: "Metrópolis",
    identidade: "Lex Luthor",
    bio: "O arqui-inimigo do Superman, Lex Luthor é um gênio do crime e empresário que busca destruir o Homem de Aço.",
    foto: lexLuthorImg,
    image: lexLuthorImg,
  },
  {
    id: 3,
    name: "Arlequina",
    true_name: "Harleen Quinzel",
    criacao: "Paul Dini e Bruce Timm",
    primeira_aparicao: "Batman: The Animated Series (1992)",
    cidade: "Gotham City",
    identidade: "Arlequina",
    bio: "Psiquiatra que se apaixonou pelo Coringa, Arlequina se tornou sua cúmplice e uma das criminosas mais perigosas de Gotham.",
    foto: arlequinaImg,
    image: arlequinaImg,
  },
  {
    id: 4,
    name: "Mulher-Leopardo",
    true_name: "Barbara Ann Minerva",
    criacao: "William Moulton Marston e H. G. Peter",
    primeira_aparicao: "Wonder Woman #6 (1943)",
    cidade: "Desconhecida",
    identidade: "Mulher-Leopardo",
    bio: "Uma arqueóloga transformada em predadora mística, Mulher-Leopardo é uma das maiores inimigas da Mulher-Maravilha.",
    foto: mulherLeopardoImg,
    image: mulherLeopardoImg,
  },
  {
    id: 5,
    name: "Sinestro",
    true_name: "Thaal Sinestro",
    criacao: "John Broome e Gil Kane",
    primeira_aparicao: "Green Lantern #7 (1961)",
    cidade: "Korugar",
    identidade: "Sinestro",
    bio: "Ex-Lanterna Verde, Sinestro criou sua própria tropa baseada no medo e se tornou o maior inimigo de Hal Jordan.",
    foto: sinestroImg,
    image: sinestroImg,
  },
  {
    id: 6,
    name: "Exterminador",
    true_name: "Slade Wilson",
    criacao: "Marv Wolfman e George Pérez",
    primeira_aparicao: "New Teen Titans #2 (1980)",
    cidade: "Desconhecida",
    identidade: "Exterminador",
    bio: "Mercenário e assassino altamente treinado, Exterminador é um dos vilões mais perigosos do Universo DC.",
    foto: exterminadorImg,
    image: exterminadorImg,
  },
  {
    id: 7,
    name: "Darkseid",
    true_name: "Uxas",
    criacao: "Jack Kirby",
    primeira_aparicao: "Superman’s Pal Jimmy Olsen #134 (1970)",
    cidade: "Apokolips",
    identidade: "Darkseid",
    bio: "O governante tirano de Apokolips, Darkseid busca o controle do universo através da Equação Anti-Vida.",
    foto: darkseidImg,
    image: darkseidImg,
  },
  {
    id: 8,
    name: "Espantalho",
    true_name: "Jonathan Crane",
    criacao: "Bill Finger e Bob Kane",
    primeira_aparicao: "World’s Finest Comics #3 (1941)",
    cidade: "Gotham City",
    identidade: "Espantalho",
    bio: "Cientista especializado em medos e fobias, Espantalho usa toxinas para aterrorizar suas vítimas.",
    foto: espantalhoImg,
    image: espantalhoImg,
  },
  {
    id: 9,
    name: "Capitão Frio",
    true_name: "Leonard Snart",
    criacao: "John Broome e Carmine Infantino",
    primeira_aparicao: "Showcase #8 (1957)",
    cidade: "Central City",
    identidade: "Capitão Frio",
    bio: "Um dos principais inimigos do Flash, Capitão Frio usa uma arma de congelamento para cometer crimes.",
    foto: capitaoFrioImg,
    image: capitaoFrioImg,
  },
  {
    id: 10,
    name: "Bizarro",
    true_name: "Clone do Superman",
    criacao: "Otto Binder e George Papp",
    primeira_aparicao: "Superboy #68 (1958)",
    cidade: "Desconhecida",
    identidade: "Bizarro",
    bio: "Uma versão distorcida do Superman, Bizarro age de maneira inversa ao herói e causa caos por onde passa.",
    foto: bizarroImg,
    image: bizarroImg,
  }
];

export const villainsIndexedById = villainsArray.reduce((acc, currentObj) => {
  acc[currentObj.id] = currentObj;
  return acc;
}, {});

export const villainsIndexedByName = villainsArray.reduce((acc, currentObj) => {
  acc[currentObj.name] = currentObj;
  return acc;
}, {});

shuffleArray(villainsArray);
