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
    bio: "A origem do Coringa permanece um mistério, com múltiplas versões de sua história, sendo a mais conhecida a de um comediante fracassado que caiu em um tanque de produtos químicos. Autoproclamado 'Príncipe Palhaço do Crime', ele representa o caos e a imprevisibilidade em sua forma mais pura. Sua genialidade criminosa é equiparada apenas por sua insanidade, criando elaborados esquemas não pelo ganho material, mas pelo prazer de semear o caos e desafiar Batman. Sua relação com o Cavaleiro das Trevas é uma dança macabra de opostos, onde ele constantemente tenta provar que todos estão a apenas 'um dia ruim' de se tornarem como ele. Mestre manipulador e estrategista brilhante, o Coringa é temido até mesmo por outros vilões, sendo capaz de transformar suas próprias gargalhadas em uma arma de terror psicológico.",
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
    bio: "Lex Luthor é o epítome do potencial humano levado ao extremo da ambição e arrogância. Um gênio autodidata com um QI estimado acima de 200, ele construiu a LexCorp do zero, transformando-a em uma das maiores corporações do mundo. Sua obsessão com Superman nasce não apenas do ciúme, mas da crença fundamental de que a humanidade deve alcançar a grandeza por seus próprios méritos, sem depender de seres alienígenas. Utilizando sua vasta fortuna e intelecto superior, Luthor desenvolve tecnologias revolucionárias e manipula a política global, sempre mantendo uma fachada de filantropo respeitável enquanto secretamente trama a queda do Homem de Aço. Sua complexa rede de influência e recursos praticamente ilimitados o tornam um dos vilões mais perigosos do universo DC, mesmo sem superpoderes.",
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
    bio: "Dr. Harleen Quinzel era uma promissora psiquiatra no Asilo Arkham até que sua vida mudou ao tentar tratar o Coringa. Durante suas sessões, ela foi gradualmente manipulada e seduzida pela natureza caótica de seu paciente, transformando-se na infame Arlequina. Com um doutorado em psiquiatria e uma ginasta talentosa, ela combina inteligência aguçada com habilidades acrobáticas extraordinárias. Sua personalidade complexa oscila entre momentos de lucidez brilhante e caos total, tornando-a imprevisível e perigosa. Após anos de abuso em seu relacionamento com o Coringa, ela encontrou independência e desenvolveu sua própria identidade criminal, frequentemente alternando entre vilã e anti-heroína. Sua amizade com Hera Venenosa mostra seu lado mais humano, provando que mesmo no mundo do crime, há espaço para crescimento e redenção.",
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
    bio: "Barbara Ann Minerva era uma renomada arqueóloga britânica cuja ambição a levou a buscar o poder místico da tribo Urzkartaga. Através de um ritual antigo, ela se transformou na Mulher-Leopardo, ganhando força sobre-humana e agilidade felina, mas a um preço terrível: uma maldição que a condena a uma fome insaciável por carne humana e um conflito constante entre sua humanidade e sua natureza bestial. Sua rivalidade com a Mulher-Maravilha é alimentada não apenas por confrontos físicos, mas por uma inveja profunda da pureza e nobreza da amazona. Como uma das maiores especialistas mundiais em artefatos místicos, ela combina conhecimento acadêmico com poder sobrenatural, tornando-a uma adversária formidável tanto mental quanto fisicamente.",
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
    bio: "Thaal Sinestro foi considerado o maior Lanterna Verde de todos os tempos, mantendo seu setor espacial em perfeita ordem através de métodos autoritários. Sua queda começou quando os Guardiões descobriram que ele havia escravizado seu planeta natal, Korugar, em nome da ordem. Expulso da Tropa dos Lanternas Verdes, ele forjou um anel amarelo alimentado pelo medo, o oposto da força de vontade verde, e fundou a Tropa Sinestro. Mestre estrategista e manipulador, ele acredita genuinamente que o medo é a única forma de manter a ordem no universo. Sua complexa relação com Hal Jordan, que já foi seu aprendiz, representa o conflito entre ordem e liberdade, com Sinestro vendo suas ações tirânicas como necessárias para um bem maior.",
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
    bio: "Slade Wilson era um oficial do exército que se voluntariou para experimentos militares secretos, ganhando força, agilidade e capacidade mental sobre-humanas. Como Exterminador, ele se tornou o mercenário mais temido do mundo, capaz de usar 90% de seu cérebro e possuindo reflexos extraordinários. Sua reputação é construída não apenas em sua letalidade, mas em sua inteligência tática superior e capacidade de antecipação. Pai complexo e mentor distorcido, sua relação com seus filhos e com os Jovens Titãs revela camadas de humanidade sob sua fachada fria de assassino profissional. Apesar de seu código de honra próprio, sua obsessão com contratos e provações o levou a conflitos com praticamente todos os heróis do universo DC, provando-se um dos adversários mais formidáveis mesmo sem poderes místicos ou tecnologia avançada.",
    foto: exterminadorImg,
    image: exterminadorImg,
  },
  {
    id: 7,
    name: "Darkseid",
    true_name: "Uxas",
    criacao: "Jack Kirby",
    primeira_aparicao: "Superman's Pal Jimmy Olsen #134 (1970)",
    cidade: "Apokolips",
    identidade: "Darkseid",
    bio: "Darkseid é a personificação do mal cósmico, um ser de poder quase divino que governa o planeta infernal de Apokolips. Originalmente conhecido como Uxas, ele traiu e absorveu o poder dos antigos deuses, tornando-se uma das entidades mais poderosas do universo DC. Sua busca pela Equação Anti-Vida, uma fórmula matemática que permitiria controlar toda a vida consciente, o coloca em rota de colisão com os maiores heróis da Terra. Dotado de imenso poder físico, imortalidade e os devastadores Raios Ômega de seus olhos, que podem desintegrar, transportar ou ressuscitar suas vítimas, Darkseid representa a tirania em sua forma mais pura. Sua filosofia nihilista e busca pelo controle absoluto o tornam uma ameaça não apenas à Terra, mas à própria existência do livre-arbítrio no universo.",
    foto: darkseidImg,
    image: darkseidImg,
  },
  {
    id: 8,
    name: "Espantalho",
    true_name: "Jonathan Crane",
    criacao: "Bill Finger e Bob Kane",
    primeira_aparicao: "World's Finest Comics #3 (1941)",
    cidade: "Gotham City",
    identidade: "Espantalho",
    bio: "Dr. Jonathan Crane era um professor de psicologia especializado em fobias, que foi demitido por realizar experimentos antiéticos em seus alunos. Obcecado pelo medo como ferramenta de poder, ele desenvolveu uma potente toxina do medo que força suas vítimas a vivenciarem seus piores pesadelos. Como Espantalho, ele combina seu vasto conhecimento de psicologia com química avançada para explorar e manipular os medos mais profundos das pessoas. Sua aparência esquelética e voz perturbadora são cuidadosamente projetadas para maximizar o impacto psicológico em suas vítimas. Diferente de outros vilões que buscam poder ou riqueza, Crane é movido por uma curiosidade científica mórbida, vendo Gotham como seu laboratório pessoal para estudar os efeitos do medo extremo na psique humana.",
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
    bio: "Leonard Snart cresceu em um ambiente abusivo, desenvolvendo uma personalidade calculista como mecanismo de sobrevivência. Autodidata em termos de engenharia e termodinâmica, ele roubou e modificou um protótipo de arma criogênica, transformando-a em sua icônica pistola de frio, capaz de reduzir temperaturas ao zero absoluto. Como Capitão Frio, ele lidera os Trapaceiros, um grupo de vilões tecnológicos que desafiam o Flash. Diferente de muitos criminosos, Snart opera com um código de honra estrito e demonstra lealdade feroz a seus aliados. Sua relação com sua irmã, Lisa Snart, e sua ocasional disposição para ajudar heróis em crises maiores revelam um homem complexo que poderia ter sido um herói em outras circunstâncias. Sua inteligência tática e domínio da tecnologia do frio o tornam um dos adversários mais formidáveis do Flash.",
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
    bio: "Bizarro é uma duplicata imperfeita do Superman, criada através de um processo de clonagem defeituoso. Sua aparência cristalina e mente distorcida são reflexos de sua natureza como uma cópia imperfeita do Homem de Aço. Possuindo todos os poderes do Superman, mas de forma inversa ou alterada, Bizarro opera com uma lógica reversa: ele diz 'olá' quando quer dizer 'adeus', causa destruição quando tenta ajudar, e considera a feiura como beleza. Sua existência é uma tragédia cômica, pois frequentemente tenta fazer o bem, mas sua compreensão invertida da realidade resulta em caos. Vivendo em seu próprio mundo cubóide, Bizarro World, ele criou uma sociedade inteira que reflete sua natureza distorcida. Apesar de ser tecnicamente um vilão, sua natureza é mais de uma força caótica do que verdadeiramente maligna, tornando-o um dos antagonistas mais únicos e imprevisíveis do universo DC.",
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