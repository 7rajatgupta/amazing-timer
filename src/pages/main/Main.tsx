import { useState, FC } from "react";
import Content from "../../components/Content";
import useGetTimer from "../../hooks/useGetTimer";

const MainPage: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const time = useGetTimer();

  function toggle() {
    setOpen((prevValue) => !prevValue);
  }
  return (
    <div className="w-full">
      <p className="md:text-md text-white my-4 lg:text-2xl text-center sm:w-auto flex">
        The page loaded{" "}
        <span className="w-16 mx-1">{(time / 1000).toFixed(1)}</span> seconds
        ago
      </p>
      <div className="container flex flex-col items-center  px-4 text-center gap-y-6">
        <button
          className="bg-zinc-700 text-white px-3 py-1 border border-solid border-zinc-500 rounded-lg hover:bg-zinc-600 transition-all"
          onClick={toggle}
        >
          Generate random number
        </button>
        <Content open={open} />
      </div>
      <div className="py-4">
        <div className="container flex items-center justify-center space-x-2 text-center"></div>
      </div>
    </div>
  );
};

export default MainPage;
