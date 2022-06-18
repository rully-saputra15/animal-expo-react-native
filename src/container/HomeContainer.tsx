import React from "react";
import HomeScreen from "../screen/HomeScreen";
import {animalCategory, animalData} from "../masterData/animal";
import {useNavigation} from "@react-navigation/native";

const HomeContainer = () => {
  const navigation = useNavigation<any>();
  const navigateToAnimalDetailScreen = (id: number) => {
    navigation.navigate("AnimalDetailScreen", {
      animalId: id
    })
  }
  return (
    <HomeScreen animalData={animalData}
                navigateToAnimalDetailScreen={navigateToAnimalDetailScreen}
                animalCategory={animalCategory}/>
  );
};

export default HomeContainer;
