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
    <div>
      <div className="container flex flex-col items-center gap-4 px-4 text-center md:gap-8">
        <div className="space-y-2">
          <p className="text-gray-800 mb-32 text-2xl font-bold">
            Click the button to generate a random number
          </p>
          <Content open={open} />
        </div>
        <button
          className="mx-auto w-full max-w-xs h-12 items-center justify-center rounded-md border border-sky-800  bg-sky-600 text-md shadow-sm transition-colors hover:bg-sky-700 text-white font-bold"
          onClick={toggle}
        >
          {open ? "Hide" : "Generate Now !"}
        </button>
      </div>
      <div className="py-4">
        <div className="container flex items-center justify-center space-x-2 text-center">
          <p className="text-md text-gray-700 dark:text-gray-400 mt-10">
            Page loaded{" "}
            <span className="text-black">{Math.floor(time / 1000)}</span>{" "}
            seconds ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
