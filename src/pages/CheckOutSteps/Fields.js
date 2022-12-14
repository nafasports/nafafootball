import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import CheckOutSteps from "./CheckOutSteps";

const Fields = () => {
  return (
    <div>
      <div>
        <CheckOutSteps step1 step2 step3 step4 />
      </div>
      <Container>
        <div style={{ marginTop: "30px", marginBottom: "30px" }}>
          <h5>
            The field measures 100 yards long and 53 yards wide. The field has
            white markings called yard markers help the players, officials, and
            the fans keep track of the ball.
          </h5>

          <p>
            These Yard lines cross the field every 5 yards, and are numbered
            from each goal line to the 50-yard line, or midfield (similar to a
            typical rugby league field). Two rows of lines, known as inbounds
            lines or hash marks, parallel the side lines near the middle of the
            field. All plays start with the ball on or between the hash marks.
          </p>

          <p>
            Probably the most important part of the field is the end zone. It’s
            an additional 10 yards on each end of the field.
          </p>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Fields;
