import React from "react";

function Title({ component }: { component: string }) {
  return (
    <>
      <h1 className="text-center text-4xl font-semibold bg-black text-white mt-5 p-4">
        <span className="font-bold" style={{ color: "#0FC3AA" }}>
          Chakra UI -{" "}
        </span>{" "}
        {component}
      </h1>
    </>
  );
}

export default Title;
