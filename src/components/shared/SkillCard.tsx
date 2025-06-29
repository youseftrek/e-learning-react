import { Card, CardContent } from "@/components/ui/card";

type Props = {
  id: string;
  heading: string;
  description: string;
};

export default function LogicalCard({ id, description, heading }: Props) {
  return (
    <Card className="rounded-xl shadow-md hover:shadow-lg transition duration-300">
      <CardContent className="p-6 flex flex-col justify-between h-full">
        <div>
          <p className="text-4xl font-bold mb-4 text-right">{id}</p>
          <h3 className="text-lg font-bold">{heading}</h3>
          <p className="text-sm text-muted-foreground mt-2">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
