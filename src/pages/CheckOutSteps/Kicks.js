import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import CheckOutSteps from "./CheckOutSteps";

const Kicks = () => {
  return (
    <div>
      <div>
        <CheckOutSteps step1 step2 step3 step4 />
      </div>
      <Container>
        <div style={{ marginTop: "30px", marginBottom: "30px" }}>
          <h5>
            Each half begins with a kickoff. Teams also kick off after scoring
            touchdowns and field goals. The ball is kicked using a kicking tee
            from the team’s own 30-yard line in the NFL or from the 35-yard line
            in college football. The other team’s kick returner tries to catch
            the ball and advance it as far as possible.
          </h5>

          <p>
            Where he is stopped is the point where the offense will begin its
            drive, or series of offensive plays.
          </p>

          <p>
            If the kick returner catches the ball in his own end zone, he can
            either run with the ball, or elect for a touchback by kneeling in
            the end zone, in which case the receiving team then starts its
            offensive drive from its own 20-yard line. A touchback also occurs
            when the kick goes out of the end zone. Punts and turnovers in the
            end zone can also end in touchbacks.
          </p>
          <p>
            After safeties, the team that gave up the 2 points puts the ball
            into play with a punt or placekick from its own 20-yard line.
          </p>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Kicks;
