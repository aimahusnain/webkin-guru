const TextCycle = () => {
  return (
    <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
      <span className="text-purple-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
        <ul className="block animate-text-slide-5 text-center leading-tight [&_li]:block">
          <li>Start Good people creating great work</li>
          <li>1st Formed by strategic insights</li>
          <li>2nd Data that informs & predicts</li>
          <li>3rd Media that inspires action</li>
          <li>4th & creative that makes connections</li>
          <li>End That delivers awesome results</li>
          <li aria-hidden="true">Start Good people creating great work</li>
        </ul>
      </span>
    </div>
  );
};

export default TextCycle;
