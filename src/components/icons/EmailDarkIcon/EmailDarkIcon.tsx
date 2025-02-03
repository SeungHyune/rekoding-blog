const EmailDarkIcon = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="24" fill="url(#pattern0_628_1465)" />
      <defs>
        <pattern
          id="pattern0_628_1465"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_628_1465" transform="scale(0.0185185)" />
        </pattern>
        <image
          id="image0_628_1465"
          width="54"
          height="54"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDlFQkU1NzZFMTNGMTFFRkIxQjk5NDM2M0ZGNjUxMkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDlFQkU1NzdFMTNGMTFFRkIxQjk5NDM2M0ZGNjUxMkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEOUVCRTU3NEUxM0YxMUVGQjFCOTk0MzYzRkY2NTEyQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEOUVCRTU3NUUxM0YxMUVGQjFCOTk0MzYzRkY2NTEyQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pl9FBI4AAAPuSURBVHja3JpbSBVBGMd3RcqELnSROhqUGBEoUdpDQRmURBSW9ZS3Bx+KQIgM8S0CXxS6vERimUW3Fwl66CXBSojqIaPCJD1mlkZaoWaZecnpP/WdGJZN9ztnr33wOwuzO5f/mdmZb74dXbPZhBBpuGwCG0E6SAHzwQIwAUbAAOgBHeAlaAYvdF0Xmp8MYrJADegT0dsnUA+2gjgvxcwCh8EzYb91gkNgttuickGHcN56QSHQnRaUCpqE+3aP3l1HRO0CA8I7GwYH7BQUByrBlPCHVcc8NGUBNFP5zS6D+FiEnRL+tWtR9RwyVQn/WzVX1F4RHCsw06CbiApJ9wYs0oJhwyAT7linmhhnnCxwqQuQKGnzwEXj+2b0yYrBTi14tgXkmw5FKJ5D3naKFkzrBWkYkmPGHisJsCiN2l5s5l2ELc5C2z3YSeRYbFs48q5FeixbdqPFeiY96A2rdabR+/b3H7nEWDe+gTwXeyuP6rRqdeow7GcuitIhPuH0PgnlHwE/mW3r/90u/GQyM5YrlV1xYpcry6SyBdVVzmxjhiykhJND2UF/paQHIMlGUUlUpqA6cimdY6Uyw2muMKooA7yh5B6wzgZR6aBLCQusV+5xrEZmuBONMKpsMWg2/rtRitoBhqisR2Cp4T7HmjTlH2ILowoTwHW6PQnKohBVRnkFlZVg8gzHXmvcWOA0O+0KZVKpk+E5C4LiwVllpq3610zLjVFq3ADNDA3dD0aUSWXJNM8uVCJeoyB/hrI59kNjLn7CQi+sBW+VwOcaszA4eEXPvAcbLJTLsXGZ4YudwqgRyeAJZRmUoTvl3m5KE/RMssUyOTYkM7TaLYwakggalKythrrkvURGeezJ47YTwpRJpRR8Nnx8KOW6Y0xh92VsrtspX48+C8lZrxbX1ZTcjvQJh33nNimszWkPnYS0urjNeSiHyioKCVhtpK55YMzXIFWnTF24rPxPhPWhicsiO+hGRgUhD0QlMx6/qYYGbjAyFnnQYZw6643/SovFqXSM/MKQCz0VorrGLLatxayQIhF8O2gWMJXeuIx/Lw9oXLEdZETWyDhlthvH5WiAA6bH1IXf7GvLLVz2BEzUXYjaZhq7V4TJoShPy8wNiKhBkAVhXdN9bZFDsofi+FMBECXbWGAUNdNUWxGAWfB4tOvIeR+Lqo36zBUFW676UNQZu856nPSRqEq73ZsCOvbjlX2MJSBrxXdr8EBUoyu7ClSyD7xzQVA3jRT39oB0ELNQCbPZaWE6iJng6SqJBmwG52TYKwYxH8AFkG3H0VndAZHyO3AOkBHgFURI8XK+g1Htz/GFMHgKHoPndh52/iXAAFSSY0EII+arAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export default EmailDarkIcon;
