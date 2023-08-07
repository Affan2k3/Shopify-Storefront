import React, { useState, ReactNode } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Collapse } from "react-collapse";
type Props = {
  children: ReactNode;
  title: string;
};

function MoreDetails({ children, title }: Props) {
  const [isOpened, setOpened] = useState(false);
  return (
    <div className="mt-4 bg-white">
      <div
        onClick={() => setOpened(!isOpened)}
        className="flex py-4 justify-between cursor-pointer"
      >
        <h2 className="uppercase font-bold text-sm">{title}</h2>
        <ChevronDownIcon
          className={`w-5 h-5 transition-all duration-500 ${
            isOpened ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <Collapse isOpened={isOpened}>{children}</Collapse>
      <hr className="bg-gray-200" />
    </div>
  );
}

export default MoreDetails;
