import { auth } from "@/firebase";
import useLogin from "@/stores/useLogin/useLogin";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLoginForm = () => {
  const { isLogin, setIsLogin } = useLogin();
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
      setIsLogin(true);
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

  const handleLogout = () => {
    getAuth().signOut();
    setIsLogin(false);
    navigate("/");
  };

  return {
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
  };
};

export default useLoginForm;
