import { useEffect, useState } from "react";
import useToggle from "../useToggle/useToggle";

interface UseToggleMobileNavProps {
  mobileWidth: number;
}

const useToggleMobileNav = ({ mobileWidth }: UseToggleMobileNavProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const {
    isToggle: isNavOpen,
    handleToggleOpen: handleOpenNav,
    handleToggleClose: handleCloseNav,
    handleToggle: handleToggleNav,
  } = useToggle();

  useEffect(() => {
    if (window.innerWidth <= mobileWidth) {
      setIsMobile(true);
      handleCloseNav();
    } else {
      handleOpenNav();
    }
  }, []);

  return {
    isMobile,
    isNavOpen,
    handleCloseNav,
    handleToggleNav,
  };
};

export default useToggleMobileNav;
