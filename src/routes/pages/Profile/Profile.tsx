import styles from "./profile.module.css";

const Profile = () => {
  return (
    <section className={styles.profileContainer}>
      <h1 className={styles.pageTitle}>Profile</h1>
      <article className={styles.content}>
        <p>상세 프로필 정보가 들어갈 예정입니다.</p>
        {/* TODO: Add detailed resume, skills, and experience here */}
      </article>
    </section>
  );
};

export default Profile;
