export type BlogPageProps = {
  posts: {
    frontMatter: {
      list: number | undefined;
      title: string;
      image: string;
      description: string;
      slug: string;
    };
  }[];
  total: number;
  page: number;
  list?: number;
};
