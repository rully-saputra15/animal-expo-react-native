import React from "react";
import AnimalDetailScreen from "../screen/AnimalDetailScreen";
import {useRoute} from "@react-navigation/native";
import {animalData} from "../masterData/animal";

const AnimalDetailContainer = () => {
  const route = useRoute<any>();
  const animalId = route.params ? route.params.animalId : "";
  const animalDetailData = animalData.find((animal) => animal.id === animalId);
  return (
    <AnimalDetailScreen animalDetailData={animalDetailData}/>
  )
}

export default AnimalDetailContainer;
