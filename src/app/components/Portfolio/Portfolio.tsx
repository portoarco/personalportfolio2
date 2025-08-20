import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const portfolioCard = [
  {
    id: 1,
    pictureSrc: "/portfolio/personalwebsite.png",
    title: "Personal Website",
    tools: [
      {
        src: "/techicons/nextjs.svg",
        name: "NextJS",
      },
      {
        src: "/techicons/typescript.svg",
        name: "Typescript",
      },
      {
        src: "/techicons/tailwind.svg",
        name: "Tailwind CSS",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio culpa non totam dolorem ipsa, soluta error! Perferendis ipsum voluptas id. ",
    projectUrl: "https://front-end-personal-portfolio.vercel.app/",
    repoUrl: "https://github.com/portoarco/FrontEnd_PersonalPortfolio",
  },
  {
    id: 2,
    pictureSrc: "/portfolio/rexcompro.png",
    title: "REX Indonesia Logistic",
    tools: [
      {
        src: "/techicons/nextjs.svg",
        name: "NextJS",
      },
      {
        src: "/techicons/typescript.svg",
        name: "Typescript",
      },
      {
        src: "/techicons/tailwind.svg",
        name: "Tailwind CSS",
      },
      {
        src: "/techicons/node.svg",
        name: "Node JS",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio culpa non totam dolorem ipsa, soluta error! Perferendis ipsum voluptas id.",
    projectUrl: "https://front-end-redesign-project.vercel.app/",
    repoUrl: "https://github.com/portoarco/FrontEnd-Redesign_Project",
  },
  {
    id: 3,
    pictureSrc: "/portfolio/sunnysideld.png",
    title: "Sunnyside  FrontEnd Mentor",
    tools: [
      {
        src: "/techicons/react.svg",
        name: "ReactJS",
      },
      {
        src: "/techicons/tailwind.svg",
        name: "Tailwind",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio culpa non totam dolorem ipsa, soluta error! Perferendis ipsum voluptas id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio culpa non totam dolorem ipsa, soluta error! Perferendis ipsum voluptas idLorem ipsum dolor sit amet consectetur adipisicing elit.",
    projectUrl: "https://sunnyside-landingpage-sepia.vercel.app/",
    repoUrl: "https://github.com/portoarco/landing-page-frontendmentor",
  },
  {
    id: 4,
    pictureSrc: "/portfolio/blogapp.png",
    title: "Simple CRUD Blog App",
    tools: [
      {
        src: "/techicons/nextjs.svg",
        name: "NextJS",
      },
      {
        src: "/techicons/typescript.svg",
        name: "Typescript",
      },
      {
        src: "/techicons/tailwind.svg",
        name: "Tailwind CSS",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio culpa non totam dolorem ipsa, soluta error! Perferendis ipsum voluptas id.",
    projectUrl: "https://front-end-blog-app-steel.vercel.app/",
    repoUrl: "https://github.com/portoarco/FrontEnd-BlogApp",
  },
  {
    id: 5,
    pictureSrc: "/portfolio/minpro.png",
    title: "Event Ticketing Management",
    tools: [
      {
        src: "/techicons/nextjs.svg",
        name: "NextJS",
      },
      {
        src: "/techicons/typescript.svg",
        name: "Typescript",
      },
      {
        src: "/techicons/tailwind.svg",
        name: "Tailwind CSS",
      },
      {
        src: "/techicons/zustand.svg",
        name: "Zustand",
      },
      {
        src: "/techicons/express.svg",
        name: "Express JS",
      },
      {
        src: "/techicons/postgre.svg",
        name: "PostgreSQL",
      },
      {
        src: "/techicons/prisma.svg",
        name: "Prisma ORM",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio culpa non totam dolorem ipsa, soluta error! Perferendis ipsum voluptas id.",
    projectUrl: "https://ticketing-minpro.vercel.app/",
    repoUrl: "https://github.com/portoarco/ticketing-minpro",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="mt-30 max-md:mt-10">
      <div
        id="portfolio-header"
        className="flex max-lg:flex-col justify-between items-center"
      >
        <div>
          <h2 className="text-2xl text-center md:text-start md:text-4xl  lg:text-6xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xs text-center md:text-start md:text-xl text-gray-200  leading-relaxed">
            A showcase of my recent work and technical expertise in modern web
            development
          </p>
        </div>
      </div>
      <div id="portfolio-card" className="mt-5">
        <Carousel className="md:mx-10" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {portfolioCard.map((card) => (
              <CarouselItem key={card.id} className="xl:basis-1/3">
                <Card
                  key={card.id}
                  className="relative bg-white/12 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group overflow-hidden backdrop-blur-sm cursor-pointer h-full "
                >
                  <CardContent className="p-0">
                    <div
                      id="picture"
                      className="w-full   max-sm:h-32 h-64 relative top-0 overflow-hidden brightness-75 hover:brightness-90  transition-transform duration-500 ease-in-out"
                    >
                      <Image
                        src={card.pictureSrc || "/placeholder.svg"}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <Link href={card.projectUrl}>
                          <Button
                            size="sm"
                            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0 rounded-full p-2 cursor-pointer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Link href={card.repoUrl}>
                          <Button
                            size="sm"
                            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0 rounded-full p-2 cursor-pointer"
                          >
                            <Github className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div id="description" className="p-6 space-y-4">
                      <h3 className="max-sm:text-xl max-sm:text-center text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {card.title}
                      </h3>

                      <div className="flex flex-wrap gap-2 max-md:justify-center">
                        {card.tools.map((tool, index) => (
                          <Badge
                            key={index}
                            className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border border-orange-500/30 hover:from-orange-500/30 hover:to-red-500/30 transition-all duration-200 text-sm p-2 "
                          >
                            <Avatar className="">
                              <AvatarImage
                                src={tool.src}
                                className=""
                              ></AvatarImage>
                            </Avatar>
                            <p className="max-sm:hidden ">{tool.name}</p>
                          </Badge>
                        ))}
                      </div>

                      <div>
                        <p className="text-gray-300 pb-5 leading-relaxed text-lg max-md:text-xs max-sm:text-center">
                          {card.description}
                        </p>
                      </div>

                      <div className="absolute  bottom-4 w-[90%] flex max-sm:flex-col gap-3 pt-4">
                        <Link
                          href={card.projectUrl}
                          target="blank"
                          className="w-full"
                        >
                          <Button className="w-[100%] bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 cursor-pointer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Button>
                        </Link>

                        <Link href={card.repoUrl} target="blank" className="">
                          <Button
                            variant="outline"
                            className="cursor-pointer border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white bg-transparent w-full"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="max-md:hidden" />
          <CarouselNext className="max-md:hidden" />
        </Carousel>
      </div>
    </section>
  );
}
