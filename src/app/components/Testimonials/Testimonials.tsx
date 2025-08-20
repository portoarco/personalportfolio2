"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Naru Tobi",
    pictureUrl: "/profile/profile1.jpg",
    jobs: "Software Engineer",
    rating: 5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, incidunt soluta. Rem aliquam maiores quis iste modi dignissimos ipsum quae.",
  },
  {
    id: 2,
    name: "Hinata",
    pictureUrl: "/profile/profile2.jpg",
    jobs: "Software Engineer",
    rating: 4,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, incidunt soluta. Rem aliquam maiores quis iste modi dignissimos ipsum quae.",
  },
  {
    id: 3,
    name: "Upin",
    pictureUrl: "/profile/profile3.jpg",
    jobs: "Software Engineer",
    rating: 5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, incidunt soluta. Rem aliquam maiores quis iste modi dignissimos ipsum quae.",
  },
  {
    id: 4,
    name: "Ipin",
    pictureUrl: "/profile/profile1.jpg",
    jobs: "Software Engineer",
    rating: 5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, incidunt soluta. Rem aliquam maiores quis iste modi dignissimos ipsum quae.",
  },
];

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);

  // auto slide testimonials
  useEffect(() => {
    if (!api || isPaused) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [api, isPaused]);

  // render stars automatically
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 transition-all duration-300 ${
          i < rating
            ? "fill-yellow-400 text-yellow-400 drop-shadow-sm"
            : "fill-gray-700 text-gray-700"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="">
      {/* Header */}
      <h1 className="mt-20 text-center text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mb-4 ">
        Testimonials
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
      {/* Content */}
      <Carousel
        className="xl:w-[90vw] md:mx-15  mt-10 cursor-pointer "
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <CarouselContent>
          {testimonials.map((testi) => (
            <CarouselItem
              key={testi.id}
              className="md:basis-1/2 xl:basis-1/3  xl:my-10 mx-5 "
            >
              <Card
                className=" w-full h-full
              bg-white backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 group  transform hover:-translate-y-2 hover:scale-[1.02]"
              >
                <Quote className="absolute right-7 size-7 lg:size-20 text-orange-500/50 group-hover:text-orange-500/90 transition-colors duration-400 ease-in-out"></Quote>
                <CardContent>
                  <div id="header" className="flex gap-x-3 items-center">
                    <div id="avatar">
                      <Avatar className="size-15 border-4 group-hover:border-2 border-orange-500/40 group-hover:border-orange-400 group-hover:shadow-lg group-hover:shadow-orange-500/30 transition-all duration-300 group-hover:scale-110">
                        <AvatarImage src={testi.pictureUrl}></AvatarImage>
                        <AvatarFallback>ID</AvatarFallback>
                      </Avatar>
                    </div>
                    <div id="profile">
                      <p className="text-lg xl:text-2xl font-semibold group-hover:text-orange-500 transition-colors duration-600 ease-in-out">
                        {testi.name}
                      </p>
                      <p className="text-sm xl:text-lg text-gray-500">
                        {testi.jobs}
                      </p>
                      <div className="flex w-20 xl:w-full ">
                        {renderStars(testi.rating)}
                      </div>
                    </div>
                  </div>
                  <div
                    id="testi"
                    className="text-xs md:text-sm lg:text-justify  xl:text-lg text-center mt-5 italic text-gray-600"
                  >
                    <p>" {testi.content} "</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="max-md:hidden cursor-pointer" />
        <CarouselNext className="max-md:hidden cursor-pointer" />
      </Carousel>
    </section>
  );
}
