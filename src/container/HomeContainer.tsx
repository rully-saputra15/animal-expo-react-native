import React from "react";
import HomeScreen from "../screen/HomeScreen";
import {animalCategory, animalData} from "../masterData/animal";
import {useNavigation} from "@react-navigation/native";
import {useMainStore} from "../store/store";
import {useQuery} from "react-query";
import {Animal} from "../interface";
import {api} from "../api/api";

const HomeContainer = () => {
  const navigation = useNavigation<any>();
  const [animals, setAnimals] = useMainStore(s => [s.animal, s.setAnimal]);

  const navigateToAnimalDetailScreen = (id: number) => {
    navigation.navigate("AnimalDetailScreen", {
      animalId: id
    });
  };

  const { isLoading: isFetchingAnimalData, refetch } =
  useQuery(
    `animals/rand/10`,
    () => api.getAllAnimal(),
    {
      enabled: true,
      onSuccess: (data: Animal[]) => {
        setAnimals(data);
      }
    }
  );

  return (
    <HomeScreen animalData={animals}
                isFetchingAnimalData={isFetchingAnimalData}
                navigateToAnimalDetailScreen={navigateToAnimalDetailScreen}
                animalCategory={animalCategory}/>
  );
};

export default HomeContainer;
