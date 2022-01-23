type Props = {
  tag?: "div" | "section" | "article" | "aside" | "ul" | "ol";
  className?: string;
};

const Grid: React.FC<Props> = ({ tag, children, className = "" }) => {
  const Component = tag ?? "div";
  const computedClassName = `mt-12 max-w-lg mx-auto grid gap-12 lg:grid-cols-3 lg:max-w-none ${className}`;

  return <Component className={computedClassName}>{children}</Component>;
};

export default Grid;
