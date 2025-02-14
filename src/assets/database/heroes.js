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

export const heroesArray = [
  {
    id: 1,
    image: "https://recreio.com.br/media/uploads/dc_comics/batman_quadrinhos_capa.jpg",
    name: "Batman",
    true_name: "Bruce Wayne",
    criacao: "Bob Kane e Bill Finger",
    primeira_aparicao: "Detective Comics #27 (1939)",
    cidade: "Gotham City",
    identidade: "Batman",
    bio: "Bruce Wayne, após testemunhar o assassinato de seus pais, treinou intensamente e se tornou Batman, um justiceiro mascarado de Gotham City que, sem superpoderes, usa inteligência, artes marciais e tecnologia para combater vilões icônicos como o Coringa, protegendo sua cidade com estratégia e determinação.",
    foto: batmanImg,
  },
  {
    id: 2,
    image: "https://recreio.com.br/media/uploads/dc_comics/superman_1_capa.jpg",
    name: "Superman",
    true_name: "Kal-El / Clark Kent",
    criacao: "Jerry Siegel e Joe Shuster",
    primeira_aparicao: "Action Comics #1 (1938)",
    cidade: "Metrópolis",
    identidade: "Superman",
    bio: "Último filho de Krypton, Kal-El foi enviado à Terra e criado como Clark Kent. Com poderes sobre-humanos concedidos pelo Sol amarelo, tornou-se Superman, o símbolo da esperança e protetor de Metrópolis.",
    foto: supermanImg,
  },
  {
    id: 3,
    image: "https://miro.medium.com/v2/resize:fit:3200/1*dfozUIDv5y76maQoLWbCzw.jpeg",
    name: "Mulher Maravilha",
    true_name: "Diana Prince",
    criacao: "William Moulton Marston",
    primeira_aparicao: "All Star Comics #8 (1941)",
    cidade: "Themyscira",
    identidade: "Mulher Maravilha",
    bio: "Princesa das Amazonas e filha de Hipólita, Diana foi treinada como guerreira e enviada ao mundo dos humanos para ser um símbolo de paz e justiça, empunhando o Laço da Verdade e os Braceletes Indestrutíveis.",
    foto: mulherMaravilhaImg,
  },
  {
    id: 4,
    image: "https://spider145hqs.com/wp-content/uploads/2021/11/destaque_aquaman_especial80anos_panini_26112021.jpg?w=1200",
    name: "Aquaman",
    true_name: "Arthur Curry",
    criacao: "Paul Norris e Mort Weisinger",
    primeira_aparicao: "More Fun Comics #73 (1941)",
    cidade: "Atlântida",
    identidade: "Aquaman",
    bio: "Filho de Atlanna, rainha de Atlântida, e de um humano, Arthur Curry possui habilidades aquáticas e superforça. Como rei dos mares, luta para proteger os oceanos e a superfície.",
    foto: aquamanImg,
  },
  {
    id: 5,
    image: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/frankcho_supergirl.png",
    name: "Supergirl",
    true_name: "Kara Zor-El",
    criacao: "Otto Binder e Al Plastino",
    primeira_aparicao: "Action Comics #252 (1959)",
    cidade: "Metrópolis",
    identidade: "Supergirl",
    bio: "Prima de Superman, Kara Zor-El escapou da destruição de Krypton e chegou à Terra, onde usa seus poderes para proteger o planeta ao lado de seu primo, simbolizando coragem e determinação.",
    foto: supergirlImg,
  },
  {
    id: 6,
    image: "https://pm1.aminoapps.com/6413/1f8cc1432754cfb8ac3633bfbbea92072d919c74_hq.jpg",
    name: "Estelar",
    true_name: "Koriand'r",
    criacao: "Marv Wolfman e George Pérez",
    primeira_aparicao: "DC Comics Presents #26 (1980)",
    cidade: "Tamaran",
    identidade: "Estelar",
    bio: "Princesa alienígena de Tamaran, Estelar possui força sobre-humana, capacidade de voo e projeta rajadas de energia, sendo uma heroína poderosa e membro dos Jovens Titãs.",
    foto: estelarImg,
  },
  {
    id: 7,
    image: "https://conteudo.imguol.com.br/c/entretenimento/0f/2021/08/10/robin-de-tim-drake-se-assumiu-bissexual-em-nova-hq-do-batman-1628608960068_v2_1x1.jpg",
    name: "Robin",
    true_name: "Dick Grayson",
    criacao: "Bob Kane, Bill Finger e Jerry Robinson",
    primeira_aparicao: "Detective Comics #38 (1940)",
    cidade: "Gotham City",
    identidade: "Robin",
    bio: "Dick Grayson, ex-acrobata de circo, foi adotado por Bruce Wayne e treinado para ser Robin, o primeiro parceiro do Batman, tornando-se depois o herói Asa Noturna.",
    foto: robinImg,
  },
  {
    id: 8,
    image: "https://i.pinimg.com/originals/b0/89/94/b0899494996c537962c82a3bcea01150.jpg",
    name: "Ravena",
    true_name: "Rachel Roth",
    criacao: "Marv Wolfman e George Pérez",
    primeira_aparicao: "DC Comics Presents #26 (1980)",
    cidade: "Jump City",
    identidade: "Ravena",
    bio: "Rachel Roth, conhecida como Ravena, é uma empata e maga com poderes místicos, filha do demônio Trigon. Ela é membro dos Jovens Titãs e luta para conter sua herança demoníaca.",
    foto: ravenaImg,
  },
  {
    id: 9,
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRLqQvbStsLNaA3UM7BBFRH_huoOoKFCOe1k7db_x5vokDji6PfuH4Kl7bH74UgeiPFg8HQcUpzkYjgeX1gc07bkjERCbweiAvhUqokwPP4-zXzchiJDHlkv3gYFSG-FVYOychay5QuQ66/s1600/Mutano.png",
    name: "Mutano",
    true_name: "Garfield Logan",
    criacao: "Arnold Drake e Bob Brown",
    primeira_aparicao: "Doom Patrol #99 (1965)",
    cidade: "Jump City",
    identidade: "Mutano",
    bio: "Garfield Logan, ou Mutano, adquiriu a habilidade de se transformar em qualquer animal após um acidente envolvendo um soro experimental. Ele é um membro essencial dos Jovens Titãs e conhecido por seu bom humor.",
    foto: mutanoImg,
  },
  {
    id: 10,
    image: "https://t.ctcdn.com.br/Mrj-yKs6UK_iUWi_Oz9-BYVvXPs=/1024x576/smart/i537145.jpeg",
    name: "Flash",
    true_name: "Barry Allen",
    criacao: "Robert Kanigher e Carmine Infantino",
    primeira_aparicao: "Showcase #4 (1956)",
    cidade: "Central City",
    identidade: "Flash",
    bio: "Barry Allen, um cientista forense, ganhou supervelocidade após um acidente no laboratório envolvendo produtos químicos e um raio. Ele se tornou o Flash, o homem mais rápido do mundo e protetor de Central City.",
    foto: flashImg,
  }
];

export const artistsIndexedById = heroesArray.reduce((acc, currentObj) => {
  acc[currentObj.id] = currentObj;
  return acc;
}, {});

export const artistsIndexedByName = heroesArray.reduce((acc, currentObj) => {
  acc[currentObj.name] = currentObj;
  return acc;
}, {});

shuffleArray(heroesArray);