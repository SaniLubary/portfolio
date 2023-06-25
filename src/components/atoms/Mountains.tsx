const Mountains = (props: any) => (
  <svg
    width={829}
    height={704}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <path
        d="M257 297v122.5L104.5 682l-87.5.5L257 297Z"
        fill="url(#b)"
        shapeRendering="crispEdges"
      />
    </g>
    <g filter="url(#c)">
      <path
        d="m725 301 105 185.5V668l-305.5-23.5L725 301Z"
        fill="url(#d)"
        shapeRendering="crispEdges"
      />
    </g>
    <path
      d="m454.917 79 315.086 548 5.497 37.5-103.5-9-147.5-11-420 37.5L454.917 79Z"
      fill="url(#e)"
    />
    <path
      d="M481 648.438 454.917 79l198.335 344.945L524.5 644.5l-43.5 3.938Z"
      fill="url(#f)"
    />
    <path
      d="M462 223c-27.6 33.2-86.667 13.833-91.5 0l84-144 76 132.5c-8.667-10-40.9-21.7-68.5 11.5ZM731.5 447c-27.6 33.2-86.667 13.833-91.5 0l84-144 76 132.5c-8.667-10-40.9-21.7-68.5 11.5ZM244 442.5c-20.827 37.818-69.667 9.333-74.5-4.5L257 297l34 64.5c-18.5 30.5-28 46.5-47 81Z"
      fill="#fff"
      fillOpacity={0.26}
    />
    <g filter="url(#g)" shapeRendering="crispEdges">
      <path
        d="m830.003 486.5-105-185.5L775 663.5l55.003 4.5V486.5Z"
        fill="url(#h)"
      />
      <path d="M291 361.5 257.003 297v122.5l33.997-58Z" fill="url(#i)" />
    </g>
    {props.noSun ? <></> :
      <g className="sun">
        <path
          d="M741.976 106.438a77.87 77.87 0 0 0 2.007-6H593.094a78.152 78.152 0 0 0 2.006 6h146.876Z"
          fill="url(#j)"
        />
        <path
          d="M747.074 77.974a79.085 79.085 0 0 1-1.051 13.464H591.055a79.05 79.05 0 0 1-1.053-12.335C589.69 35.728 624.6.313 667.974.003c43.374-.313 78.789 34.597 79.1 77.971Z"
          fill="url(#k)"
        />
        <path
          d="M737.885 115.438H599.19a78.653 78.653 0 0 0 3.55 6h131.595a78.326 78.326 0 0 0 3.55-6Z"
          fill="url(#l)"
        />
        <path
          d="M729.189 128.438H607.886a79.379 79.379 0 0 0 4.489 5h112.326a79.053 79.053 0 0 0 4.488-5Z"
          fill="url(#m)"
        />
        <path
          d="M629.044 146.438a78.83 78.83 0 0 1-7.544-5h94.077a78.55 78.55 0 0 1-7.542 5h-78.991Z"
          fill="url(#n)"
        />
        <path
          d="M644.84 153.438a78.47 78.47 0 0 0 24.262 3.636 78.543 78.543 0 0 0 23.134-3.636H644.84Z"
          fill="url(#o)"
        />
      </g>}
    <defs>
      <linearGradient
        id="b"
        x1={261.499}
        y1={289.516}
        x2={261.499}
        y2={726.391}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00ADB5" />
        <stop offset={0.828} stopColor="#00565A" stopOpacity={0.91} />
        <stop offset={1} stopColor="#00565A" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="d"
        x1={724.457}
        y1={301}
        x2={724.457}
        y2={734.662}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00ADB5" />
        <stop offset={0.833} stopColor="#00565A" stopOpacity={0.41} />
        <stop offset={1} stopColor="#00565A" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="e"
        x1={440}
        y1={79}
        x2={440}
        y2={682}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00ADB5" />
        <stop offset={0.891} stopColor="#00565A" stopOpacity={0.41} />
        <stop offset={1} stopColor="#00565A" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="f"
        x1={440}
        y1={79}
        x2={440}
        y2={682}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F5F5F5" />
        <stop offset={1} stopColor="#F5F5F5" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="h"
        x1={491.714}
        y1={285.961}
        x2={303.318}
        y2={1123.64}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={0.521} stopColor="#C4C4C4" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="i"
        x1={491.714}
        y1={285.961}
        x2={303.318}
        y2={1123.64}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={0.521} stopColor="#C4C4C4" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="j"
        x1={668.538}
        y1={0}
        x2={668.538}
        y2={157.076}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFA700" />
        <stop offset={1} stopColor="#C82906" stopOpacity={0.57} />
      </linearGradient>
      <linearGradient
        id="k"
        x1={668.538}
        y1={0}
        x2={668.538}
        y2={157.076}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFA700" />
        <stop offset={1} stopColor="#C82906" stopOpacity={0.57} />
      </linearGradient>
      <linearGradient
        id="l"
        x1={668.538}
        y1={0}
        x2={668.538}
        y2={157.076}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFA700" />
        <stop offset={1} stopColor="#C82906" stopOpacity={0.57} />
      </linearGradient>
      <linearGradient
        id="m"
        x1={668.538}
        y1={0}
        x2={668.538}
        y2={157.076}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFA700" />
        <stop offset={1} stopColor="#C82906" stopOpacity={0.57} />
      </linearGradient>
      <linearGradient
        id="n"
        x1={668.538}
        y1={0}
        x2={668.538}
        y2={157.076}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFA700" />
        <stop offset={1} stopColor="#C82906" stopOpacity={0.57} />
      </linearGradient>
      <linearGradient
        id="o"
        x1={668.538}
        y1={0}
        x2={668.538}
        y2={157.076}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFA700" />
        <stop offset={1} stopColor="#C82906" stopOpacity={0.57} />
      </linearGradient>
      <filter
        id="a"
        x={0}
        y={284}
        width={274}
        height={419.5}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={8.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_851_41" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_851_41"
          result="shape"
        />
      </filter>
      <filter
        id="c"
        x={507.5}
        y={288}
        width={339.5}
        height={401}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={8.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_851_41" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_851_41"
          result="shape"
        />
      </filter>
      <filter
        id="g"
        x={240.003}
        y={284}
        width={607}
        height={405}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={8.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_851_41" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_851_41"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default Mountains
