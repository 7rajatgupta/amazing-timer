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
    <div className="grid place-content-center h-2 transition-all">
      <h2 className="md:text-md text-white lg:text-2xl m-0 p-0">
        {open ? `Your random number is: ${memoizedRandomNumber}` : ""}
      </h2>
    </div>
  );
};

export default Content;
