export default function Footer() {
  return (
    <footer className="w-full pt-8 pb-24 md:pb-10 bg-black/50 border-t border-emerald-900/10 flex flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center gap-4 max-w-7xl mx-auto">
        <p className="text-gray-400 text-[10px] md:text-xs font-medium tracking-widest uppercase text-center leading-relaxed">
          Built and Designed by
          <span className="text-emerald-500 font-bold ml-2 hover:text-emerald-400 transition-colors cursor-default">
            Naman Agrawal
          </span>
        </p>

        <div className="flex items-center gap-4">
          <div className="w-8 h-[1px] bg-emerald-900/30"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40"></div>
          <div className="w-8 h-[1px] bg-emerald-900/30"></div>
        </div>

        <p className="text-gray-400 text-[10px] md:text-xs font-medium tracking-widest uppercase">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
