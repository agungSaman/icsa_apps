export interface OrganizationModel {
  data: DataPersonnel[];
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

export interface DataPersonnel {
  id: number;
  name: string;
  member: Member[];
  expanded: boolean;
}

export interface Member {
  name: string;
  position: string;
  image: Charts;
  office: string;
  periode: string;
  contact: null;
}
