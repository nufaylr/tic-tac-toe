const X = ({ width, colour, strokeWidth }) => (
  <svg
    fill="none"
    stroke={colour ? colour : "#2bcf78"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth ? strokeWidth : 2}
    viewBox="0 0 24 24"
    style={{ width: width ? `${width}` : "150px", margin: "auto" }}
    data-testid="test-icon-x"
  >
    <line x1="18" x2="6" y1="6" y2="18" />
    <line x1="6" x2="18" y1="6" y2="18" />
  </svg>
);

export default X;
