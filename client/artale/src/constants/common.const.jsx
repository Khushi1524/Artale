import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { BsCollectionFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

export const THEME = {PRIMARY:"#839788", SECONDARY: "#ffffff"};

export  const menuListArr = [
    {
      id: 1,
      icon: <IoHomeSharp />,
      label: "Home",
    },
    {
      id: 2,
      icon: <MdOutlineExplore />,
      label: "MoodMap",
    },
    {
      id: 3,
      icon: <BsCollectionFill />,
      label: "Galleries",
    },

    {
      id: 4,
      icon: <FaBookmark />,
      label: "Keeps",
    },

      {
      id: 5,
      icon: <FaUserCircle />,
      label: "Profile",
    },
    {
      id: 6,
      icon: <IoMdSettings />,
      label: "Settings",
    },
    {
      id: 7,
      icon: <MdLogout />,
      label: "Logout",
    },
  ];