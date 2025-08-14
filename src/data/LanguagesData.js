import React from "react";

let languagesData = [
  [
    {
      name: "HTML5",
      icon: <img src={process.env.PUBLIC_URL + "/icons/html.svg"} alt="html" className="lang__icon" />,
    },
    {
      name: "CSS3",
      icon: <img src={process.env.PUBLIC_URL + "/icons/css.svg"} alt="css" className="lang__icon" />,
    },
    {
      name: "Bootstrap",
      icon: (
        <img
          src={process.env.PUBLIC_URL + "/icons/bootstrap.svg"}
          alt="bootstrap"
          className="lang__icon"
        />
      ),
    },
    {
      name: "Sass",
      icon: <img src={process.env.PUBLIC_URL + "/icons/sass.svg"} alt="sass" className="lang__icon" />,
    },
    {
      name: "TailwindCSS",
      icon: (
        <img
          src={process.env.PUBLIC_URL + "/icons/tailwindcss.svg"}
          alt="tailwindcss"
          className="lang__icon"
        />
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <img
          src={process.env.PUBLIC_URL + "/icons/javascript.svg"}
          alt="javascript"
          className="lang__icon"
        />
      ),
    },
    {
      name: "Typescript",
      icon: (
        <img
          src={process.env.PUBLIC_URL + "/icons/typescript.svg"}
          alt="typescript"
          className="lang__icon"
        />
      ),
    },
    {
      name: "jQuery",
      icon: <img src={process.env.PUBLIC_URL + "/icons/jquery.svg"} alt="jquery" className="lang__icon" />,
    },
    {
      name: "React",
      icon: <img src={process.env.PUBLIC_URL + "/icons/react.svg"} alt="react" className="lang__icon" />,
    },
    {
      name: "Node.js",
      icon: <img src={process.env.PUBLIC_URL + "/icons/node.svg"} alt="node" className="lang__icon" />,
    },
    {
      name: "Express",
      icon: (
        <img src={process.env.PUBLIC_URL + "/icons/express.svg"} alt="express" className="lang__icon" />
      ),
    },
    {
      name: "MongoDb",
      icon: <img src={process.env.PUBLIC_URL + "/icons/mongo.svg"} alt="mongo" className="lang__icon" />,
    },
    {
      name: "Jest",
      icon: <img src={process.env.PUBLIC_URL + "/icons/jest.svg"} alt="jest" className="lang__icon" />,
    },
    {
      name: "Heroku",
      icon: <img src={process.env.PUBLIC_URL + "/icons/heroku.svg"} alt="heroku" className="lang__icon" />,
    },
    {
      name: "Git",
      icon: <img src={process.env.PUBLIC_URL + "/icons/git.svg"} alt="git" className="lang__icon" />,
    },
    {
      name: "Styled-Components",
      icon: (
        <img
          src={process.env.PUBLIC_URL + "/icons/styled-components.png"}
          alt="styled-components"
          className="lang__icon"
        />
      ),
    },
  ],
  [
    {
      name: "Python",
      icon: <img src={process.env.PUBLIC_URL + "/icons/python.svg"} alt="python" className="lang__icon" />,
    },
    {
      name: "PostgreSQL",
      icon: (
        <img
          src={process.env.PUBLIC_URL + "/icons/postgresql.svg"}
          alt="postgresql"
          className="lang__icon"
        />
      ),
    },
    {
      name: "Django",
      icon: <img src={process.env.PUBLIC_URL + "/icons/django.svg"} alt="django" className="lang__icon" />,
    },
    {
      name: "Flask",
      icon: <img src={process.env.PUBLIC_URL + "/icons/flask.svg"} alt="flask" className="lang__icon" />,
    },
    {
      name: "GraphQl",
      icon: (
        <img src={process.env.PUBLIC_URL + "/icons/graphql.svg"} alt="graphql" className="lang__icon" />
      ),
    },
    {
      name: "Apollo",
      icon: <img src={process.env.PUBLIC_URL + "/icons/apollo.svg"} alt="apollo" className="lang__icon" />,
    },
    {
      name: "Redux",
      icon: <img src={process.env.PUBLIC_URL + "/icons/redux.svg"} alt="redux" className="lang__icon" />,
    },
    {
      name: "MaterialUI",
      icon: (
        <img
          src={process.env.PUBLIC_URL + "/icons/materialui.svg"}
          alt="material ui"
          className="lang__icon"
        />
      ),
    },
    {
      name: "Webpack",
      icon: (
        <img src={process.env.PUBLIC_URL + "/icons/webpack.svg"} alt="webpack" className="lang__icon" />
      ),
    },
    {
      name: "Amazon Web Services",
      icon: <img src={process.env.PUBLIC_URL + "/icons/aws.svg"} alt="aws" className="lang__icon" />,
    },
    {
      name: "Google Firebase",
      icon: (
        <img src={process.env.PUBLIC_URL + "/icons/firebase.svg"} alt="firebase" className="lang__icon" />
      ),
    },
  ],
];

export default languagesData;
