import {Animal, AnimalCategory} from "../interface";
import {
  colorBoxAmphibian,
  colorBoxBird,
  colorBoxFish,
  colorBoxInvertebrate,
  colorBoxMammal,
  colorBoxReptile
} from "../constants/colors";

export const animalData: Animal[] = [
  {
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    type: "Mammal",
    activeTime: "Nocturnal",
    lengthMin: "2.3",
    lengthMax: "2.6",
    weightMin: "65",
    weightMax: "120",
    lifeSpan: "11",
    habitat: "Savannah and dry forest",
    diet: "Small antelope, warthogs, hares, and game birds",
    geoRange: "Africa and Western Asia",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/0/09/TheCheethcat.jpg",
    id: 51
  },
  {
    name: "Yellow Banded Poison Dart Frog",
    latinName: "Dendrobatus leucomelas",
    type: "Amphibian",
    activeTime: "Diurnal",
    lengthMin: "0.15",
    lengthMax: "0.17",
    weightMin: "0.006",
    weightMax: "0.001",
    lifeSpan: "7",
    habitat: "Tropical rainforest ",
    diet: "Insects, spiders, and other small invertebrates ",
    geoRange: "South America ",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Yellow-banded.poison.dart.frog.arp.jpg",
    id: 194
  },
  {
    name: "Florida Pine Snake",
    latinName: "Pituophis melanoleucus mugitus",
    type: "Reptile",
    activeTime: "Diurnal",
    lengthMin: "5",
    lengthMax: "7",
    weightMin: "4",
    weightMax: "8",
    lifeSpan: "20",
    habitat: "Sandy soils of pine woodlands and scrubland",
    diet: "Small mammals, birds and bird eggs",
    geoRange: "Southeastern United States",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/b/b2/G-Bartolotti_FL_pine.jpg",
    id: 73
  },
  {
    name: "Little Blue Penguin",
    latinName: "Eudyptula minor",
    type: "Bird",
    activeTime: "Nocturnal",
    lengthMin: "1.3",
    lengthMax: "1.5",
    weightMin: "3",
    weightMax: "3.3",
    lifeSpan: "25",
    habitat: "Ocean and coastal shores",
    diet: "Fish and marine invertebrates",
    geoRange: "Australia and New Zealand",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Little_Penguin_Feb09.jpg",
    id: 106
  },
  {
    name: "Andean Condor",
    latinName: "Vultur gryphus",
    type: "Bird",
    activeTime: "Diurnal",
    lengthMin: "3.3",
    lengthMax: "4.3",
    weightMin: "18",
    weightMax: "33",
    lifeSpan: "46",
    habitat: "Desert, mountains, grasslands and coasts",
    diet: "Carrion",
    geoRange: "Western South America",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/8/81/Vultur_gryphus_-Dou%C3%A9-la-Fontaine_Zoo%2C_France-8a.jpg",
    id: 14
  },
  {
    name: "White Lion",
    latinName: "Panthera leo",
    type: "Mammal",
    activeTime: "Diurnal",
    lengthMin: "5",
    lengthMax: "10",
    weightMin: "270",
    weightMax: "530",
    lifeSpan: "18",
    habitat: "Savannah, woodland and desert",
    diet: "Hoofed mammals, hares, small birds and reptiles",
    geoRange: "Timbavati, South Africa",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/2/2f/White_Lion444.jpg",
    id: 186
  },
]

export const animalCategory: AnimalCategory[] = [
  {
    name: 'Fish',
    color: colorBoxFish
  },
  {
    name: 'Bird',
    color: colorBoxBird
  },
  {
    name: 'Invertebrate',
    color: colorBoxInvertebrate
  },
  {
    name: 'Amphibian',
    color: colorBoxAmphibian
  },
  {
    name: 'Mammal',
    color: colorBoxMammal
  },
  {
    name: 'Reptile',
    color: colorBoxReptile
  }
]
