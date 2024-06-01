export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I am a committed and hardworking student at the University of Guelph",
      description: "Who am I?",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/gryphon.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Proficient in English and Arabic",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start text-center",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "github.com/alyanany97",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Working as an Undergraduate Research Assistant - Robotics Lab",
      description: "Current Technical Employment: ",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Want to ask questions? Reach out!",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Raspberry pi Room Security System",
      des: "Utilized a camera and motion sensors, providing real-time image and email alerts using Twilio API and Node-Red.",
      img: "/raspberry.svg",
      iconLists: ["/raspberry-pi-svgrepo-com.svg", "/twilio-icon-svgrepo-com.svg","/python-svgrepo-com.svg"],
      link: "https://github.com/alyanany97/Raspberry-pi-Room-Security-System",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Honored to have been awarded the University of Guelph Presidents Scholar, the University's most prestigious award valued at $42,500. The scholarship recognizes academic excellence, leadership, and community service. It has supported my Computer Engineering studies and enabled me to engage in impactful research and extracurricular activities.",
      name: "University of Guelph Presidents Scholar",
      title: "Issued by Dr. Charlotte Yates · May 2023",
    },
    {
      quote:
        "I am proud to hold a certification in CPR/AED/First Aid from the Lifesaving Society Ontario, demonstrating my ability to respond effectively to emergencies, administer immediate care, and potentially save lives. This training has equipped me with crucial skills in life-saving techniques and emergency preparedness, enabling me to confidently assist and support others in critical situations.",
      name: "CPR/AED/First Aid",
      title: "Issued by Lifesaving Society Ontario · Feb 2022",
    },
    {
      quote:
        "I have earned the prestigious International Baccalaureate Diploma, which has equipped me with a rigorous academic foundation, honed critical thinking skills, and provided me with a global perspective, preparing me exceptionally well for higher education and future endeavors.",
      name: "IB Diploma",
      title: "Issued by International Baccalaureate · May 2023",
    },

  ];
  
  export const companies = [
    /*{
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },*/
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Undergraduate Research Assistant - University of Guelph",
      desc: "Developed and trained a YOLOv9 machine learning model using Label Studio and PyTorch, achieving a 95% accuracy rate in detecting ripe strawberries for an automated harvesting robot.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Member Services - YMCA of Three Rivers",
      desc: "Registered and sold memberships to prospective members, increasing sales by 15%, while ensuring a safe and welcoming environment for all members through continuous learning of members needs.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Lifeguard - YMCA of Three Rivers",
      desc: "Completed 5 rigorous first-aid courses and passed comprehensive physical and mental evaluations to achieve registered lifeguard status, enhancing safety and emergency response readiness at the YMCA pool.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Crew Member - Mcdonalds",
      desc: "As a Crew Member at McDonald's, I excelled in delivering exceptional customer service, maintaining high food quality and safety standards, and efficiently managing food preparation, cash handling, and customer interactions, contributing to operational success and developing strong problem-solving, time management, and communication skills.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/alyanany97",
    },
    {
      id: 2,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/aly-anany-425424274/",
    },
  ];