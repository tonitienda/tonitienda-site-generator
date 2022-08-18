import { useContext } from "react";
import posts from "../posts";

const SideBar = () => {
  return (
    <div>
      Posts
      <ul>
        {posts.map((p, index) => (
          <li key={index}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
