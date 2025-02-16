import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import styles from "./admin.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsError(false);

    try {
      await signInWithEmailAndPassword(
        auth,
        event.currentTarget.userId.value,
        event.currentTarget.userPw.value,
      );

      navigate("/");
    } catch (error) {
      setIsError(true);
      setErrorMessage("아이디 혹은 비밀번호가 올바르지 않습니다.");
      throw new Error(`${error}`);
    }
  };

  return (
    <section className={styles.adminSection}>
      <article className={styles.imageContainer}>
        <div className={styles.titleBox}>
          <h2>Administrator Login</h2>
          <p>관리자 로그인을 진행해주세요.</p>
        </div>
        <img src="public/images/picture.png" alt="admin login picture" />
      </article>
      <article className={styles.loginContainer}>
        <form onSubmit={handleLogin}>
          <input type="text" id="userId" name="userId" placeholder="Id" />
          <input
            type="password"
            id="userPw"
            name="userPw"
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
        {isError && <p className={styles.errorMessage}>{errorMessage}</p>}
      </article>
    </section>
  );
};

export default Admin;
