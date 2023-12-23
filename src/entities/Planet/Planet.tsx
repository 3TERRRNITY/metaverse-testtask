import { TimeCircle } from "../../shared";
import FramerMagnetic from "../../shared/ui/FramerMagnietic/FramerMagnetic";
import { Circle, PlanetImage } from "./PlanetStyles";

interface IPlanet {
  walletInfo?: boolean;
}

const Planet = ({ walletInfo }: IPlanet) => {
  return (
    <Circle className="large-circle">
      <Circle className="big-circle">
        <Circle className="time-circle">
          <TimeCircle />

          <Circle className={walletInfo ? "" : "time-circle-text"}>
            <Circle className="time-circle-duplicate">
              <Circle className="medium-circle">
                <Circle className="small-circle">
                  <Circle className="smallest-circle">
                    <FramerMagnetic>
                      <PlanetImage src="/planet.png" alt="planet" />
                    </FramerMagnetic>
                  </Circle>
                </Circle>
              </Circle>
            </Circle>
          </Circle>
        </Circle>
      </Circle>
    </Circle>
  );
};

export default Planet;
