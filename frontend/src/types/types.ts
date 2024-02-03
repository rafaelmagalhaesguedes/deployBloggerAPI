export type LoginType = {
  email: 'string',
  password: 'string',
};

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