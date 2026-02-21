import ProjectCard from "./ui/project-card";

const Projects = () => {
  return (
    <div id="projects" className="pt-24">
      <h3 className="text-xl font-semibold mb-2">Projects</h3>
      <div className="flex flex-col gap-3">
        <ProjectCard
          name="Google Meet Clone"
          url="https://google-meet-clone-silk.vercel.app/"
          techStack={[
            "NextJS",
            "TypeScript",
            "Express",
            "SocketIO",
            "WebRTC",
            "TailwindCSS",
          ]}
          desription="A real-time video conferencing application that enables users to create and join virtual meeting rooms with smooth audio and video communication. Designed to deliver a clean, responsive experience with low-latency interaction and reliable peer-to-peer connectivity."
          githubUrl="https://github.com/merlin9900/google-meet-clone"
        />
        <ProjectCard
          name="Podcast Platform"
          url="https://podcast-platform-react-pp.netlify.app/"
          techStack={["ReactJS", "TailwindCSS", "Google Firebase"]}
          desription="A podcast platform where users can upload, stream, and manage audio content through a clean and intuitive interface. Includes secure user authentication and cloud-based file storage, enabling seamless access and reliable media management."
          githubUrl="https://github.com/merlin9900/podcast-platform"
        />
      </div>
    </div>
  );
};

export default Projects;
