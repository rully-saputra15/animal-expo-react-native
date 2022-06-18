import utils from "../utilities/utils";
import {Animal} from "../interface";
import {formatAnimalResponse} from "../utilities/responseUtils";
import http from "./http";

export const api = {
  getAllAnimal() {
    return utils.apiHandler<Animal[]>(
      http.get('animals/rand/10'),
      formatAnimalResponse
    )
  }
}
