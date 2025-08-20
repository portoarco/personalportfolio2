import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Brush, Code, Database, Globe, Palette } from "lucide-react";
import Image from "next/image";

const skillCard = [
  {
    id: 1,
    cardIcon: <Code className="w-8 h-8 text-white" />,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient:
      "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
    title: "Front End Skills",
    description:
      "Building responsive, interactive user interfaces with modern frameworks and cutting-edge technologies.",
    skillIcon: [
      "/techicons/html.svg",
      "/techicons/css.svg",
      "/techicons/javascript.svg",
      "/techicons/typescript.svg",
      "/techicons/tailwind.svg",
      "/techicons/nextjs.svg",
      "/techicons/react.svg",
      "/techicons/redux.svg",
      "/techicons/zustand.svg",
    ],
  },
  {
    id: 2,
    cardIcon: <Database className="w-8 h-8 text-white" />,
    gradient: "from-green-500 to-emerald-500",
    bgGradient:
      "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
    title: "Back End Skills",
    description:
      "Creating robust server-side applications with scalable architectures and efficient database management.",
    skillIcon: [
      "/techicons/node.svg",
      "/techicons/express.svg",
      "/techicons/postgre.svg",

      "/techicons/prisma.svg",
    ],
  },
  {
    id: 3,
    cardIcon: <Globe className="w-8 h-8 text-white" />,
    gradient: "from-purple-500 to-pink-500",
    bgGradient:
      "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
    title: "Dev Ops Skills",
    description:
      "Streamlining development workflows with modern tools, version control, and deployment strategies.",
    skillIcon: [
      "/techicons/vscode.svg",
      "/techicons/github.svg",
      "/techicons/Jest.svg",
      "/techicons/postman.svg",
      "/techicons/Docker.svg",
      "/techicons/Jira.svg",
      "/techicons/miro.svg",
    ],
  },
  {
    id: 4,
    cardIcon: <Palette className="w-8 h-8 text-white" />,
    gradient: "from-orange-500 to-red-500",
    bgGradient:
      "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
    title: "UI/UX Skills",
    description:
      "Crafting intuitive user experiences with modern design principles and professional design tools.",
    skillIcon: ["/techicons/Figma.svg", "/techicons/Canva.svg"],
  },
];

export default function Skills() {
  return (
    <div>
      <h1 className="mt-20 text-center text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mb-4 ">
        Technical Skills
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
      <p className=" text-white text-center">
        A comprehensive toolkit of modern technologies and frameworks for
        building exceptional digital experiences
      </p>
      <div className="mt-10 grid max-sm:grid-cols-1   max-xl:grid-cols-2 grid-cols-4 gap-x-5 gap-y-5">
        {skillCard.map((skill) => (
          <Card
            key={skill.id}
            className={`${skill.bgGradient} hover:scale-102 hover:border hover:border-orange-500 transition-all duration-300 ease-in-out cursor-pointer`}
          >
            <CardHeader className="flex gap-x-3 items-center">
              <div
                id="icon-badge"
                className={`w-14 h-14 bg-gradient-to-br ${skill.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
              >
                {skill.cardIcon}
              </div>
              <div id="title">
                <CardTitle className="md:text-xl font-bold">
                  {skill.title}
                </CardTitle>
                <Badge className="text-xs bg-orange-400 text-white border-orange-300 ">
                  <span className="font-bold">{skill.skillIcon.length}</span>{" "}
                  Technologies
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center text-sm xl:text-lg  lg:text-start">
                {skill.description}
              </p>
              <div
                id="skill-icon"
                className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-5 "
              >
                {skill.skillIcon.map((icon, index) => (
                  <div
                    className=" w-full h-15 flex items-center justify-center shadow-md rounded-md p-3 md:p-4 lg:p-5 xl:p-2  bg-white "
                    key={index}
                  >
                    <Image
                      key={index}
                      src={icon}
                      width={50}
                      height={50}
                      alt="skill-icon"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
