import { useState } from "react";

const useTabState = () => {
  const [tab, setTab] = useState("TOTAL");

  const handleClickTab = (newTab: string) => {
    if (tab === newTab) {
      return;
    }

    setTab(newTab.toUpperCase());
  };

  return {
    tab,
    handleClickTab,
  };
};

export default useTabState;
