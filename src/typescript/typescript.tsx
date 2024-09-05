export interface Card {
    id: string;
    imageUpload?: FileReader | {} | string | Blob;
    challengeName: string;
    startDate: string;
    endDate: string;
    lavelType: string; // Easy | Medium | Hard
    description: string;
}

export type Challenge = {
    id: string;
    challengeName: string;
    startDate: string;
    endDate: string;
    description: string;
  };