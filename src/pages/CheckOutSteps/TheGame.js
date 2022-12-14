import React from "react";
import { Container } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import Footer from "../../components/Footer/Footer";
import BasicExample from "../../components/navbar/NavBar";
import CheckOutSteps from "./CheckOutSteps";

const TheGame = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div>
        <CheckOutSteps step1 step2 step3 step4 />
      </div>
      <Container>
        <div style={{ marginTop: "30px", marginBottom: "30px" }}>
          <h3>TIMING</h3>
          <p>
            <Typewriter
              words={[
                "  American Football games are divided into four 15-minute quarters, separated by a 12-minute break at half-time. There are also 2-minute breaks at the end of the first and third quarters as teams changeends of the field after every 15 minutes of play. At the end of thefirst and third quarters, the team with the ball retains possessionheading into the following quarter. That is not the case before half-time. The second half starts with a kickoff in the same way as the game began in the first quarter. The clock stops at the end of incomplete passing plays, when a player goes out of bounds, or when a penalty is called. The clock starts again when the ball is re-spotted by an official. ",
              ]}
              typeSpeed={70}
              delaySpeed={1000}
            />
          </p>

          <h3>SUBSTITUTION AND SPECIALISATION</h3>
          <p>
            In American Football, there is unlimited free substitution of
            players; a team can change any number of players in the time between
            plays throughout the game. As a result players have become
            specialised, with each one having a set role. Each team has 3
            separate units: the Offence, those players who are on the field when
            the team has possession of the ball; the Defence, players who line
            up to stop the other team’s Offence; and Special Teams that only
            come in on kicking situations (punts, field goals, and kickoffs).
            Only 11 players are on the field from one team at any one time.
          </p>
          <h3>
            THE AIM OF THE GAME IS TO SCORE MORE POINTS THAN THE OPPOSITION.
          </h3>
          <p>
            Although American Football teams typically have many more players
            than Rugby teams or other sports teams, only 11 players from each
            side are allowed on the field at one time. One team has the ball and
            tries to score, the other team tries to stop them. Advancing the
            ball, scoring and changes of possession are outlined below.
          </p>
          <h3>ADVANCING THE BALL</h3>
          <p>
            Advancing the ball in American Football is similar to the six-tackle
            rule in Rugby League. The team that has possession of the ball (the
            Offence) has four attempts, called downs, to advance the ball 10
            yards towards their opponent’s (the Defence’s) end zone (or into
            it!). When the offense gains 10 yards, it gets a first down, which
            means the team has another set of four downs to gain yet another 10
            yards or score with. If the offense fails to gain a first down (10
            yards) after 4 downs, it loses possession of the ball. The beginning
            of a set of downs (the first play in a “Drive”) is first and ten or
            1-10. If the Offence gains 5 yards on that play, the next play would
            be second and five (showing that the Offence has five yards to go
            for a new first down, not that it has moved five yards). If on that
            play the Offence gained two more yards, it would be third and three
            for the following play. If the Offence had lost yards on second and
            five (a Quarterback getting sacked for 6 yards for example) it would
            be third and eleven. Except at the beginning of halves and after
            scores (when there is a kickoff), the ball is always put into play
            by a snap (where the Centre swiftly moves the ball back through his
            legs into the Quarterback’s hands, the speed of the movement gives
            it the name snap).
          </p>
          <h3>PLAYERS CAN THEN ADVANCE THE BALL IN TWO WAYS:</h3>
          <ul>
            <li style={{ listStyleType: "square" }}>
              By running with the ball, also known as rushing. The Quarterback
              can hand the ball to Running back; this is known as a hand off.
            </li>
            <li style={{ listStyleType: "square" }}>
              By throwing the ball to a teammate, known as a forward pass or as
              passing the football. The forward pass is a key factor
              distinguishing American Football from other football sports. The
              Offence can throw the ball forward only once on a play and only
              from behind the line of scrimmage. The ball can be thrown,
              pitched, or tossed sideways or backwards at any time. This last
              type of pass is known as a lateral (like passing from player to
              player in both codes of Rugby) and is less common.
            </li>
          </ul>
          <h3>WHAT ARE THE KEY RULES ON PASSING PLAYS?</h3>
          <ul>
            <li style={{ listStyleType: "square" }}>
              There may only be one forward pass per play.
            </li>
            <li style={{ listStyleType: "square" }}>
              A Receiver who has been forced off the pitch by a defender cannot
              catch the pass as he runs back onto the field.
            </li>
            <li style={{ listStyleType: "square" }}>
              Receivers must have control of the football and get both feet down
              in the field of play to have completed a catch.
            </li>
            <li style={{ listStyleType: "square" }}>
              Defenders can touch Receivers and tight ends within the first 5
              yards of the line but any contact after that is deemed illegal and
              will result in a penalty.
            </li>
            <li style={{ listStyleType: "square" }}>
              The Quarterback must be behind the line of scrimmage to attempt a
              pass.
            </li>
            <li style={{ listStyleType: "square" }}>
              Team mates are allowed to block opposing defenders to protect the
              Quarterback as he passes down field and to create running room for
              a receiver after he catches the ball
            </li>
          </ul>
          <h3>WHAT ARE THE KEY RULES ON RUNNING PLAYS?</h3>
          <ul>
            <li style={{ listStyleType: "square" }}>
              A running back can complete as many lateral passes (as in rugby)
              as he likes, although this is considered a risky act in the NFL.
            </li>
            <li style={{ listStyleType: "square" }}>
              Team mates are allowed to block opposing defenders to create
              running lanes for a ball carrier, but they cannot block defenders
              in the back or from behind.
            </li>
            <li style={{ listStyleType: "square" }}>
              When a quarterback runs beyond the line of scrimmage it is
              considered a running play and he can no longer throw a forward
              pass.
            </li>
          </ul>
          <h3>
            A DOWN ENDS, AND THE BALL BECOMES “DEAD”, AFTER ANY OF THE
            FOLLOWING:
          </h3>
          <ul>
            <li style={{ listStyleType: "square" }}>
              The player with the ball is forced to the ground (tackled) or has
              his forward progress halted by members of the other team (as
              determined by an official).
            </li>
            <li style={{ listStyleType: "square" }}>
              A forward pass flies out of bounds or touches the ground before it
              is caught. This is known as an <strong>incomplete pass.</strong>{" "}
              The ball is returned to the most recent line of scrimmage for the
              next down.
            </li>
            <li style={{ listStyleType: "square" }}>
              The ball or the player with the ball goes beyond the dimensions of
              the field (out of bounds).
            </li>
            <li style={{ listStyleType: "square" }}>A team scores.</li>
          </ul>
          <p>
            Officials blow a whistle to notify all players that the down is
            over.
          </p>
          <h3>CHANGE OF POSSESSION</h3>
          <h4>
            THE OFFENCE MAINTAINS POSSESSION OF THE BALL UNLESS ONE OF THE
            FOLLOWING THINGS HAPPENS:
          </h4>
          <ul>
            <li style={{ listStyleType: "square" }}>
              The team fails to get a first down i.e., they fail to move the
              ball forward at least 10 yards in four downs. The defensive team
              takes over the ball at the spot where the 4th-down play ends. A
              change of possession in this manner is commonly called a turnover
              on downs.
            </li>
            <li style={{ listStyleType: "square" }}>
              The Offence scores a touchdown or field goal. The team that scored
              then kicks the ball to the other team in a special play called a
              kickoff.
            </li>
            <li style={{ listStyleType: "square" }}>
              The Offence punts the ball to the defense. A punt is a kick in
              which a player drops the ball and kicks it before it hits the
              ground. Punts are nearly always made on fourth down, when the
              offensive team does not want to risk giving up the ball to the
              other team at its current spot on the field (through a failed
              attempt to make a first down) and feels it is too far from the
              other team’s goal posts to attempt a field goal.
            </li>
            <li style={{ listStyleType: "square" }}>
              A defensive player catches a forward pass. This is called an
              interception, and the player who makes the interception can run
              with the ball until he is tackled or forced out of bounds or
              scores.
            </li>
            <li style={{ listStyleType: "square" }}>
              An offensive player drops the ball (a fumble) and a defensive
              player picks it up. As with interceptions, a player recovering a
              fumble can run with the ball until tackled or forced out of
              bounds. Lost fumbles and interceptions are together known as
              turnovers.
            </li>
            <li style={{ listStyleType: "square" }}>
              The offensive team misses a field goal attempt. The defensive team
              gets the ball at the spot where the previous play began (or, in
              the NFL, at the spot of the kick). If the unsuccessful kick was
              attempted from within 20 yards of the end zone, the other team
              gets the ball at its own 20-yard line (that is, 20 yards from the
              end zone).
            </li>
            <li style={{ listStyleType: "square" }}>
              An offensive ball carrier is tackled, forced out of bounds, loses
              the ball out of bounds, or commits certain penalties, in his own
              end zone. This fairly rare occurrence is called a safety.
            </li>
          </ul>
          <h3>SCORING</h3>
          <h4>A TEAM SCORES POINTS BY THE FOLLOWING PLAYS:</h4>
          <ul>
            <li style={{ listStyleType: "square" }}>
              A touchdown (TD) is worth 6 points. It is scored when a player
              runs the ball into or catches a pass in his opponent’s end zone. A
              touchdown is like a try in Rugby with the major difference being
              that a try requires the player to place the ball on the ground,
              whereas in American Football a player simplyhas to have possession
              of the ball in the end zone
            </li>
            <li style={{ listStyleType: "square" }}>
              After a touchdown, the scoring team attempts a conversion (which
              is also like the conversion in Rugby). The ball is placed at the
              other team’s 3-yard line (the 2-yard line in the NFL). The team
              can attempt to kick it over the crossbar and through the goal
              posts in the manner of a field goal for 1 point (an extra point or
              point after touchdown (PAT), or run or pass it into the end zone
              in the manner of touchdown for 2 points (a two-point conversion).
            </li>
            <li style={{ listStyleType: "square" }}>
              A field goal (FG) is worth 3 points, and it is scored by kicking
              the ball over the crossbar and through the goal posts. Field goals
              may be placekicked (kicked when the ball is held vertically
              against the ground by a teammate) or drop-kicked (extremely
              uncommon in the modern game, with only two successes in the last
              60 years). A field goal is usually attempted on fourth down
              instead of a punt when the ball is close to the opponent’s goal
              line, or, when there is little or no time left to otherwise score.
            </li>
            <li style={{ listStyleType: "square" }}>
              A safety is worth 2 points. A safety is scored by the Defence when
              the offensive player in possession of the ball is forced back into
              his own end zone and is tackled there, fumbles the ball out of his
              end zone, has a kick blocked out of his end zone or commits
              certain penalties in his end zone.
            </li>
          </ul>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default TheGame;
