import { Link } from "react-router-dom";
import { CloseCircleIcon, EyeIcon, EyeSlashIcon } from "@/components/icons";
import styles from "./admin.module.css";

import { useLoginForm } from "./hooks";

const Admin = () => {
  const {
    loginId,
    loginPassword,
    isLogin,
    isPasswordVisible,
    isError,
    errorMessage,
    handleLogin,
    handleLogout,
    handleChangeInput,
    handleRemoveLoginId,
    handlePasswordVisibleToggle,
  } = useLoginForm();

  return (
    <section className={`${styles.adminSection} adminSection`}>
      <article className={styles.imageContainer}>
        <div className={styles.titleBox}>
          <h2>Administrator {isLogin === false && "Login"}</h2>
          <p>
            {isLogin ? "관리자 페이지입니다." : "관리자 로그인을 진행해주세요."}
          </p>
        </div>
        <img src="/images/Picture.png" alt="admin login picture" />
      </article>
      <article className={styles.loginContainer}>
        <Link to="/" title="메인 페이지로 되돌아가기">
          메인 페이지로 되돌아가기
        </Link>
        {isLogin ? (
          <button className={styles.button} onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <form onSubmit={handleLogin}>
            <div>
              <input
                type="text"
                id="userId"
                name="userId"
                placeholder="Id"
                value={loginId}
                onChange={handleChangeInput}
              />
              {loginId.length > 0 && (
                <span onClick={handleRemoveLoginId}>
                  <CloseCircleIcon />
                </span>
              )}
            </div>
            <div>
              {isPasswordVisible ? (
                <input
                  type="text"
                  id="userPw"
                  name="userPw"
                  placeholder="password"
                  value={loginPassword}
                  onChange={handleChangeInput}
                />
              ) : (
                <input
                  type="password"
                  id="userPw"
                  name="userPw"
                  placeholder="Password"
                  value={loginPassword}
                  onChange={handleChangeInput}
                />
              )}

              {loginPassword.length > 0 && (
                <span onClick={handlePasswordVisibleToggle}>
                  {isPasswordVisible ? <EyeSlashIcon /> : <EyeIcon />}
                </span>
              )}
            </div>
            <button className={styles.button} type="submit">
              Login
            </button>
            {isError && <p className={styles.errorMessage}>{errorMessage}</p>}
          </form>
        )}
      </article>
    </section>
  );
};

export default Admin;
