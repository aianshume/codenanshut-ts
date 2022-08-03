export type LayoutProps = {
  child: any;
  frontMatter: {
    title: string;
    description: string;
    date: string | number | Date;
    readingTime: {
      text: string;
    };
    image: string;
  };
  chapters?: any;
};
