import {
  BatteryCharging,
  BotMessageSquare,
  Fingerprint,
  GlobeLock,
  PlugZap,
  ShieldHalf,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    id: 2,
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    id: 3,
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    id: 4,
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    id: 5,
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    id: 6,
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

const Features = () => {
  return (
    <div className="border-b relative mt-20 min-h-[800px] border-neutral-800">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Features
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent">
            your code
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((item) => (
          <div key={item.id} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {item.icon}
              </div>

              <div>
                <h5 className="text-xl font-semibold mb-6 mt-1">{item.text}</h5>
                <p className="text-neutral-500 text-md p-2 mb-20">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
