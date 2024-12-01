import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: ""},
  { icon: <FaLinkedinIn />, path: ""},
  { icon: <FaYoutube />, path: ""},
];

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link href={item.path} key={index} className={iconStyles}>{item.icon}</Link>
      ))}
    </div>
  );
}

export default Socials;