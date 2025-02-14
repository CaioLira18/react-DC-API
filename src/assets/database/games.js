import { shuffleArray } from "../../utils/shuffle.js";



export const jogosArray = [
    {
      id: 1,
      image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000045911/bc90570730494cfa1ee0ab09820ac4669818b61afb6aaa26def9f4600e2706ea",
      name: "Batman Arkham City",
      desenvolvedora_icon: "/src/assets/logo_empresa/rocksteady.png",
      ano_lancamento: "2011",
      genero: "Ação e Aventura",
      plataforms: "PS3, XBOX 360, PS4, XBOX ONE, PS5, XBOX SERIES S/X",
    },
    {
      id: 2,
      image: "https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000045904/8ef8f6a6208734566a44dc1418f632dc5136cce77e6b63f8524722335f98dae8",
      name: "Batman Arkham Asylum",
      desenvolvedora_icon: "/src/assets/logo_empresa/rocksteady.png",
      ano_lancamento: "2009",
      genero: "Ação e Aventura",
      plataforms: "PS3, XBOX 360, PS4, XBOX ONE, PC",
    },
    {
      id: 3,
      image: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fbatman-arkham-knight%2FEGS_WB_Batman_Arkham_Knight_G1_1920x1080_19_0911-1920x1080-1d69e15f00cb5ab57249f208f1f8f45d52cbbc59.jpg",
      name: "Batman Arkham Knight",
      desenvolvedora_icon: "/src/assets/logo_empresa/rocksteady.png",
      ano_lancamento: "2015",
      genero: "Ação e Aventura",
      plataforms: "PS4, XBOX ONE, PC, PS5, XBOX SERIES S/X",
    },
    {
      id: 4,
      image: "https://www.gamewallpapers.com/download.php?img=wallpaper_batman_arkham_origins_03_1920x1080.jpg",
      name: "Batman Arkham Origins",
      desenvolvedora_icon: "/src/assets/logo_empresa/rocksteady.png",
      ano_lancamento: "2015",
      genero: "Ação e Aventura",
      plataforms: "PS4, XBOX ONE, PC, PS5, XBOX SERIES S/X",
    }
  ];
  
export const songsIndexedByArtist = jogosArray.reduce((acc, currentSong) => {
  const artist = currentSong.artist;
  if (artist in acc) {
    acc[artist].push(currentSong);
  } else {
    acc[artist] = [currentSong];
  }
  return acc;
}, {});

export const songsIndexedById = jogosArray.reduce((acc, currentSong) => {
  const { _id } = currentSong;

  acc[_id] = currentSong;
  return acc;
}, {});

shuffleArray(jogosArray);

console.log(songsIndexedById);
