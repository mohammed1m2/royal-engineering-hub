const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-10 h-10 bg-royal rounded-md flex items-center justify-center">
      <span className="text-gold font-extrabold text-sm leading-none">RE</span>
    </div>
    <div className="leading-none">
      <div className="text-lg font-extrabold tracking-wide text-foreground">RÔYAL</div>
      <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">engineering</div>
    </div>
  </div>
);

export default Logo;
