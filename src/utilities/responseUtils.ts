import {Animal} from "../interface";

export const formatAnimalResponse = (unformattedAnimal: any[]): Animal[] => {
  const formattedAnimals: Animal[] = [];

  unformattedAnimal.forEach((animal) => {
    formattedAnimals.push({
      id: animal.id,
      name: animal.name,
      type: animal.animal_type,
      latinName: animal.latin_name,
      activeTime: animal.active_time,
      lengthMin: animal.length_min,
      lengthMax: animal.length_max,
      weightMin: animal.weight_min,
      weightMax: animal.weight_max,
      lifeSpan: animal.lifespan,
      habitat: animal.habitat,
      diet: animal.diet,
      geoRange: animal.georange,
      imageLink: animal.image_link,
    })
  })
  return formattedAnimals
}
