import { NavLink } from "react-router-dom";
import { PostListType } from "@/types/response/post";
import { useImagePreload } from "./hooks";

import styles from "./categoryPostList.module.css";

interface CategoryPostListProps {
  category: string;
  posts: PostListType[];
  handleCloseNav?: () => void;
}

const CategoryPostList = ({
  category,
  posts,
  handleCloseNav,
}: CategoryPostListProps) => {
  const { handlePostClick } = useImagePreload({ handleCloseNav });

  return (
    <li>
      <strong className={styles.category}>{category}</strong>
      <ul className={styles.categoryPostList}>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <NavLink
              to={`/post/${id}`}
              title={title}
              onClick={(event: React.MouseEvent) => handlePostClick(event, id)}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default CategoryPostList;
