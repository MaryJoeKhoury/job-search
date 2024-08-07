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
import JobCard from "@/components/JobCard";
import FeedbackCard from "@/components/FeedbackCard";
import Footer from "@/components/Footer";
import Shield from "@/components/svgs/Shield";
import Brain from "@/components/svgs/Brain";
import Graph from "@/components/svgs/Graph";
import Bank from "@/components/svgs/Bank";
import Clock from "@/components/svgs/Clock";
import Loading from "@/components/svgs/Loading";
import Register from "@/components/svgs/Register";
import Resume from "@/components/svgs/Resume";
import SearchFolder from "@/components/svgs/SearchFolder";
import ApplyJob from "@/components/svgs/ApplyJob";
import SearchJob from "@/components/svgs/SearchJob";

const howItWorksInfo = [
  {
    id: 1,
    icon: <Register />,
    title: "Register",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 2,
    icon: <Resume />,
    title: "Create a Resume",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 3,
    icon: <SearchJob />,
    title: "Find Job",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 4,
    icon: <ApplyJob />,
    title: "Apply Job",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
];

const jobCategoriesInfo = [
  {
    id: 1,
    icon: <Brain />,
    title: "Design and Developement",
    description: "350 Job Vacancy",
    padding: "pt-4 pb-5 pr-12 pl-0",
  },
  {
    id: 2,
    icon: <Graph />,
    title: "Accounting and Finance",
    description: "350 Job Vacancy",
    padding: "pt-4 pb-5 pr-16 pr-20",
  },
  {
    id: 3,
    icon: <Bank />,
    title: "Bank Institution",
    description: "350 Job Vacancy",
    padding: "pt-4 pb-5 pr-28",
  },
  {
    id: 4,
    icon: <Clock />,
    title: "Product Management",
    description: "350 Job Vacancy",
    padding: "pt-4 pb-5 pr-12",
  },
  {
    id: 5,
    icon: <Loading />,
    title: "Customer Support",
    description: "350 Job Vacancy",
    padding: "pt-4 pb-5 pr-20",
  },
];

const feedbackInfo = [
  {
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex.",
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis."',
    image: "/images/green.png",

    reviewer: "Brown Garcia",
    profession: "Full Stack Developer in XReact Tech",
  },
  {
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex.",
    description: '"WOW"',
    image: "/images/grey.png",

    reviewer: "Mary Joe",
    profession: "Front End Developer in XReact Tech",
  },
  {
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex.",
    description: '"WOW"',
    image: "/images/grey.png",

    reviewer: "Joe",
    profession: "Front End Developer in XReact Tech",
  },
];

const jobInfo = [
  {
    id: 1,
    icon: "/icons/red-logo.svg",
    title: "UI/UX Designer",
    subtitle: "Dimension Studio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet.",
    backgroundColor: "bg-green",
    padding: "pr-2",
  },
  {
    id: 2,
    icon: "/icons/blue-logo.svg",
    title: "Full Stack Developer",
    subtitle: "Alpander",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet.",
    backgroundColor: "bg-white",
    padding: "pr-2",
  },
  {
    id: 3,
    icon: "/icons/green-logo.svg",
    title: "Product Designer",
    subtitle: "XReact Tech",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet.",
    backgroundColor: "bg-white",
    padding: "pr-2",
  },
];

export default function Home() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <HeroArea />
      <section className="bg-[#fbfbfb] pb-20 md:pb-28">
        <AlignContainer>
          <div className="pt-28 md:pt-40">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <div className="w-full md:w-[70%] lg:w-9/12">
                <SectionTitle
                  title="How it works"
                  aligntext="text-start"
                  // fontSize="sm:text-3xl"
                />
                <SectionSubtitle
                  subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam."
                  aligntext="text-start"
                  padding="lg:pr-40"
                />
              </div>
              <div className="hidden md:block">
                <Button
                  content="Learn More"
                  borderColor="border-[#00CC99]"
                  textColor="text-[#00CC99]"
                  fillColor="fill-[#0c9]"
                />
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
                width="xl:w-1/4 lg:w-[30%]  md:w-2/5  w-full"
                paddingWrap="pb-8 pl-8"
                descriptionColor="text-[#8a8a8a]"
              />
            ))}
          </CardContainer>
          <div className="mx-auto mt-8 block w-fit md:hidden">
            <Button
              content="Learn More"
              borderColor="border-[#00CC99]"
              textColor="text-[#00CC99]"
              fillColor="fill-[#0c9]"
            />
          </div>
          <div className="mt-12 flex flex-col items-center gap-16 md:mt-36 md:flex-row">
            <div className="w-fit">
              <img src="/images/grey.png" />
            </div>
            <div className="flex flex-col items-center md:w-3/5 md:items-start">
              <SectionTitle
                title="We will help you to become an employee in your dream company"
                aligntext="md:text-left text-center "
                fontSize="xl:text-4xl md:text-2xl"
              />

              <p
                className={`mb-9 mt-8 text-center font-Poppins text-sm text-[#8A8A8A] md:text-left md:text-lg lg:pr-11`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <Button
                content="Learn More"
                borderColor="border-[#00CC99]"
                textColor="text-[#00CC99]"
                fillColor="fill-[#0c9]"
              />
            </div>
          </div>
        </AlignContainer>
      </section>

      <section className="bg-[#00CC99] bg-opacity-5 py-14 md:py-28">
        <AlignContainer>
          <SectionTitle
            title="Popular Job Categories"
            aligntext="text-center"
            // fontSize="sm:text-3xl"
          />
          {/* <SectionSubtitle
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam.Lorem ipsum dolor sit amet."
            aligntext="text-center"
            padding="xl:px-48"
          /> */}
          <p
            className={`mb-14 mt-8 text-center font-Poppins text-sm text-[#8A8A8A] lg:text-lg xl:px-48`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.Lorem ipsum dolor sit amet.
          </p>
          <Swiper
            // slidesPerView={4}
            // spaceBetween={20}
            loop={true}
            loopedSlides={4}
            navigation={false}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1.3,
                spaceBetween: 14,
              },
              480: {
                slidesPerView: 1.4,
                // spaceBetween: 30,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2.4,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 3.8,
                spaceBetween: 190,
              },
              1280: {
                slidesPerView: 4.8,
                spaceBetween: 190,
              },
            }}
          >
            <CardContainer>
              {jobCategoriesInfo.map((info) => (
                <SwiperSlide>
                  <Card
                    icon={info.icon}
                    title={info.title}
                    description={info.description}
                    padding={info.padding}
                    backgroundColor={info.backgroundColor}
                    paddingWrap="pb-6 lg:pl-8 pl-4"
                    width="lg:w-[270px] md:w-[260px] sm:w-[260px] w-[220px] xs:w-[280px]"
                    hover="hover:bg-green hover:text-white  hover:duration-500"
                    groupHover="group-hover:text-white  group-hover:duration-500"
                    descriptionColor="text-[#888888] font-semibold"
                    // width="w-[280px]"
                  />
                </SwiperSlide>
              ))}
            </CardContainer>
          </Swiper>
          <div className="m-auto mt-12 block w-fit">
            <Button
              content="View More"
              borderColor="border-[#00CC99]"
              textColor="text-[#00CC99]"
              fillColor="fill-[#0c9]"
            />
          </div>
        </AlignContainer>
      </section>

      <section className="text bg-[#FBFBFB] pb-16 pt-20 md:pt-36">
        <AlignContainer>
          <SectionTitle title="Recently Added Jobs" aligntext="text-center" />
          <SectionSubtitle
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam.Lorem ipsum dolor sit amet."
            aligntext="text-center"
            padding="xl:px-48"
            // fontSize="sm:text-3xl"
          />
          <Swiper
            // slidesPerView={4}
            // spaceBetween={20}
            loop={true}
            navigation={false}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1.1,
                // spaceBetween: 130,
              },
              480: {
                slidesPerView: 1.2,
                // spaceBetween: 245,
              },
              640: {
                slidesPerView: 1.2,
                // spaceBetween: 200,
              },
              768: {
                slidesPerView: 2.2,
                // spaceBetween: 260,
              },
              1024: {
                slidesPerView: 2.7,
                // spaceBetween: 260,
              },
              1280: {
                // watchSlidesProgress: true,
                slidesPerView: "2.7",
                shortSwipes: false,
              },
            }}
          >
            <CardContainer>
              {jobInfo.map((info) => (
                <SwiperSlide>
                  <JobCard
                    icon={info.icon}
                    title={info.title}
                    subtitle={info.subtitle}
                    description={info.description}
                    backgroundColor="bg-white"
                    padding={info.padding}
                    width="w-[90%]"
                  />
                </SwiperSlide>
              ))}
            </CardContainer>
          </Swiper>
          <div className="m-auto mt-12 w-fit">
            <Button
              content="View More"
              borderColor="border-[#00CC99]"
              textColor="text-[#00CC99]"
              fillColor="fill-[#0c9]"
            />
          </div>
        </AlignContainer>
      </section>

      <section className="bg-[#fbfbfb] pb-80 pt-8 md:pt-24">
        <AlignContainer>
          <SectionTitle
            title="People's Feedback about JobNow!"
            fontSize="md:text-[2.125rem] sm:text-[1.75rem] "
            aligntext="md:text-left text-center"
          />
          {/* <SectionSubtitle subtitle=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ex." /> */}
          <FeedbackCard
          // subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex."
          // description='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis."'
          // image="/images/green.png"
          // reviewer="Brown Garcia"
          // profession="Full Stack Developer in XReact Tech"
          />
          <FeedbackCard feedbacks={feedbackInfo} />
        </AlignContainer>
      </section>

      <AlignContainer>
        <section className="relative">
          <div className="absolute -top-48 z-10 rounded-[20px] bg-[#003A2C] pb-12 pt-12">
            <h1
              className={`text-center font-Poppins text-2xl font-semibold text-white md:text-4xl lg:text-3xl`}
            >
              Register your CV now!
            </h1>
            <p className="mb-6 mt-6 px-4 text-center font-Poppins text-sm text-[#AAAAAA] xs:px-8 sm:px-20 md:px-28 md:text-lg lg:px-40 xl:px-72">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              eiusmod tempor incididunt ut labore et dolore ex.
            </p>
            <div className="m-auto w-fit">
              <Button
                content="Register Now"
                borderColor="border-white"
                textColor="text-white"
                fillColor="fill-white"
              />
            </div>
          </div>
        </section>
      </AlignContainer>
      <Footer position="relative" />
    </>
  );
}
