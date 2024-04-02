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
    <div className="grid place-content-center h-40">
      {open ? (
        <h2
          className={`text-8xl font-bold tracking-tighter place-content-center grid text-transparent bg-clip-text ${
            memoizedRandomNumber % 2 === 0
              ? "bg-gradient-to-r from-pink-500 to-purple-500"
              : "bg-gradient-to-b from-green-400 to-blue-500"
          }`}
        >
          {memoizedRandomNumber}
        </h2>
      ) : (
        <img
          src={"https://media.tenor.com/acXyDcloqNoAAAAi/dice-1-dice.gif"}
          alt="dice"
          width={170}
          className="text-center"
        />
      )}
    </div>
  );
};

export default Content;
