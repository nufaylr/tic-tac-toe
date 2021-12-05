const O = ({ width, colour, strokeWidth }) => (
  <svg
    viewBox="0 0 24 24"
    style={{ width: width ? `${width}` : "150px", margin: "auto" }}
  >
    <circle
      cx="12"
      cy="12"
      r="7"
      stroke={colour ? colour : "#fecf31"}
      strokeWidth={strokeWidth ? strokeWidth : 2}
      fill="none"
    />
  </svg>
);

export default O;
