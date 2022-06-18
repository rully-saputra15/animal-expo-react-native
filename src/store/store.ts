import create from "zustand";
import {Animal} from "../interface";
import {animalData} from "../masterData/animal";

interface MainStore {
  animal: Animal[];
  setAnimal: (animal: Animal[]) => void;
}

export const useMainStore = create<MainStore>((set) => ({
  animal: [],
  setAnimal: animal => set({animal})
}));

