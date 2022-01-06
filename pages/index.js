import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  console.log(`post is`, posts);
  return {
    props: { posts },
  };
}
export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-4 lg:px-10 mb-8 ">
      <Head>
        <title>My Blog CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1 ">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
