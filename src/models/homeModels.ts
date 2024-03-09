export interface HomePageData {
  data: Data;
  success: boolean;
  status: number;
  message: string;
}

export interface Data {
  carousel: Carousels[];
  spotlight: Spotlight[];
  news: News[];
  privacy_policy: string;
  term_condition: string;
}

export interface Carousels {
  description: string;
  id: number;
  image: Image;
  title: string;
}

export interface Image {
  filename: string;
  flag: string;
  id: number;
  thumbnail: null;
  type: string;
  url: string;
}

export interface News {
  id: number;
  title: string;
  slug: string;
  description: string;
  source: string;
  image: Image;
  files: Image[];
  flag: Flag;
  created_at: Date;
}

export interface Flag {
  id: number;
  name: string;
}

export interface Spotlight {
  id: number;
  title: string;
  description: string;
  image: Image;
  flag: Flag;
  datetime: Datetimes;
  moderator: any[];
  narasumber: any[];
  zoom: Zoom;
  transaction: null;
  share_link: string;
}

export interface Datetimes {
  date_text: string;
  date_val: Date;
  date_end_text: string;
  date_end_val: Date;
  start_time: string;
  end_time: string;
}

export interface Zoom {
  id: number;
  start_url: string;
  join_url: string;
  password: string;
}
