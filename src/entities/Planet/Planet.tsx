import FramerMagnetic from "../../shared/ui/FramerMagnietic/FramerMagnetic";
import { Circle, PlanetImage } from "./PlanetStyles";

const Planet = () => {
  return (
    <Circle className="large-circle">
      <Circle className="big-circle">
        <Circle className="time-circle">
          <Circle className="time-circle-duplicate">
            <Circle className="medium-circle">
              <Circle className="small-circle">
                <Circle className="smallest-circle">
                  <FramerMagnetic>
                    <PlanetImage src="/public/planet.png" alt="planet" />
                  </FramerMagnetic>
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
