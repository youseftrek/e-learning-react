import { Link } from "react-router-dom";
import { Card } from "../ui/card";
import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { Badge } from "../ui/badge";

type CourseCardProps = {
  id: number;
  image: string;
  title: string;
  description: string;
  author: string;
  time: string;
  level: string;
};

const CourseCard = ({
  id,
  image,
  title,
  description,
  author,
  time,
  level,
}: CourseCardProps) => {
  return (
    <Card className="w-full p-5 hover:shadow-lg group">
      <div className="w-full max-h-[200px] overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="object-cover group-hover:scale-105 duration-200 transition-all"
        />
      </div>
      <div className="flex text-xs text-muted-foreground gap-2">
        <Badge variant="secondary">{time}</Badge>
        <Badge variant="secondary">{level}</Badge>
        <Badge variant="secondary">{author}</Badge>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>

      <Link
        to={`/course/${id}`}
        className={cn(buttonVariants(), "flex items-center gap-2")}
      >
        <Eye /> View Details
      </Link>
    </Card>
  );
};

export default CourseCard;
