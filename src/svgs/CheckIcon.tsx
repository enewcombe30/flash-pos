export default function CheckIcon({
  className = "",
  size = 24,
  color = "#16A34A",
  strokeWidth = 4,
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 14 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.0005 11.0005L4.69047 17.0005L11.4154 2.0005"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
