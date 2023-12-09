export default function Caroseul() {
  return (
    <div className="flex gap-1">
      <div className="border border-scale-500 p-1">
        <svg
          width="9"
          height="17"
          viewBox="0 0 9 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 16L1 8.5L8.5 1"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="border border-scale-500 p-1">
        <svg
          width="9"
          height="17"
          viewBox="0 0 9 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L8.5 8.5L1 16"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
