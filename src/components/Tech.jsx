import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="mt-6 flex flex-wrap justify-center items-center gap-6">
      {technologies.map((tech, index) => (
        <div className="w-28 h-28" key={index}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
