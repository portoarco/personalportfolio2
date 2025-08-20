import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="mt-10 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-indigo-400 to-cyan-400 text-center mb-4 ">
        About Me
      </h2>
      <div className="w-24 h-1 bg-gradient-to-t from-indigo-400 to-cyan-400 mx-auto rounded-full"></div>
      <div className="flex max-lg:flex-col gap-x-7 items-center justify-around">
        <div className="mt-10 animate-sp p-[1px] rounded-2xl bg-gradient-to-r from-amber-500 to-pink-500">
          <div className="w-50 h-80 md:w-70 md:h-90 relative overflow-hidden  rounded-2xl  ">
            <Image
              src="/icon-arco.webp"
              alt="photo"
              fill
              className="object-cover rounded-2xl p-1"
            ></Image>
          </div>
        </div>
        <div
          id="description"
          className="text-white text-sm lg:text-lg mt-10 lg:w-[75%] text-justify"
        >
          {/* Brief Bio */}
          <p>
            I am a web developer with a strong passion for technology and
            problem-solving. I enjoy building functional and impactful
            applications, from planning to delivering fully realized digital
            products. Currently, I focus on enhancing my skills in both
            front-end and back-end development through personal projects and
            team collaborations.
          </p>
          <br></br>
          {/* Core Skills */}
          <p>
            My technical expertise covers both front-end and back-end
            development, including HTML, CSS, TailwindCSS, JavaScript,
            TypeScript, React.js, Next.js, Redux, Zustand, Node.js, Express.js,
            PostgreSQL, Prisma ORM, Docker, and GitHub. I am committed to
            writing clean, maintainable code and leveraging modern tools to
            deliver efficient, scalable solutions.
          </p>
          <br></br>
          {/* Key Values */}
          <p>
            I believe in delivering work with precision, timeliness, and clear
            communication. Every project I work on is approached with attention
            to detail, ensuring both functionality and visual quality. I value
            collaboration, transparency, and accountability—principles that help
            create smooth workflows and successful project outcomes
          </p>
        </div>
      </div>
    </section>
  );
}
