import { Loader2 } from "lucide-react"

const CenterLoader = () => {
  return (
    <div className="flex items-center justify-center p-60 md:p-72">
      <Loader2 className="animate-spin text-purple-400 size-8" />
    </div>
  )
}

export default CenterLoader
