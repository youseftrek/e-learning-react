import CourseCard from "@/components/shared/CourseCard";
import Faq from "@/components/shared/Faq";
import Hero from "@/components/shared/Hero";
import Section from "@/components/shared/Section";
import SkillCard from "@/components/shared/SkillCard";
import { Accordion } from "@/components/ui/accordion";
import { faqs } from "@/constants/faqs";
import { skills } from "@/constants/skills";

const Home = () => {
  return (
    <div className="flex flex-col gap-24 py-16">
      <Hero />
      <Section
        className="bg-background"
        Heading="Our Trendy Technology"
        description="The most used fields in the labor market"
        link="View All Courses"
        linkHref="/courses"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-6">
          <CourseCard
            id={1}
            image="/Image.png"
            title="Course Title"
            description="Course Description"
            author="John Doe"
            time="3 hours"
            level="Intermediate"
          />
          <CourseCard
            id={2}
            image="/Image.png"
            title="Course Title"
            description="Course Description"
            author="John Doe"
            time="3 hours"
            level="Intermediate"
          />
          <CourseCard
            id={3}
            image="/Image.png"
            title="Course Title"
            description="Course Description"
            author="John Doe"
            time="3 hours"
            level="Intermediate"
          />
        </div>
      </Section>
      <Section
        Heading="Skills"
        description="Skills gained from learning programming include logical thinking, problem-solving, writing code in languages like Python and Java, and understanding algorithms and data structures. It also develops teamwork, use of development tools, and the ability to build real-world applications and software."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-6">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              id={skill.id}
              heading={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </Section>
      <Section
        className="bg-background"
        Heading="FAQs"
        description="Still you have any questions? Contact our Team via support@skillbridge.com"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <Faq
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </Accordion>
      </Section>
    </div>
  );
};

export default Home;
