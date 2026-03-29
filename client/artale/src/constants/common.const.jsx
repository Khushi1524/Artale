import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { BsCollectionFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

export const THEME = { PRIMARY: "#839788", SECONDARY: "#ffffff" };

export const menuListArr = (navigate) => [
  {
    id: 1,
    icon: <IoHomeSharp />,
    label: "Home",
  },
  {
    id: 2,
    icon: <MdOutlineExplore />,
    label: "MoodMap",
    onClick: () => {
      navigate("/moodmap");
    },
  },
  {
    id: 3,
    icon: <BsCollectionFill />,
    label: "Galleries",
    onClick: () => {
      navigate("/gallery");
    },
  },

  {
    id: 4,
    icon: <FaBookmark />,
    label: "Keeps",
      onClick: () => {
      navigate("/keeps");
    },
  },

  {
    id: 5,
    icon: <FaUserCircle />,
    label: "Profile",
      onClick: () => {
      navigate("/gallery");
    },
  },
  {
    id: 6,
    icon: <IoMdSettings />,
    label: "Settings",
      onClick: () => {
      navigate("/settings");
    },
  },
  {
    id: 7,
    icon: <MdLogout />,
    label: "Logout",
      onClick: () => {
      navigate("/logout");
    },
  },
];
