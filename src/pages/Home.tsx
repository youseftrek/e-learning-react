import CourseCard from "@/components/shared/CourseCard";
import Section from "@/components/shared/Section";

const Home = () => {
  return (
    <div>
      <Section
        className="bg-background"
        Heading="Our Trendy Technology"
        description="The most used fields in the labor market"
        link="View All Courses"
        linkHref="/courses"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <CourseCard
            image="/Image.png"
            title="Course Title"
            description="Course Description"
            author="John Doe"
            time="3 hours"
            level="Intermediate"
          />
        </div>
      </Section>
    </div>
  );
};

export default Home;
