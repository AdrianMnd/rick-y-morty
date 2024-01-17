import { Episode } from "./episode";

export class Tarjeta {
    id: number;
    name: string;
    status: string;
    species: string;
    type?: string;
    gender: string;
    origin: Origin;
    location?: object;
    image: string;
    episode: Episode[];
    url?: string;
    created?: string;
}

export class Origin {
    name: string;
    url: string;
}

export interface ResponseInfoResults {
    info: Info;
    results: Tarjeta[];
  }

  export interface Info {
    count: number;
    pages: number;
    next: string;
    prev?: any;
  }