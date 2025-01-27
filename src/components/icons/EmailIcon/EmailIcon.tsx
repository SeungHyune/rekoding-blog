const EmailIcon = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="24" fill="url(#pattern0_594_1464)" />
      <defs>
        <pattern
          id="pattern0_594_1464"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_594_1464" transform="scale(0.0185185)" />
        </pattern>
        <image
          id="image0_594_1464"
          width="54"
          height="54"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEJFMTZGM0REQ0FFMTFFRkE0QUNBMUI2NTQ0NkE2ODUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEJFMTZGM0VEQ0FFMTFFRkE0QUNBMUI2NTQ0NkE2ODUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QkUxNkYzQkRDQUUxMUVGQTRBQ0ExQjY1NDQ2QTY4NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QkUxNkYzQ0RDQUUxMUVGQTRBQ0ExQjY1NDQ2QTY4NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiBMFBUAAAOaSURBVHja3JpNSFVBFMfnSaW1KaIkngUltQiMyGpRkLVIIgzJbFNaQYtEEAJBXqsI3Bj0sYmikoo+Vo+gRQQJUkJUi4wKC8myD40yo+8vs7qdk2diuLz37px5c7868BPffXdmzv/emXPPnPsSwr7NBZYDy4AyYCYwGZgCjAJfgLfAAPAQuA90AfcAR0TMlgBHgFfknAnDwAlgFVAQppgJQCNwJw8x2XgENACFQYuqpmnk+MwgUA8k/BZUCnQGIMjNFVq7vlgVLXonJD4Cm2wKwoXcCvwOUZTKXhtTM0GRyokYp4Bx+QjbH0FRkrOmd64twqLUacmy9TEQJanTFZUE3sRI2AedRwHO2UsxEiXp8lpv22IoynNKTqSMO67CBtTcUs2it9MWI66Gvm/NlF30aV6Z1SE4XanpW59ca/KOrWQkmT9DEKY7JmqoUA+cZMzlz0BNgKJqaExd/9rVaTjEXKiYEO8JYJ+0E/jF9G1I+rWY2bBFGey0T7vcQurbobFamD4ukNGQ00juoD/R52tAsUVRxdSnQ2NU03GOj03Y4ICBMEFX5YnyDFlkQRRWtfqVskC58h3HRywsicuGwtCmUTrjvromtgZ4T33dAGa4vuf4iOWLf1fIRBhaEXCOvsOw3GwgqpnaOtRXUYZzOD4+Fga1wGzJc0oJKu1UnvMy3AUfUiJtW45Iy61Rsgs0uayWKr0yqEzPce5UpeL1Ddjs0TfHx++C+fDTKUEvBJ4phc/5WTKEXjrnBbBUo1+Ojz8EbdRsCkMrAW7R+e+odCdtHR1z6JwSzT45PmIQEj0+CEObBKSVdj2usdJ0jvBB2N/gcdEnYTKoNLlKDcN0jJuOcXy8KpSo5IcwaePp4VtG/5sYx8fDGG4fBJChj9I0DMqu4595AdwxG8bxcY5s1P8fCXup7qA7GAMkQxBVwjj3vPqhgnFFUiEI28Xwr9zduFuz4QiJC+LOJWmsEU3fujN1siXGNUXJjkzCMBt/HmNRvbmekbUxFlblNa8vxFBUp86CnSXGXmTHRRTuJ0t1o9FGg3peGKCPa7mhNhUDYbtNnyPHIizqqMjjN1eY/Z+JoKiDwtJvPfZFSFSr7fSmLuRo+TrPgqxn7pYOQVRHULuKDQGlX09ppiREgIa5Zb1SZrMJvnJtyFLqDtRWYAGFyl6mYnDne1yMvTYusBHxbBtWeSupAjybSCrOfqWS9iDdmdvATeCuzdLDHwEGAAaSOR//JiEeAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export default EmailIcon;
