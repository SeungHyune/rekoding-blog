const GithubDarkIcon = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="24" fill="url(#pattern0_512_559)" />
      <defs>
        <pattern
          id="pattern0_512_559"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_512_559" transform="scale(0.015625)" />
        </pattern>
        <image
          id="image0_512_559"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default GithubDarkIcon;
