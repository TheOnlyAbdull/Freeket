import { ClipLoader } from "react-spinners";


export function Spinner({ isPending }) {
    return (
        <div className="w-full flex justify-center items-center text-lg text-gray-600 py-40">
        <ClipLoader
          loading={isPending}
          size={60}
          color="#f97316"
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    )
}

export default Spinner
