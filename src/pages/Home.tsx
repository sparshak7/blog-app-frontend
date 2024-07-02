import { Suspense, lazy } from "react";
import Layout from "../layouts/Layout";
import CenterLoader from "../components/CenterLoader";
const Hero = lazy(() => import("../components/Hero"));
const FeaturedPreview = lazy(() => import("../components/FeaturedPreview"));
const PostsPreview = lazy(() => import("../components/PostsPreview"));

const Home = () => {
  return (
    <Layout>
      <Suspense fallback={<CenterLoader />}>
        <Hero />
        <FeaturedPreview />
        <PostsPreview />
      </Suspense>
    </Layout>
  );
};

export default Home;
