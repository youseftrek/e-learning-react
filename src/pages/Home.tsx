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
          <div className="bg-blue-500">tt</div>
          <div className="bg-green-500">tt</div>
          <div className="bg-violet-500">tt</div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
