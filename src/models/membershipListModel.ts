export interface MemberListModel {
  data: DataMember[];
  links: Links;
  meta: Meta;
  success: boolean;
  status: number;
  message: string;
}

export interface DataMember {
  id: number;
  first_name: string;
  last_name: null | string;
  email: string;
  phone: null;
  image: null;
  avatar: null;
  gender: CardType;
  job_title: null;
  card_number: null;
  card_type: CardType;
  card_member: string;
  card_image: null;
  goal: null;
  curriculum_vitae: null;
  office: Office;
  provider: CardType;
  status: string;
  status_agreement: string;
  membership: Membership;
  qualification: Qualification;
  nasionality: CardType;
  role: string;
  set_password: boolean;
}

export interface CardType {
  id: number | null | string;
  name: string | null;
}

export interface Membership {
  status_member: string;
  start_date_member: Date;
  end_date_member: Date;
}

export interface Office {
  office_address: null;
  office_phone: null;
  office_industry: null;
  company: string;
}

export interface Qualification {
  professional: CardType;
  year: CardType;
  place: null;
  other: null;
  education: CardType;
}

export interface Links {
  first: string;
  last: string;
  prev: null;
  next: string;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface Link {
  url: null | string;
  label: string;
  active: boolean;
}
