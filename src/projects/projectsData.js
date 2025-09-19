import projectOne from "../assets/p1.png";
import projectTwo from "../assets/p2.png";
import projectThree from "../assets/p3.png";

const projects = {
  1: {
    title: "Food React App",
    image: projectOne,
    description: (
      <>
        <p>
          Created a recipe app with React where users can search and explore
          different recipes by connecting it to a live API for real-time
          results. Intergrated HTML,CSS and JavaScript to make it responsive and
          user-friendly.
        </p>
      </>
    ),
    github: "https://github.com/Monica-G30/food-react-app",
    demo: "https://food-react-app-vu6v.onrender.com",
  },
  2: {
    title: "Travel project",
    image: projectTwo,
    description: (
      <>
        <p>
          A visually appealing UI with images and travel information,designed to
          inspire visitors. Responsive design so that the site works well across
          screen sizes.
        </p>
      </>
    ),
    github: "https://github.com/Monica-G30/Kenya-travel-project",
    demo: "https://travel-project-hetv.onrender.com",
  },
  3: {
    title: "Travel project",
    image: projectThree,
    description: (
      <>
        <p>
          Developed a web application that generates Swahili poems from user
          prompts. Implemented AI integration with a clean frontend and deployed
          on Render for accessibility.
        </p>
      </>
    ),
    github: "https://github.com/Monica-G30/Swahili-poems-generator",
    demo: "https://swahili-poems-generator.onrender.com",
  },
};

export default projects;
