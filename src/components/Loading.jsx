import React from "react";

const Loading = () => {
  return (
    <div className="w-screen h-screen mx-auto flex items-center justify-center">
      <img
        src="/src/assets/img/loading.gif"
        alt="Loading"
        className="w-1/2 h-1/2"
      />
    </div>
  );
};

export default Loading;
