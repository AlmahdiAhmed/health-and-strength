import getBlogs from "@/components/GetBlogs";
import Image from "next/image";
const page = async ({ params }) => {
  const blogs = await getBlogs();

  const id = params.id;
  const blog = blogs.filter((blog) => blog._id === id);

  return (
    <div className="my-5">
      {blog.map((blogS) => {
        const { _id, title, content, img } = blogS;
        return (
          <div key={_id} className="flex flex-col p-4 bg-[#E7ECEF] rounded-xl">
            <div className="relative w-full h-[210px] sm:h-[270px]">
              <Image
                src={img}
                alt="image"
                className="rounded-xl object-cover"
                fill
              />
            </div>
            <div className="mt-3">
              <h2 className="text-2xl capitalize font-extrabold text-[#0f7173]">
                {title}
              </h2>
              <p className="w-full text-[#272932] text-lg">{content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default page;
