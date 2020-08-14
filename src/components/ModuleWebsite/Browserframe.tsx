const BrowserFrame: React.FC<{ color?: string; dots?: string }> = ({
  color = '#404040',
  dots,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 439 13"
    preserveAspectRatio="none"
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M4 0h431c2.209139 0 4 1.790861 4 4v9H0V4c0-2.209139 1.790861-4 4-4z"
        fill={color}
      />
      <circle fill={dots || '#FF6158'} cx="6.5" cy="6.5" r="2.5" />
      <circle fill={dots || '#FFBE2D'} cx="22.5" cy="6.5" r="2.5" />
      <circle fill={dots || '#27C93F'} cx="14.5" cy="6.5" r="2.5" />
    </g>
  </svg>
)

export default BrowserFrame
