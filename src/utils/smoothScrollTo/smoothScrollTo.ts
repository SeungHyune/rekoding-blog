const smoothScrollTo = (targetId: string) => {
  const targetElement = document.getElementById(targetId);

  window.scrollTo({
    top: targetElement?.offsetTop,
    behavior: "smooth",
  });
};

export default smoothScrollTo;
