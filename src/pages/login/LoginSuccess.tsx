import ThumbsUp from "../../svgs/ThumbsUp";

interface props {
  userName: string;
}

export default function SuccessModal({ userName }: props) {
  return (
    <div className="">
      <div className="w-fit h-fit mx-auto">
        <ThumbsUp />
      </div>
      <div className="text-center mt-4 text-xl">{`Welcome back, ${userName}`}</div>
    </div>
  );
}
