import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import posts from "../../data/posts.json";
import { PostContainer } from "./styles";
const index = () => {
  if (!posts) {
    return null;
  }
  return (
    <Layout>
      <PostContainer>
        {Object.entries(posts).map((item) =>
          item[1].map((post, idx) => (
            <div className="post-colume" key={idx}>
              <Link href={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.content}</p>
            </div>
          ))
        )}
      </PostContainer>
    </Layout>
  );
};

export default index;
