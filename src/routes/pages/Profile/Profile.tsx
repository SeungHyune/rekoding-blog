import styles from "./profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profilePage}>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <div className={styles.profileImgBox}>
            <img
              src="/Users/joseunghyeon/.gemini/antigravity/brain/ff3cc552-fb49-4872-9c8e-2c2d27a8f9dd/developer_profile_photo_1777181097386.png"
              alt="Profile"
            />
          </div>
          <div className={styles.personalInfo}>
            <h1 className={styles.name}>조승현</h1>
            <p className={styles.englishName}>Seung Hyun Jo</p>
            <p className={styles.birth}>199x. xx. xx</p>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <span>mobile</span>
                <span>010. xxxx. xxxx</span>
              </div>
              <div className={styles.contactItem}>
                <span>e-mail</span>
                <span>tmdgus7820@naver.com</span>
              </div>
              <div className={styles.contactItem}>
                <span>github</span>
                <span>github.com/SeungHyune</span>
              </div>
            </div>
          </div>
        </aside>

        <main className={styles.mainContent}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Education</h2>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <span className={styles.period}>201x-20xx</span>
                <p className={styles.desc}>
                  가천대학교 한국어문학과, 디자인학부 시각디자인전공 (졸업예정)
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Awards & Activities</h2>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <span className={styles.period}>202x</span>
                <p className={styles.desc}>
                  전국 대학생 프론트엔드 컨퍼런스 우수상
                </p>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.period}>202x</span>
                <p className={styles.desc}>오픈소스 프로젝트 컨트리뷰터 활동</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <div className={styles.skillGrid}>
              <div className={styles.skillItem}>React</div>
              <div className={styles.skillItem}>TypeScript</div>
              <div className={styles.skillItem}>Vite</div>
              <div className={styles.skillItem}>Zustand</div>
              <div className={styles.skillItem}>TanStack Query</div>
              <div className={styles.skillItem}>Firebase</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Profile;
