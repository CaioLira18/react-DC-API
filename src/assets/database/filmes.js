import { shuffleArray } from "../../utils/shuffle.js";
import logoEmpresa from '../../../logo_empresa/rocksteady.png';
import supermanFilme from '../../../imagens_Filmes/Superman.png';
import supergirlFilme from '../../../imagens_Filmes/Supergirl.png';
import clayFaceFilme from '../../../imagens_Filmes/ClayFace.png';

export const filmesArray = [
  {
    id: 1,
    image: supermanFilme,
    name: "Superman (2025)",
    ano_lancamento: "2025",
    escritor: "James Gunn",
    genero: "Ação e Aventura",
    descricao: "Clark Kent luta para equilibrar sua herança kryptoniana com sua criação humana enquanto protege a Terra de novas ameaças.",
  },
  {
    id: 2,
    image: supergirlFilme,
    name: "SuperGirl (2026)",
    ano_lancamento: "2026",
    escritor: "James Gunn",
    genero: "Ação e Aventura",
    descricao: "Kara Zor-El, prima do Superman, embarca em uma jornada cósmica para encontrar seu lugar no universo, enfrentando perigos e descobrindo sua verdadeira força.",
  },
  {
    id: 3,
    image: clayFaceFilme,
    name: "ClayFace (2026)",
    ano_lancamento: "2026",
    escritor: "James Gunn",
    genero: "Ação e Aventura",
    descricao: "A trágica história de Basil Karlo, um ator fracassado que se transforma no vilão Clayface, usando sua habilidade de metamorfose para buscar vingança em Gotham City.",
  },
];
