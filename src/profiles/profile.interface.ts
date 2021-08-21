
export interface BaseProfile {
    name: string;
    surname: string;
    email: string;
    image: string;
  }
  
export interface Profile extends BaseProfile {
    id: number;
  }