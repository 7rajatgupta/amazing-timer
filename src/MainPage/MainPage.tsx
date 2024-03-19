import { useEffect, useState, FC, useMemo } from "react";

// START - DO NOT EDIT
function useRandomNumber() {
  const randomNumber = Math.trunc(Math.random() * 1000);
  return randomNumber;
}
// END - DO NOT EDIT

const startTime = Date.now();
function useGetTimer() {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setTime(Date.now() - startTime);
    }, 1000);
    return () => {
      clearInterval(intervalRef);
    };
  }, []);

  return time;
}

const Content: FC<{
  open: any;
}> = ({ open }) => {
  // START - DO NOT EDIT
  const randomNumber = useRandomNumber();
  // END - DO NOT EDIT
  const memoizedRandomNumber = useMemo(() => randomNumber, [open]);
  return (
    <h2 className="text-7xl font-bold tracking-tighter">
      {open ? <>{memoizedRandomNumber}</> : <>🎲</>}
    </h2>
  );
};

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
          <p className="text-gray-800 mb-40 text-2xl font-bold">
            Click the button to generate a random number
          </p>
          <Content open={open} />
        </div>
        <button
          className="mx-auto w-full max-w-xs h-10 items-center justify-center rounded-md border border-sky-800  bg-sky-600 text-md shadow-sm transition-colors hover:bg-sky-700 text-white font-bold"
          onClick={toggle}
        >
          {open ? "Hide" : "Generate random number"}
        </button>
      </div>
      <div className="py-4">
        <div className="container flex items-center justify-center space-x-2 text-center">
          <p className="text-md text-gray-700 dark:text-gray-400 mt-10">
            Page loaded {Math.floor(time / 1000)} seconds ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
