import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { ViewContainer } from "./styles";
import posts from "../../data/posts.json";
import { useEffect } from "react";

const Post = () => {
  const { query } = useRouter();
  const allPost = Object.entries(posts).map((item) => item[1])[0];
  const post = allPost.filter((item) => item.id === Number(query.id));

  useEffect(() => {
    console.log(allPost);
    console.log(post);
  }, []);
  return (
    <Layout>
      {post && (
        <ViewContainer>
          <div className="view-title">
            <h1>{post[0].title}</h1>
          </div>
          <div className="view-content"></div>
        </ViewContainer>
      )}
    </Layout>
  );
};

export default Post;
