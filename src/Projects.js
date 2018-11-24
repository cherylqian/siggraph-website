import React, { Fragment } from "react";

const projects = {
  current: [
    {
      name: "Go Squirrel",
      description:
        "A tiny little squirrel is crossing the street, and there comes a car..."
    },
    {
      name: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ],
  past: [
    {
      name: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

const Project = ({ item }) => {
  return (
    <div className="card col m-3">
      <div className="card-body">
        <h3 className="card-title">{item.name}</h3>
        <p className="card-text">{item.description}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  console.log(projects);
  return (
    <Fragment>
      <h2>Current</h2>
      <div className="row mr-3 ml-3">
        {projects.current.map(item => (
          <Project item={item} key={item.name} />
        ))}
      </div>
      <h2>Past</h2>
      <div className="row mr-3 ml-3">
        {projects.current.map(item => (
          <Project item={item} key={item.name} />
        ))}
      </div>
    </Fragment>
  );
};

export default Projects;
