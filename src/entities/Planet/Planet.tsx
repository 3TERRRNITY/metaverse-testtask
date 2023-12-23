import { TimeCircle } from "../../shared";
import FramerMagnetic from "../../shared/ui/FramerMagnietic/FramerMagnetic";
import { IPlanet } from "../api/types";
import { Circle, PlanetImage } from "./PlanetStyles";

const Planet = ({ walletInfo }: IPlanet) => {
  return (
    // Все className лежат в app/styles/styles.scss
    <Circle className="large-circle">
      <Circle className="big-circle">
        <Circle className="time-circle">
          <TimeCircle />
          {/* Включение/выключение надписи на временном круге */}
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
