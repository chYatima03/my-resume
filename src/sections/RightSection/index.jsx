import ContentContainer from "../../conponents/ContentContainer";
import About from "../About";
import { data as experienceData } from "../../contents/experience";
import { data as projectData } from "../../contents/project";
import { data as certificationData } from "../../contents/certification";
import { data as trainData } from "../../contents/train";
import Footer from "../Footer";

const RightSection = ({ onInitial }) => {
  return (
    <div className="grid gap-y-14 lg:gap-y-40 px-5">
      <About title="About" onInitial={onInitial} />

      <ContentContainer
        onInitial={onInitial}
        title="Experience"
        data={experienceData}
      />

      <ContentContainer
        onInitial={onInitial}
        title="Project"
        data={projectData}
      />
      <ContentContainer
        onInitial={onInitial}
        title="Train"
        data={trainData}
      />
      <ContentContainer
        onInitial={onInitial}
        title="Certification"
        data={certificationData}
      />

      {/* <ContentContainer
                onInitial={onInitial}
                title="Article"
                data={projectData}
            /> */}

      <Footer />
    </div>
  );
};

export default RightSection;
