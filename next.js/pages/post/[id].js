import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { ViewContainer } from "./styles";
const Post = () => {
  const router = useRouter();
  return (
    <Layout>
      <ViewContainer></ViewContainer>
    </Layout>
  );
};

export default Post;
