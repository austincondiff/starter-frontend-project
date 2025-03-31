const Typography = ({ variant, children }: { variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span", children: React.ReactNode }) => {
  switch (variant) {
    case "h1":
      return <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{children}</h1>;
    case "h2":
      return <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight">{children}</h2>;
    case "h3":
      return <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{children}</h3>;
    case "h4":
      return <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{children}</h4>;
    case "h5":
      return <h5 className="scroll-m-20 text-lg font-semibold tracking-tight">{children}</h5>;
    case "h6":
      return <h6 className="scroll-m-20 text-md font-semibold tracking-tight">{children}</h6>;
    case "p":
      return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
    case "span":
      return <span className="text-sm text-muted-foreground">{children}</span>;
    default:
      return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
  }
};

export default Typography;
