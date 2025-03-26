import styles from "./skeleton.module.css";

interface SkeletonProps {
  height?: string;
}

const Skeleton = ({ height = "200px" }: SkeletonProps) => {
  return <div className={styles.skeleton} style={{ height }} />;
};

export default Skeleton;
