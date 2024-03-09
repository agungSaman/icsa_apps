export interface AgendaData {
  data: Data;
  success: boolean;
  status: number;
  message: string;
}

export interface Data {
  spotlight: SpotlightS[];
  upcoming: UpcomingS[];
}

export interface SpotlightS {
  id: number;
  title: string;
  description: string;
  image: ImageAgenda;
  flag: Flag;
  datetime: Date;
  moderator: Moderator[];
  narasumber: Narasumber[];
  zoom: Zoom;
  transaction: Transaction;
}

export interface UpcomingS {
  id: number;
  title: string;
  description: string;
  image: ImageAgenda;
  flag: Flag;
  datetime: Date;
  moderator: Moderator[];
  narasumber: Narasumber[];
  zoom: Zoom;
  transaction: Transaction;
}

export interface ImageAgenda {
  id: number;
  filename: string;
  url: string;
  type: string;
  flag: string;
  thumbnail: string;
}

export interface Flag {}

export interface Moderator {}

export interface Narasumber {}

export interface Zoom {}

export interface Transaction {}
