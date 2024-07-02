import { Link } from "react-router-dom";

const PostsPreview = () => {
  return (
    <div className="flex flex-col gap-8 py-5 px-4 shadow-sm mt-4">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-heading font-bold">Explore Posts</h3>
          <Link to="#" className="text-violet-400 text-sm">
            View All
          </Link>
        </div>
        <div className="flex items-center gap-2 overflow-auto scroll-smooth hide-scrollbar">
          {["C1", "C2", "C3"].map((c, id) => (
            <div className="px-2 py-1 bg-accent text-purple-500 rounded-2xl" key={id}>{c}</div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        No entries for now.
      </div>
    </div>
  );
};

export default PostsPreview;
