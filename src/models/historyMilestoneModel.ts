export interface HistoryMilestonModel {
  data: Data;
  success: boolean;
  status: number;
  message: string;
}

export interface Data {
  history: string;
  history_en: string;
  milestone: Milestone[];
}

export interface Milestone {
  year: string;
  description: string;
  description_en: string;
}
