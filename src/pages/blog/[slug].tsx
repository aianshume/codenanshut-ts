import { getFiles, getFilesFromSlug } from "lib/mdx";
import { BlogLayout } from "components";

export default function Blog({ frontMatter, mdxSource }: any) {
  return <BlogLayout frontMatter={frontMatter} child={mdxSource}></BlogLayout>;
}

export async function getStaticPaths() {
  const posts = getFiles("blog");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const post = await getFilesFromSlug("blog", params.slug);

  return { props: post };
}
