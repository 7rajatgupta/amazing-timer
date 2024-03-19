/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useMemo } from "react";
import useRandomNumber from "../hooks/useRandomNumber";

const Content: FC<{
  open: boolean;
}> = ({ open }: { open: boolean }) => {
  // START - DO NOT EDIT
  const randomNumber = useRandomNumber();
  // END - DO NOT EDIT
  const memoizedRandomNumber = useMemo(() => randomNumber, [open]);
  return (
    <h2 className={`text-7xl font-bold tracking-tighter`}>
      {open ? (
        <span
          className={`text-transparent bg-clip-text ${
            memoizedRandomNumber % 2 === 0
              ? "bg-gradient-to-r from-pink-500 to-purple-500"
              : "bg-gradient-to-b from-green-400 to-blue-500"
          }`}
        >
          {memoizedRandomNumber}
        </span>
      ) : (
        <>🎲</>
      )}
    </h2>
  );
};

export default Content;
