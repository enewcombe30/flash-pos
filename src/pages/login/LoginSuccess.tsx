import ThumbsUp from "../../svgs/ThumbsUp";
import { useDispatch } from "react-redux";
import { resetAccess } from "../../state/login/loginSlice";

export default function SuccessModal() {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="w-fit h-fit mx-auto">
        <ThumbsUp />
      </div>
      <button
        className="w-full bg-[#284E24] rounded-3xl h-12 flex items-center justify-center text-xl font-bold hover:bg-[#376c34] transition mt-4"
        onClick={() => dispatch(resetAccess())}
      >
        Back
      </button>
    </div>
  );
}
