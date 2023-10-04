import React from "react";

export default function () {
  return (
    <>
      <div className="absolute top-[2.19rem] left-[55.69rem] rounded-lg bg-white shadow-2xl w-[22.5rem] h-[7.63rem] overflow-hidden text-[0.75rem] rounded-lg">
        <b className="absolute top-[1.13rem] left-[1.56rem] text-[1.13rem]">
          Submit my resume
        </b>
        <div className="absolute top-[3rem] left-[1.56rem] text-[1rem] text-dimgray">
          Send my resume to DigitalTolk
        </div>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[calc(50%_-_43px)] right-[1.06rem] w-[3.25rem] h-[3.25rem] overflow-hidden border rounded-lg "
        >
          <rect width="24" height="24" fill="#E5E5E5" />
          <rect
            width="1280"
            height="720"
            transform="translate(-1196 -67)"
            fill="white"
          />
          <g filter="url(#filter0_d_0_1)">
            <rect
              x="-305"
              y="-32"
              width="360"
              height="122"
              rx="10"
              fill="white"
            />
            <g clip-path="url(#clip0_0_1)">
              <path
                d="M26.4444 38H-2.44444C-8.82889 38 -14 32.8289 -14 26.4444V-2.44444C-14 -8.82889 -8.82889 -14 -2.44444 -14H26.4444C32.8289 -14 38 -8.82889 38 -2.44444V26.4444C38 32.8289 32.8289 38 26.4444 38Z"
                fill="#FABB18"
              />
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 6V12L16 14"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_0_1"
              x="-315"
              y="-42"
              width="380"
              height="142"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_0_1">
              <rect
                width="52"
                height="52"
                fill="white"
                transform="translate(-14 -14)"
              />
            </clipPath>
          </defs>
        </svg>
        <div className="absolute top-[5.56rem] left-[0rem] rounded-t-none rounded-b-3xs bg-whitesmoke w-[22.5rem] h-[2.06rem] bg-gray-200" />
        <div className="absolute top-[6.13rem] left-[12.88rem] font-light">
          Skip
        </div>
        <div className="absolute top-[6.13rem] left-[15.69rem] font-bold">
          Remind me later
        </div>
      </div>
    </>
  );
}
