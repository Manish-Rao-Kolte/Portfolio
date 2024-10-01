import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Manish-Rao-Kolte" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/manish-rao-kolte-76b518216/" },
  { icon: <FaTwitter />, path: "https://x.com/real_m_r_k?t=uWI4-PyB_NugbLxgBt-pOA&s=03&mx=2" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((link, index) => {
        return (
          <a target="_blank" href={link.path} key={index} className={iconStyles}>
            {link.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Social;
