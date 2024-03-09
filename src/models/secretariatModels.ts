export interface SecreatariatModel {
  data: DataSecretariat[];
  charts: Charts;
  success: boolean;
  status: number;
  message: string;
}

export interface Charts {
  id: number;
  filename: string;
  url: string;
  type: string;
  flag: string;
  thumbnail: null;
}

export interface DataSecretariat {
  id: number;
  name: string;
  member: Member[];
}

export interface Member {
  name: string;
  position: string;
  image: Charts;
  office: string;
  periode: string;
  contact: Contact[];
}

export interface Contact {
  id: number;
  title: string;
  value: string;
}
