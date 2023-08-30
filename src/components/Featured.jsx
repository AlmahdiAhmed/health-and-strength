import { Suspense } from "react";
import getBlogs from "./GetBlogs";
import Slider from "./Slider";

const Featured = async () => {
  const blogs = await getBlogs();
  let featured;
  // let loading;
  if (blogs) {
    featured = blogs.filter((blog) => blog.featured === "true");
  }

  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <Slider featured={featured} />
      </Suspense>
    </div>
  );
};
export default Featured;
