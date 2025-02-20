import { TfiWrite } from "react-icons/tfi";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiLink, CiStar } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";

export const taskGroups = [
  {
    name: "Developing",
    color: "blue",
    bgColor: "#F4F5FF",
    borderColor: "#2D66F7",
    tasks: [
      {
        name: "Pricing Card Developing",
        startDate: "14-Mar-24",
        dueDate: "25-Mar-24",
        priority: "High",
        status: "Ongoing",
      },
      {
        name: "Finance Dashboard",
        startDate: "10-Mar-24",
        dueDate: "21-Mar-24",
        priority: "Medium",
        status: "Done",
      },
      {
        name: "App Screens Developing",
        startDate: "07-Mar-24",
        dueDate: "19-Mar-24",
        priority: "High",
        status: "Ongoing",
      },
    ],
  },
  {
    name: "Designing",
    color: "orange",
    bgColor: "#FFF3E0",
    borderColor: "#f97316",
    tasks: [
      {
        name: "Task Manager App Re-design",
        startDate: "14-Mar-24",
        dueDate: "25-Mar-24",
        priority: "Low",
        status: "Ongoing",
      },
      {
        name: "Finance Dashboard Design",
        startDate: "10-Mar-24",
        dueDate: "21-Mar-24",
        priority: "Medium",
        status: "Done",
      },
      {
        name: "Medical App Designing",
        startDate: "07-Mar-24",
        dueDate: "19-Mar-24",
        priority: "Low",
        status: "Done",
      },
    ],
  },
  {
    name: "Wireframe",
    color: "aqua",
    bgColor: "#E0F7FA",
    borderColor: "#38B9E6",
    tasks: [
      {
        name: "Medical App Designing",
        startDate: "07-Mar-24",
        dueDate: "19-Mar-24",
        priority: "Low",
        status: "Done",
      },
    ],
  },
];

export const taskOptions = [
  { icon: <TfiWrite />, label: "Rename Folder", color: "black" },
  { icon: <FaArrowRightLong />, label: "Move to workspace", color: "black" },
  { icon: <CiLink />, label: "Copy link", color: "black" },
  { icon: <CiStar />, label: "Add to Favourite", color: "black" },
  { icon: <AiOutlineDelete />, label: "Delete Folder", color: "orange" },
];
