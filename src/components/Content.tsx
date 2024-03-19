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
    <h2 className="text-7xl font-bold tracking-tighter">
      {open ? <>{memoizedRandomNumber}</> : <>🎲</>}
    </h2>
  );
};

export default Content;
