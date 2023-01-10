import React from "react";
import nssfl1 from "../../assets/images/nssfl1.jpg";
import nssfl2 from "../../assets/images/nssfl2.jpg";
export const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>
        <img src={nssfl1} style={{ objectFit: "contain", width: "90%" }} />
        <img src={nssfl2} style={{ objectFit: "contain", width: "90%" }} />
      </div>
    </div>
  );
});
