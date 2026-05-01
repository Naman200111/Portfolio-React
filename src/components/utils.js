import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";


export const SkillComponent = (props) => {
  const { skill, icon: Icon } = props;
  return (
    <div className="group relative flex items-center gap-4 p-5 bg-zinc-900/40 backdrop-blur-md border border-emerald-900/20 rounded-2xl hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-500">
      <div className="p-3 bg-emerald-950/30 rounded-xl text-emerald-400 text-3xl group-hover:scale-110 group-hover:text-emerald-300 transition-all duration-500 shadow-inner">
        {Icon && <Icon />}
      </div>

      <div className="flex flex-col">
        <p className="text-gray-200 font-bold tracking-tight group-hover:text-white transition-colors">{skill}</p>
        <div className="flex items-center gap-1 mt-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 group-hover:bg-emerald-400 group-hover:animate-pulse"></div>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium group-hover:text-emerald-500/70 transition-colors">Technology</span>
        </div>
      </div>

      {/* Abstract background decoration */}
      <div className="absolute top-2 right-3 text-[40px] text-emerald-500/5 select-none pointer-events-none group-hover:text-emerald-500/10 transition-colors">
        {Icon && <Icon />}
      </div>
    </div>
  );
};

export const ProjectComponent = (props) => {
  const {
    projectName,
    projectDuration,
    projectDescription,
    projectGithubLink,
    projectLiveLink,
    projectTechs,
  } = props;

  return (
    <div className="bg-zinc-900/40 backdrop-blur-md border border-emerald-900/20 rounded-2xl p-6 md:p-8 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all group h-full flex flex-col justify-between">
      <div>
        <div className="flex flex-col gap-1 mb-4">
          <h4 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{projectName}</h4>
          <p className="text-emerald-500/70 text-xs font-mono tracking-tighter">{projectDuration}</p>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">{projectDescription}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {projectTechs.map((tech, index) => (
            <span
              key={index}
              className="bg-emerald-950/40 border border-emerald-900/30 text-emerald-400 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 mt-auto">
        <a
          href={projectGithubLink}
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-white transition-colors text-xl"
          title="GitHub"
        >
          <SiGithub />
        </a>
        {projectLiveLink && (
          <a
            href={projectLiveLink}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-emerald-400 transition-colors text-xl"
            title="Live Demo"
          >
            <BiLinkExternal />
          </a>
        )}
      </div>
    </div>
  );
};
