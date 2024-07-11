import NavBar from "@/components/NavBar";
import HeroArea from "@/components/HeroArea";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import SectionSubtitle from "@/components/SectionSubtitle";
import AlignContainer from "@/components/AlignContainer";
import CardContainer from "@/components/CardContainer";
import Cards from "@/components/Cards";
import { Card } from "@/components/Card";

const cardInfo = [
  {
    id: 1,
    icon: "/icons/register.svg",
    title: "Register",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .",
  },
  {
    id: 2,
    icon: "/icons/resume.svg",
    title: "Create a Resume",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .",
  },
  {
    id: 3,
    icon: "/icons/search-folder.svg",
    title: "Find Job",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .",
  },
  {
    id: 4,
    icon: "/icons/apply-job.svg",
    title: "Apply Job",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .",
  },
];

export default function Home() {
  return (
    <>
      <HeroArea />
      <div className="bg-[#FBFBFB] pb-36">
        <AlignContainer>
          <div className="pt-40 ">
            <div className="flex md:flex-row flex-col items-center justify-between ">
              <div className="lg:w-9/12 md:w-[70%] w-full">
                <SectionTitle title="How it works" aligntext="text-start" />
                <SectionSubtitle
                  subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam."
                  aligntext="text-start"
                  padding="md:pr-16"
                />
              </div>
              <div className=" md:block hidden">
                <Button content="Learn More" />
              </div>
            </div>
          </div>
          <CardContainer>
            {cardInfo.map((info) => (
              <Card
                icon={info.icon}
                title={info.title}
                description={info.description}
              />
            ))}
          </CardContainer>
          <div className=" block md:hidden">
            <Button content="Learn More" />
          </div>
          <div className="flex md:flex-row flex-col items-center gap-16 mt-36">
            <div className="md:w-1/2">
              <img src="/images/grey.png" className="w-full" />
            </div>
            <div className="md:w-1/2 flex flex-col md:items-start items-center">
              <SectionTitle
                title="We will help you to become an employee in your dream company"
                aligntext="md:text-left text-center "
              />
              <SectionSubtitle
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam."
                aligntext="md:text-left text-center"
              />
              <Button content="Learn More" />
            </div>
          </div>
        </AlignContainer>
      </div>
    </>
  );
}
