export type Category = {
  id: number;
  name: string;
  description: string;
};


export type Video = {
  id: number;
  title: string;
  description: string;
  category_id: number;
  thumbnail_url: string;
  video_url: string;
}