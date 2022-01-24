import { useRef } from "react";
// utils
import { generateUUID } from "utils/uuid";

interface Props {
  positionClassName: string;
}

const uuid = generateUUID();

const BackgroundPattern = ({ positionClassName }: Props) => {
  const uniqueIdRef = useRef(uuid);

  const uniqueId = uniqueIdRef.current;

  return (
    <svg
      className={`absolute ${positionClassName}`}
      width={404}
      height={384}
      fill="none"
      viewBox="0 0 404 384"
    >
      <defs>
        <pattern id={uniqueId} x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
          <rect
            x={0}
            y={0}
            width={4}
            height={4}
            className="text-primary dark:text-green-300 text-opacity-25 dark:text-opacity-25"
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect width={404} height={384} fill={`url(#${uniqueId})`} />
    </svg>
  );
};

export default BackgroundPattern;
