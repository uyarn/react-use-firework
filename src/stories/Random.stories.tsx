import React, { useRef } from "react";
import useFireWork from "..";

const Template = () => {
  const ref = useRef(null);
  useFireWork(ref, { randomColor: true });

  return (
    <div
      ref={ref}
      style={{ width: "100%", height: "600px", background: "#000" }}
    ></div>
  );
};

export const Primary = Template.bind({});

export default {
  title: "Example/Random",
};
