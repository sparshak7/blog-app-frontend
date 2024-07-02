import { Link } from "react-router-dom"

const FeaturedPreview = () => {
  return (
    <div className="flex flex-col gap-4 py-5 px-4 shadow-sm mt-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-heading font-bold">Featured Articles</h3>
        <Link to="#" className="text-violet-400 text-sm">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        No entries for now.
      </div>
    </div>
  )
}

export default FeaturedPreview
