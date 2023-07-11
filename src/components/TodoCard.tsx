import { FC } from "react";
import { cn } from "./utils";
import { BsThreeDots } from "react-icons/bs";
import { file, message } from "../assets/icons";

interface TodoCardProps {
  priority: "high" | "low" | "completed";
  title: string;
  children: React.ReactNode;
  members?: string;
  comments: number;
  files: number;
}

const TodoCard: FC<TodoCardProps> = ({
  children,
  priority,
  title,
  comments,
  files,
  members,
}) => {
  return (
    <div className="bg-white rounded-xl p-4 w-full">
      <div className="flex justify-between items-center">
        <p
          className={cn("capitalize px-2 py-1 rounded-md text-xs", {
            "text-orange bg-orange/10": priority == "low",
            "text-red-500 bg-red-100": priority == "high",
            "text-green-500 bg-green-100": priority == "completed",
          })}
        >
          {priority}
        </p>

        <button>
          <BsThreeDots size={18} />
        </button>
      </div>
      <div className="pt-4">
        <p className="font-semibold">{title}</p>

        <div className="h-full mt-1 mb-4 w-full text-sm">{children}</div>
        <div className="flex items-center justify-between">
          <img src={members} alt="" />

          <div className="flex items-center  text-sm text-dark-gray gap-3">
            <p className="flex items-center gap-1">
              <img className="h-4 w-4" src={message} alt="" />
              {comments}
              <span>comments</span>
            </p>

            <p className="flex items-center gap-1">
              <img src={file} alt="" />
              {files}
              <span>files</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
