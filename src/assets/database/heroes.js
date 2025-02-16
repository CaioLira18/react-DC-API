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
    bio: "Bruce Wayne teve sua vida transformada ainda criança ao testemunhar o brutal assassinato de seus pais em um beco de Gotham City. Herdeiro de uma vasta fortuna, dedicou sua vida ao combate ao crime, viajando pelo mundo para aperfeiçoar seu corpo e mente. Retornou a Gotham como Batman, um vigilante que usa tecnologia de ponta, habilidades extraordinárias em dedução e combate, além de um vasto arsenal de equipamentos para enfrentar uma galeria única de vilões. Operando das sombras e inspirando medo nos criminosos, Batman se tornou uma lenda urbana e o maior detetive do mundo, protegendo Gotham City com uma determinação inabalável, provando que mesmo sem superpoderes, um homem pode se tornar um símbolo de justiça.",
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
    bio: "Enviado ainda bebê do planeta Krypton momentos antes de sua destruição, Kal-El foi encontrado e adotado por Jonathan e Martha Kent, que o criaram como Clark Kent em Smallville, Kansas. Sob o sol amarelo da Terra, desenvolveu poderes extraordinários como super força, voo, visão de calor e invulnerabilidade. Como Superman, ele se tornou o maior herói da Terra, defendendo Metrópolis e o mundo inteiro de ameaças, desde criminosos comuns até invasores alienígenas. Trabalhando como jornalista no Planeta Diário, Clark mantém contato com a humanidade que jurou proteger, equilibrando sua vida heroica com seus relacionamentos pessoais. Superman representa o melhor da humanidade: esperança, verdade e justiça, inspirando gerações a lutar pelo bem.",
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
    bio: "Diana é a princesa das Amazonas, uma raça de guerreiras imortais criadas pelos deuses do Olimpo para proteger a humanidade. Nascida e criada na paradisíaca ilha de Themyscira, ela foi treinada nas antigas artes da guerra pelas melhores guerreiras amazonas. Quando Steve Trevor caiu em sua ilha, Diana deixou seu lar para ajudar no mundo dos homens durante a guerra, tornando-se a Mulher Maravilha. Armada com braceletes indestrutíveis, o Laço da Verdade e sua tiara, ela combina força sobre-humana com sabedoria milenar. Como embaixadora da paz, Diana luta não apenas com sua força física, mas também com compaixão e amor, defendendo a igualdade e a justiça para todos.",
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
    bio: "Arthur Curry é filho de Tom Curry, um faroleiro, e Atlanna, a rainha de Atlântida, fazendo dele herdeiro do trono do reino submarino. Dotado de força sobre-humana, capacidade de respirar debaixo d'água e o poder de se comunicar telepaticamente com criaturas marinhas, ele se tornou o protetor dos oceanos. Como Aquaman, Arthur busca unir os mundos da superfície e das profundezas, enfrentando ameaças que põem em risco ambos os reinos. Rei de Atlântida, ele governa sete décimos do planeta Terra, comandando os mares com sabedoria e força, enquanto luta para preservar o equilíbrio ecológico dos oceanos e proteger tanto seus súditos quanto a humanidade.",
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
    bio: "Kara Zor-El, prima de Superman, foi enviada à Terra de Krypton com a missão de proteger seu primo bebê, Kal-El. Porém, sua nave ficou presa na Zona Fantasma por décadas, e quando finalmente chegou à Terra, descobriu que seu primo já havia crescido e se tornado Superman. Adaptando-se a um mundo totalmente novo e lidando com poderes similares aos de seu primo, Kara assumiu a identidade de Supergirl, tornando-se uma heroína por mérito próprio. Com sua personalidade única e otimista, ela equilibra sua vida como super-heroína com sua jornada de autodescoberta na Terra, usando seus poderes kryptonianos para proteger sua nova casa enquanto honra a memória de seu planeta natal.",
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
    bio: "Koriand'r é uma princesa guerreira do planeta Tamaran, onde foi traída e vendida como escrava por sua própria irmã. Após escapar do cativeiro, encontrou refúgio na Terra, onde se tornou conhecida como Estelar. Dotada de força sobre-humana, capacidade de voo e habilidade de disparar rajadas de energia solar chamadas 'starbolts', ela se juntou aos Jovens Titãs. Sua natureza alegre e curiosa sobre a cultura terrestre contrasta com seu passado turbulento, fazendo dela uma heroína única que combina poder extraordinário com um coração gentil. Apesar das adversidades que enfrentou, Estelar mantém uma visão otimista da vida, usando suas experiências para ajudar outros e proteger seu novo lar.",
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
    bio: "Dick Grayson nasceu em uma família de acrobatas de circo, os 'Graysons Voadores', até que uma tragédia mudou sua vida: seus pais foram assassinados durante uma apresentação. Bruce Wayne, que testemunhou o ocorrido, viu em Dick um reflexo de seu próprio passado e o adotou. Treinado por Batman, Dick se tornou Robin, o primeiro Parceiro Maravilha, combinando sua agilidade acrobática natural com técnicas de combate e investigação aprendidas com seu mentor. Como Robin, ele trouxe luz à sombria cruzada do Batman, eventualmente crescendo para se tornar seu próprio herói, Asa Noturna. Sua jornada de parceiro júnior a líder dos Jovens Titãs demonstra sua evolução como herói e inspiração para futuras gerações.",
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
    bio: "Rachel Roth, conhecida como Ravena, nasceu da união entre uma mulher humana e Trigon, um poderoso demônio interdimensional. Criada pelos monges de Azarath, ela aprendeu a controlar suas emoções e poderes místicos, incluindo telecinese, projeção astral e empatia. Constantemente lutando contra sua herança demoníaca, Ravena encontrou propósito e família nos Jovens Titãs, onde usa seus poderes para ajudar outros. Sua natureza introspectiva e luta interna entre luz e escuridão a tornam uma heroína complexa, que demonstra que nossas escolhas, não nossa origem, definem quem somos. Através de sua jornada, ela aprende a aceitar todos os aspectos de si mesma enquanto protege o mundo das forças das trevas.",
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
    bio: "Garfield Logan contraiu uma rara doença quando criança e foi salvo por seus pais cientistas através de um soro experimental que alterou seu DNA, dando-lhe a capacidade de se transformar em qualquer animal. Após perder seus pais em um acidente, ele foi adotado pela Patrulha do Destino, onde começou sua carreira heroica. Como Mutano, ele usa seus poderes de metamorfose animal de formas criativas e imprevisíveis, podendo se transformar desde em um minúsculo inseto até um poderoso T-Rex. Apesar de seu passado trágico, mantém um espírito alegre e brincalhão, usando o humor como mecanismo de defesa. Como membro dos Jovens Titãs, ele prova que mesmo os poderes mais incomuns podem fazer a diferença quando usados com coragem e criatividade.",
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
    bio: "Barry Allen era um meticuloso cientista forense da polícia de Central City quando foi atingido por um raio e banhado em produtos químicos em seu laboratório. O acidente o conectou à Força de Aceleração, concedendo-lhe a capacidade de se mover em velocidades inimagináveis. Como Flash, ele não apenas corre em super velocidade, mas pode vibrar através de objetos sólidos, criar redemoinhos de vento e até viajar no tempo. Sua mente científica o ajuda a encontrar usos inovadores para seus poderes, enquanto sua dedicação à justiça o mantém focado em proteger Central City. Barry equilibra sua vida de herói com seu trabalho forense, usando tanto sua inteligência quanto sua velocidade para resolver crimes e salvar vidas, provando ser verdadeiramente o homem mais rápido vivo.",
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