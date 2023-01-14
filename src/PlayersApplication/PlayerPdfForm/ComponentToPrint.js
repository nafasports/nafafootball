import React from "react";
import nsft1 from "../../assets/images/nsft1.jpg";
import nsft2 from "../../assets/images/nsft2.jpg";
export const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>
        <img src={nsft1} style={{ objectFit: "contain", width: "90%" }} />
        <img src={nsft2} style={{ objectFit: "contain", width: "90%" }} />
      </div>
    </div>
  );
});
