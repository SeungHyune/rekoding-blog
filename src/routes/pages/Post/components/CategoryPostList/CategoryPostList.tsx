import { PostListType } from "@/types/response/post";
import { NavLink } from "react-router-dom";
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
  return (
    <li>
      <strong className={styles.category}>{category}</strong>
      <ul className={styles.categoryPostList}>
        {posts.map(({ id, title }) => (
          <li key={id} onClick={() => handleCloseNav && handleCloseNav()}>
            <NavLink to={`/post/${id}`} title={title}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default CategoryPostList;
