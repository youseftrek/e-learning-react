import { Button } from "../ui/button";

type CourseCardProps = {
  image: string;
  title: string;
  description: string;
  author: string;
  time: string;
  level: string;
};

const CourseCard = ({
  image,
  title,
  description,
  author,
  time,
  level,
}: CourseCardProps) => {
  return (
    <div className="w-full p-5 bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="flex justify-between text-xs text-muted-foreground ">
        <span>{time}</span>
        <span>{level}</span>
        <span className="text-xs text-muted-foreground">{author}</span>
      </div>
      <Button variant="secondary" className="w-full">
        View Details
      </Button>
    </div>
  );
};

export default CourseCard;
