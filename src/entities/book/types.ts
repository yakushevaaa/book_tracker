export interface IGetBookData {
  id: number;
  title: string;
  author: string;
  genre: string;
  isRead: boolean;
}

export interface IBookProps {
  bookData: IGetBookData;
  onDelete: (id: number) => void;
  onChecked: (id:number) => void;
}

export type Genre = "Fantasy" | "Detective" | "Scientific literature" | "Roman";
