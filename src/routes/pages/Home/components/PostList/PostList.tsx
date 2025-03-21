import { PostListType } from "@/types/response/post";
import PostItem from "../PostItem/PostItem";
import { motion } from "framer-motion";

interface PostListProps {
  styles: CSSModuleClasses;
  tab?: string;
  postList: PostListType[];
}

const PostList = ({ styles, tab, postList }: PostListProps) => {
  return (
    <article className={styles.mainPosts}>
      <motion.ul key={tab}>
        {postList.map(
          ({
            id,
            title,
            content,
            imageUrl,
            dateAt,
            hashTag,
            category,
            categoryColor,
          }) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              <PostItem
                id={id}
                title={title}
                content={content}
                imageUrl={imageUrl}
                dateAt={dateAt}
                hashTag={hashTag}
                category={category}
                categoryColor={categoryColor}
              />
            </motion.li>
          ),
        )}
      </motion.ul>
    </article>
  );
};

export default PostList;
