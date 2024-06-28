import React from "react";

const isUserLoggedIn = false;

function HOC({ Auth }) {
  if (isUserLoggedIn) {
    return <Auth />;
  }
  return "Please login to continue";
}

const Welcome = () => {
  return <div>Welcome user</div>;
};

const DashBoard = () => {
  return <HOC Auth={Welcome} />;
};

export default DashBoard;
