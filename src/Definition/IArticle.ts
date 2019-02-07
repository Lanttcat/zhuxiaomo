export default interface IArticle {
  title: string;
  createAt: string;
  updateAt: string;
  coverUrl: string;
  author: string;
  readTotal: number;
  tags: string[];
  contentForHTML: string;
  post: string[];
}
