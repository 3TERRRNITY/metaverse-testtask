import { Planet } from "../../entities";
import { useMemo } from "react";
import {
  HeroContainer,
  HeroDescription,
  HeroPlanet,
  HeroText,
  RoadmapStats,
  RoadmapStatsContainer,
  RoadmapStatsFigure,
  RoadmapStatsInformation,
  RoadmapStatsText,
  RoadmapStatsTitle,
  TransparentText,
} from "./MainPageHeroStyles";

const MainPageHero = () => {
  // массив данных для дорожной карты
  const ROADMAP_STATS = useMemo(
    () => [
      {
        figures: "12,345",
        text: "Lorem ipsum dolor",
      },
      {
        figures: "12,345",
        text: "Lorem ipsum dolor",
      },
      {
        figures: "12,345",
        text: "Lorem ipsum dolor",
      },
    ],
    []
  );

  return (
    <HeroContainer>
      <HeroText className="title">
        Explore Your own planet <br /> In{" "}
        <TransparentText>our New</TransparentText> metaverse
      </HeroText>
      <HeroDescription className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </HeroDescription>
      {/* Контейнер для выравнивания созданного компонента планеты */}
      <HeroPlanet>
        <Planet />
      </HeroPlanet>
      <RoadmapStats>
        <RoadmapStatsTitle className="title">Roadmap stats</RoadmapStatsTitle>
        <RoadmapStatsContainer className="title">
          {ROADMAP_STATS.map(({ figures, text }, index) => (
            <RoadmapStatsInformation key={`roadmap-${index}`}>
              <RoadmapStatsFigure className="orange">
                {figures}
              </RoadmapStatsFigure>
              <RoadmapStatsText>{text}</RoadmapStatsText>
            </RoadmapStatsInformation>
          ))}
        </RoadmapStatsContainer>
      </RoadmapStats>
    </HeroContainer>
  );
};

export default MainPageHero;
