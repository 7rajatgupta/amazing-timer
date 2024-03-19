import React, { useEffect, useState, FC } from "react";

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
  return open ? <div>Your random number is: {randomNumber}</div> : null;
};

const MainPage: FC = () => {
  const [open, setOpen] = useState({ value: false });

  const time = useGetTimer();
  return (
    <div>
      <div>The page loaded {time} seconds ago</div>
      <button
        onClick={() =>
          setOpen((value) => {
            value.value = !value.value;
            return value;
          })
        }
      >
        Generate random number
      </button>

      <Content open={open} />
    </div>
  );
};

export default MainPage;
