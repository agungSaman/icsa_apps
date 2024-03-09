export interface LoginResponse {
  data: DataLogin;
  success: boolean;
  status: number;
  message: string;
  token: Token;
}

export interface DataLogin {
  id: number;
  first_name: null;
  last_name: null;
  email: string;
  phone: string;
  image: null;
  avatar: null;
  gender: string;
  job_title: null;
  card_number: null;
  card_type: string;
  card_member: string;
  card_image: null;
  goal: null;
  curriculum_vitae: null;
  office: Office;
  provider: string;
  status: string;
  status_agreement: string;
  membership: Membership;
  qualification: Qualification;
  nasionality: string;
  role: string;
  set_password: boolean;
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
  company: null;
}

export interface Qualification {
  professional: string;
  year: Date;
  place: null;
  other: null;
  education: string;
}

export interface Token {
  access_token: string;
  token_type: string;
}
