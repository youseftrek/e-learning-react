import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type Props = {
  className?: string;
  Heading: string;
  description: string;
  link?: string;
  linkHref?: string;
  children: React.ReactNode;
};

const Section = ({
  className,
  Heading,
  description,
  link,
  linkHref,
  children,
}: Props) => {
  return (
    <section className={cn("p-3 md:p-6 rounded-lg", className)}>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1">
        {Heading}
      </h2>
      <p className="text-muted-foreground mb-3">{description}</p>
      <div className="w-full">{children}</div>
      {link && linkHref && (
        <div className="mx-auto w-fit mt-4">
          <Link
            to={linkHref}
            className="underline underline-offset-3 text-primary hover:opacity-85 transition-all duration-200"
          >
            {link}
          </Link>
        </div>
      )}
    </section>
  );
};

export default Section;
