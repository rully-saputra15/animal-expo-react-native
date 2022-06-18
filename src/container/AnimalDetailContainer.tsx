import React from "react";
import AnimalDetailScreen from "../screen/AnimalDetailScreen";
import {useRoute} from "@react-navigation/native";
import {animalData} from "../masterData/animal";
import {useMainStore} from "../store/store";

const AnimalDetailContainer = () => {
  const route = useRoute<any>();
  const animalId = route.params ? route.params.animalId : "";
  const animals = useMainStore(s => s.animal)
  const animalDetailData = animals.find((animal) => animal.id === animalId);
  return (
    <AnimalDetailScreen animalDetailData={animalDetailData}/>
  )
}

export default AnimalDetailContainer;
