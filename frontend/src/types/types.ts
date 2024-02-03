export type PostType = {
  id: number;
  title: string;
  content: string;
  created_at: string;
  category: string;
};

export type UserType = {
  id: any;
  email: string;
  displayName: string;
  image: string;
};

export type CategoryType = {
  id: number;
  name: string;
};