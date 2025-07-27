import { CheckCircle } from "lucide-react";
import code from "../assets/code.jpg";

const checklistItems = [
  {
    id: 1,
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    id: 2,
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    id: 3,
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    id: 4,
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          code workflow.
        </span>
      </h2>

      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={code} alt="Code" />
        </div>

        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item) => (
            <div key={item.id} className="flex mb-12">
              <div
                className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full
"
              >
                <CheckCircle />
              </div>

              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
