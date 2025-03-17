import { PostListType } from "@/types/response/post";
import PostItem from "../PostItem/PostItem";

interface PostListProps {
  styles: CSSModuleClasses;
  postList: PostListType[];
}

const PostList = ({ styles, postList }: PostListProps) => {
  return (
    <article className={styles.mainPosts}>
      <ul>
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
            <PostItem
              key={id}
              id={id}
              title={title}
              content={content}
              imageUrl={imageUrl}
              dateAt={dateAt}
              hashTag={hashTag}
              category={category}
              categoryColor={categoryColor}
            />
          ),
        )}
      </ul>
    </article>
  );
};

export default PostList;
