interface Props {
  className?: string;
  width?: string;
  height?: string;
}

const SiteLogo = ({ className, width = "256", height = "256" }: Props) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="256" height="256" rx="50" fill="currentColor" />
      <path
        d="M76.8 102.4H128V103.6C128 131.214 105.614 153.6 78 153.6H76.8V102.4Z"
        fill="#7BC96F"
      />
      <path
        d="M179.2 153.6H230.4V154.8C230.4 182.414 208.014 204.8 180.4 204.8H179.2V153.6Z"
        fill="#C6E48B"
      />
      <path
        d="M179.2 153.6L179.2 204.8L178 204.8C150.386 204.8 128 182.414 128 154.8L128 153.6L179.2 153.6Z"
        fill="#C6E48B"
      />
      <path
        d="M76.8 102.4L76.8 51.2L78 51.2C105.614 51.2 128 73.5858 128 101.2L128 102.4L76.8 102.4Z"
        fill="#239A3B"
      />
      <path
        d="M179.2 102.4L179.2 51.2L180.4 51.2C208.014 51.2 230.4 73.5858 230.4 101.2L230.4 102.4L179.2 102.4Z"
        fill="#239A3B"
      />
      <path
        d="M179.2 102.4L128 102.4L128 101.2C128 73.5858 150.386 51.2 178 51.2L179.2 51.2L179.2 102.4Z"
        fill="#239A3B"
      />
      <rect x="179.2" y="102.4" width="51.2" height="51.2" fill="#7BC96F" />
      <rect x="128" y="102.4" width="51.2" height="51.2" fill="#7BC96F" />
      <rect x="25.6" y="153.6" width="51.2" height="51.2" fill="#C6E48B" />
      <rect x="25.6" y="102.4" width="51.2" height="51.2" fill="#7BC96F" />
      <rect x="25.6" y="51.2" width="51.2" height="51.2" fill="#239A3B" />
    </svg>
  );
};

export default SiteLogo;
