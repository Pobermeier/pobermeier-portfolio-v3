type Props = {
  contentSlotBottom?: React.ReactNode;
};

const Card: React.FC<Props> = ({ children, contentSlotBottom }) => {
  return (
    <article className="flex flex-col rounded-xl drop-shadow-lg overflow-hidden md:hover:drop-shadow-2xl md:hover:scale-105 transition-all relative z-10">
      <div className="flex-1 bg-gray-100 dark:bg-gray-700 p-6 flex flex-col justify-between">
        {children}
      </div>
      {contentSlotBottom}
    </article>
  );
};

export default Card;
