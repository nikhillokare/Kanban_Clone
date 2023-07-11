import {
  calender,
  calender_2,
  category,
  message,
  message_question,
  notification,
  setting,
  task_list,
  users,
} from "../assets/icons";
import {
  image1,
  image2,
  image3,
  image4,
  t1_members,
  t2_members,
} from "../assets/images";

export const sidebarLinks = [
  {
    id: 1,
    text: "Home",
    icon: category,
  },
  {
    id: 2,
    text: "Messages",
    icon: message,
  },
  {
    id: 3,
    text: "Tasks",
    icon: task_list,
  },
  {
    id: 4,
    text: "Members",
    icon: users,
  },
  {
    id: 5,
    text: "Settings",
    icon: setting,
  },
];

export const projectList = [
  {
    id: 1,
    text: "Mobile App",
    isActive: true,
    color: "bg-green-600",
  },
  {
    id: 2,
    text: "Website Redesign",
    color: "bg-orange",
  },
  {
    id: 3,
    text: "Design System",
    color: "bg-purple",
  },
  {
    id: 4,
    text: "Wireframes",
    color: "bg-blue-500",
  },
];

export const navList = [
  {
    id: 1,
    text: "calender",
    icon: calender_2,
  },
  {
    id: 2,
    text: "message query",
    icon: message_question,
  },
  {
    id: 3,
    text: "notification",
    icon: notification,
  },
];

export interface Todo {
  id: number;
  priority: "high" | "low" | "completed";
  heading: string;
  description?: string;
  comments: number;
  files: number;
  membersImage: string;
  images?: string[];
}

export const todos: Todo[] = [
  {
    id: 1,
    priority: "low",
    heading: "Breainstorming",
    description:
      "Brainstorming brings team members' diverse experience into play. ",
    comments: 12,
    files: 0,
    membersImage: t1_members,
  },

  {
    id: 2,
    priority: "high",
    heading: "Research",
    description:
      "User research helps you to create an optimal produch for users.",
    comments: 10,
    files: 3,
    membersImage: t2_members,
  },
  {
    id: 3,
    priority: "high",
    heading: "Wireframes",
    description:
      "Low fidelity wireframes include the most basic content and visuals.",
    comments: 2,
    files: 0,
    membersImage: t1_members,
  },
  {
    id: 4,
    priority: "high",
    heading: "Mockup",
    description:
      "Low fidelity mockup include the most basic content and visuals.",
    comments: 4,
    files: 1,
    membersImage: t1_members,
  },
  {
    id: 5,
    priority: "low",
    heading: "Onboarding Illustrations ",
    images: [image1],
    comments: 14,
    files: 15,
    membersImage: t1_members,
  },
  {
    id: 6,
    priority: "low",
    heading: "Moodboard",
    images: [image2, image3],
    comments: 4,
    files: 1,
    membersImage: t1_members,
  },
  {
    id: 7,
    priority: "completed",
    heading: "User Journeys",
    description:
      "User journeys are the step-by-step journey that a user takes to react their goal.",
    comments: 8,
    files: 20,
    membersImage: t1_members,
  },
  {
    id: 8,
    priority: "completed",
    heading: "Mobile App Design",
    images: [image4],
    comments: 8,
    files: 20,
    membersImage: t1_members,
  },
  {
    id: 9,
    priority: "completed",
    heading: "Design System",
    description: "It just needs to adapt the UI from what you did before",
    comments: 8,
    files: 20,
    membersImage: t1_members,
  },
];
