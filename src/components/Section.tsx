import { FC, ReactNode } from "react";
import { cn } from "./utils";
import { plus } from "../assets/icons";

interface SectionProps {
  title: string;
  color: string;
  children?: ReactNode;
  count: number;
  isAdd?: boolean;
}

const Section: FC<SectionProps> = ({
  children,
  color,
  count,
  title,
  isAdd,
}) => {
  return (
    <div className="bg-light-gray rounded-xl p-4">
      <div className="border-b-2 flex items-center justify-between">
        <div className="flex items-center gap-2 pb-4">
          <div className={cn("h-2 w-2 rounded-full", color)} />
          <span className="capitalize font-bold">{title}</span>
          <p className="h-6 w-6 bg-gray-200 flex items-center justify-center rounded-full font-semibold text-dark-gray text-sm">
            {count}
          </p>
        </div>

        {isAdd && (
          <button>
            <img className="h-6 w-6 -mt-2.5" src={plus} alt="" />
          </button>
        )}
      </div>
      <div className={cn("w-full h-0.5", color)} />
      <div className="py-4 grid gap-4">{children}</div>
    </div>
  );
};

export default Section;
