import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tool{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>

      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality.
      </p>

      <div className="flex my-10 justify-center gap-4">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-red-800 py-3 px-4 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="border py-3 px-4 rounded-md">
          Documentation
        </a>
      </div>

      <div className="flex flex-col md:flex-row  items-center justify-center mt-10  ">
        <video
          autoPlay
          muted
          loop
          className="rounded-md w-[90%] md:w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video
        </video>
        <video
          autoPlay
          muted
          loop
          className="rounded-md w-[90%] md:w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
