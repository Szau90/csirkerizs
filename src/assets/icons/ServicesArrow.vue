<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="85"
    height="85"
    viewBox="0 0 85 85"
  >
    <defs>
      <filter
        id="Rectangle_2"
        x="0"
        y="0"
        width="85"
        height="85"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx="3" dy="3" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="7.5" result="blur" />
        <feFlood flood-color="#c44644" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="Rectangle_3"
        x="1.5"
        y="1.5"
        width="70"
        height="70"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx="-3" dy="-3" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="5" result="blur-2" />
        <feFlood flood-color="#ff9896" />
        <feComposite operator="in" in2="blur-2" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g id="Group_38" data-name="Group 38" transform="translate(-627.5 -847.5)">
      <g id="Group_7" data-name="Group 7" transform="translate(662.849 771)">
        <g
          transform="matrix(1, 0, 0, 1, -35.35, 76.5)"
          filter="url(#Rectangle_2)"
        >
          <g
            id="Rectangle_2-2"
            data-name="Rectangle 2"
            transform="translate(19.5 19.5)"
            fill="#f6f6f6"
            stroke="#ff5f5c"
            stroke-width="3"
          >
            <rect width="40" height="40" rx="20" stroke="none" />
            <rect
              x="1.5"
              y="1.5"
              width="37"
              height="37"
              rx="18.5"
              fill="none"
            />
          </g>
        </g>
        <g
          transform="matrix(1, 0, 0, 1, -35.35, 76.5)"
          filter="url(#Rectangle_3)"
        >
          <g
            id="Rectangle_3-2"
            data-name="Rectangle 3"
            transform="translate(19.5 19.5)"
            fill="#f0f0f8"
            stroke="#ff5f5c"
            stroke-width="3"
          >
            <rect width="40" height="40" rx="20" stroke="none" />
            <rect
              x="1.5"
              y="1.5"
              width="37"
              height="37"
              rx="18.5"
              fill="none"
            />
          </g>
        </g>
      </g>
      <path
        id="Icon_open-arrow-right"
        data-name="Icon open-arrow-right"
        d="M9.318,0V3.727H0V5.591H9.318V9.318L14.909,4.6Z"
        transform="translate(660 882)"
      />
    </g>
  </svg>
</template>
