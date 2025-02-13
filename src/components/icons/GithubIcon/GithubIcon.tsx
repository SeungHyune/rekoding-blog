const GithubIcon = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="24" fill="url(#pattern0_512_443)" />
      <defs>
        <pattern
          id="pattern0_512_443"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_512_443" transform="scale(0.015625)" />
        </pattern>
        <image
          id="image0_512_443"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default GithubIcon;
