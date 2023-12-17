import { Planet } from "../../entities";
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
  const ROADMAPSTATS = [
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
  ];
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

      <HeroPlanet>
        <Planet />
      </HeroPlanet>
      <RoadmapStats>
        <RoadmapStatsTitle className="title">Roadmap stats</RoadmapStatsTitle>
        <RoadmapStatsContainer className="title">
          {ROADMAPSTATS.map(
            ({ figures, text }: { figures: string; text: string }, index) => (
              <RoadmapStatsInformation key={`roadmap-${index}`}>
                <RoadmapStatsFigure className="orange">
                  {figures}
                </RoadmapStatsFigure>
                <RoadmapStatsText>{text}</RoadmapStatsText>
              </RoadmapStatsInformation>
            )
          )}
        </RoadmapStatsContainer>
      </RoadmapStats>
    </HeroContainer>
  );
};

export default MainPageHero;
