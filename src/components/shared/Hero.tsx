import { ArrowRight, Zap } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden">
      <div className="relative container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8 bg-background w-fit rounded-md py-2 px-4 mx-auto">
            <span className="bg-primary shrink-0 mr-3 rounded-sm flex items-center justify-center h-10 w-10">
              <Zap className="fill-foreground" />
            </span>
            <h1 className="text-2xl lg:text-5xl font-bold">
              <span className="text-primary">Unlock</span> Your Creative
              Potential
            </h1>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6">
            with Online Design and Development Courses.
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Learn from Industry Experts and Enhance Your Skills.
          </p>

          <Link to="/courses" className={cn(buttonVariants({ size: "lg" }))}>
            Explore Courses <ArrowRight />
          </Link>
        </div>
        <div className="mt-10 w-full aspect-video overflow-hidden">
          <img
            src="/Container.png"
            alt="hero"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
