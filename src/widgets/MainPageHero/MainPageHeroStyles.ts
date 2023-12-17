import styled from "@emotion/styled";

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  margin-top: 35px;
`;

export const HeroText = styled.div`
  font-size: 120px;
  font-weight: 700;
  line-height: 144px;
  text-transform: uppercase;
  grid-column: 1/11;
  grid-row: 1;
  align-self: center;
  z-index: 2;
  pointer-events: none;
`;

export const HeroDescription = styled.div`
  grid-column: 1/5;
  grid-row: 1;
  align-self: end;
  font-size: 16px;
  line-height: 19.2px;
`;

export const TransparentText = styled.div`
  display: inline-block;
  color: transparent;
  -webkit-text-stroke: 0.5px #ffffff;
`;

export const HeroPlanet = styled.div`
  grid-column: 5/11;
  grid-row: 1;
  z-index: 0;
`;

export const RoadmapStats = styled.div`
  grid-column: 11/13;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  align-self: center;
`;
export const RoadmapStatsTitle = styled.div`
  font-size: 32px;
  line-height: 38.4px;
  text-align: center;
  padding-bottom: 42px;
`;

export const RoadmapStatsContainer = styled.div``;

export const RoadmapStatsInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 12px;
  width: 100%;

  padding: 8px 0;
  border-bottom: 0.5px solid #d2c4c4;

  &:last-of-type {
    border: none;
  }
`;

export const RoadmapStatsFigure = styled.div`
  font-size: 28px;
  line-height: 33.6px;
  font-weight: 700;
`;

export const RoadmapStatsText = styled.div`
  font-size: 18px;
  line-height: 21.6px;
`;
