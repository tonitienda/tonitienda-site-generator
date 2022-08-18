import { useContext } from "react";
import DataContext from "./DataContext";

const SideBar = () => {
  const { posts } = useContext(DataContext);

  return (
    <div>
      Posts
      <ul>
        {posts.map((p) => (
          <li>{p.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
