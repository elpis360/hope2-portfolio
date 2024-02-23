import React from "react";
interface Props {
  width?: string;
}
export function Logo(props: Props) {
  const { width } = props;
  return (
    <svg
      width={width || "60"}
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1031_111)">
        <path d="M25.5084 0H16.5264V30.1775H25.5084V0Z" fill="#DFFF00" />
        <path
          d="M25.5089 43.3136H16.5269V57.5148H25.5089V43.3136Z"
          fill="#DFFF00"
        />
        <path
          d="M43.4728 2.48511H34.4907V16.6863H43.4728V2.48511Z"
          fill="#DFFF00"
        />
        <path
          d="M43.4728 29.8224H34.4907V59.9999H43.4728V29.8224Z"
          fill="#DFFF00"
        />
        <path
          d="M32.3354 41.1835V32.3077H1.79655V41.1835H32.3354Z"
          fill="#DFFF00"
        />
        <path d="M60 41.1835V32.3077H45.6287V41.1835H60Z" fill="#DFFF00" />
        <path
          d="M58.5391 27.8757V19L28.0002 19V27.8757H58.5391Z"
          fill="#DFFF00"
        />
        <path
          d="M14.3716 30.1775V21.3018H0.000288963V30.1775H14.3716Z"
          fill="#DFFF00"
        />
      </g>
      <defs>
        <clipPath id="clip0_1031_111">
          <rect width="60" height="60" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
