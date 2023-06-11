import React, { FC } from "react";

interface IDropDown {
  className?: string;
}

const DropDown: FC<IDropDown> = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2_934)">
        <path
          d="M6.78115 7.79282L10.4999 11.5035L14.2187 7.79282L15.361 8.93518L10.4999 13.7963L5.63879 8.93518L6.78115 7.79282Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_934">
          <rect
            width="19.4444"
            height="19.4444"
            fill="white"
            transform="translate(0.77771 0.833344)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default DropDown;
