import React, { useRef, useState } from "react";
import NavBar from "@/components/NavBar";
import HeroArea from "@/components/HeroArea";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import SectionSubtitle from "@/components/SectionSubtitle";
import AlignContainer from "@/components/AlignContainer";
import CardContainer from "@/components/CardContainer";
import Cards from "@/components/Cards";
import { Card } from "@/components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const howItWorksInfo = [
  {
    id: 1,
    icon: "/icons/register.svg",
    title: "Register",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 2,
    icon: "/icons/resume.svg",
    title: "Create a Resume",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 3,
    icon: "/icons/search-folder.svg",
    title: "Find Job",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 4,
    icon: "/icons/apply-job.svg",
    title: "Apply Job",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
];

const jobCategoriesInfo = [
  {
    id: 1,
    icon: "/icons/brain.svg",
    title: "Design and Developement",
    description: "350 Job Vacancy",
    backgroundColor:"bg-green",
    padding:"pt-4 pb-8 xs:pr-12"
  },
  {
    id: 2,
    icon: "/icons/graph.svg",
    title: "Accounting and Finance",
    description: "350 Job Vacancy",
    backgroundColor:"bg-white",
    padding:"pt-4 pb-8 xs:pr-12"
  },
  {
    id: 3,
    icon: "/icons/bank.svg",
    title: "Bank Institution",
    description: "350 Job Vacancy",
    backgroundColor:"bg-white",
    padding:"pt-4 pb-8 xs:pr-28"
  },
  {
    id: 4,
    icon: "/icons/clock.svg",
    title: "Product Management",
    description: "350 Job Vacancy",
    backgroundColor:"bg-white",
    padding:"pt-4 pb-8 xs:pr-12"
  },
  {
    id: 5,
    icon: "/icons/loading.svg",
    title: "Customer Support",
    description: "350 Job Vacancy",
    backgroundColor:"bg-white",
    padding:"pt-4 pb-8 xs:pr-20"
  },
];

export default function Home() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <HeroArea />
      <section className="bg-[#fbfbfb] pb-28">
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
                  padding="lg:pr-40"
                />
              </div>
              <div className=" md:block hidden">
                <Button content="Learn More" />
              </div>
            </div>
          </div>
          <CardContainer>
            {howItWorksInfo.map((info) => (
              <Card
                icon={info.icon}
                title={info.title}
                description={info.description}
                backgroundColor="bg-white"
                width="xl:w-1/4 lg:w-[30%]  md:w-2/5 xs:w-[49%] w-[155px]"
              />
            ))}
          </CardContainer>
          <div className=" block md:hidden w-fit mx-auto mt-8">
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
      </section>
      <section className="bg-[#00CC99] bg-opacity-5 py-28">
        <AlignContainer>
          <SectionTitle
            title="Popular Job Categories"
            aligntext="text-center"
          />
          <SectionSubtitle
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam.Lorem ipsum dolor sit amet."
            aligntext="text-center"
            padding="md:px-56"
          />
          <Swiper
            slidesPerView={4}
            // spaceBetween={20}
            loop={true}
            loopedSlides={4}
            navigation={false}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
             
              320: {
                slidesPerView: 3,
                spaceBetween: 130,
              },
              480: {
                slidesPerView: 4,
                spaceBetween: 245,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 200,
              },
              768: {

                spaceBetween: 260,
              },
              1024:{
                slidesPerView:5,
                spaceBetween:260,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 250,
                
              },
            }}
          >
            <CardContainer width="w-[70%]">
              {jobCategoriesInfo.map((info) => (
                <SwiperSlide>
                  <Card
                    icon={info.icon}
                    title={info.title}
                    description={info.description}
                    padding={info.padding}
                    backgroundColor={info.backgroundColor}
                    width="lg:w-[280px] md:w-[240px] xs:w-[220px] w-[140px]"
                    
                  />
                </SwiperSlide>
              ))}
            </CardContainer>
          </Swiper>
          <div className="m-auto block w-fit mt-12">
            <Button content="View More" />
          </div>
        </AlignContainer>
      </section>
      
    </>
  );
}
