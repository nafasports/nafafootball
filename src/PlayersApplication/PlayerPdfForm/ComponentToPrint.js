import React from "react";
import nssfl3 from "../../assets/images/nssfl3.jpg";
import nssfl4 from "../../assets/images/nssfl4.jpg";
export const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>
        <img src={nssfl3} style={{ objectFit: "contain", width: "90%" }} />
        <img src={nssfl4} style={{ objectFit: "contain", width: "90%" }} />
      </div>
    </div>
  );
});
