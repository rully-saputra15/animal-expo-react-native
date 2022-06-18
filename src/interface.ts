export interface ApiResponse<T> {
  code: number;
  messages: string[];
  data: T;
}

export interface Animal {
  id: number;
  name: string;
  latinName: string;
  activeTime: string;
  type: string;
  lengthMin: string;
  lengthMax: string;
  weightMin: string;
  weightMax: string;
  lifeSpan: string,
  habitat: string,
  diet: string,
  geoRange: string,
  imageLink: string;
}

export interface AnimalCategory {
  name: string;
  color: string[];
}
