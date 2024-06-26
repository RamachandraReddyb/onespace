import React from "react";
import { Link } from "react-router-dom";
import { PROJECT_ROUTES } from "../assests/routes";

const Projects = () => {
  return (
    <div class="grid grid-cols-4 gap-4">
      {PROJECT_ROUTES.map((route) => {
        return (
          <Link to={`/projects/${route.link}`}>
            <div
              key={route.id}
              className="p-4 rounded-lg shadow-lg bg-blue-500 text-white font-bold cursor-pointer"
            >
              {route.title}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Projects;
