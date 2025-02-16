import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import styles from "./admin.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CloseCircleIcon, EyeIcon, EyeSlashIcon } from "@/components/icons";

const Admin = () => {
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsError(false);

    if (loginId.trim().length === 0 || loginPassword.trim().length === 0) {
      setIsError(true);
      setErrorMessage("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, loginId, loginPassword);

      navigate("/");
    } catch (error) {
      setIsError(true);
      setErrorMessage("아이디 혹은 비밀번호가 올바르지 않습니다.");
      throw new Error(`${error}`);
    }
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;

    if (inputName === "userId") {
      setLoginId(event.target.value);
    } else if (inputName === "userPw") {
      setLoginPassword(event.target.value);
    }
  };

  const handleRemoveLoginId = () => {
    setLoginId("");
  };

  const handlePasswordVisibleToggle = () => {
    setIsPasswordVisible((isPasswordVisible) => !isPasswordVisible);
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
        <Link to="/" title="메인 페이지로 되돌아가기">
          되돌아가기
        </Link>
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
          <button type="submit">Login</button>
        </form>
        {isError && <p className={styles.errorMessage}>{errorMessage}</p>}
      </article>
    </section>
  );
};

export default Admin;
