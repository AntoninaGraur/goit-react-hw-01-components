import React from 'react';

import {
  StatisticSection,
  StatsTitle,
  StatsList,
  StatsItem,
  LabelPdf,
  Percentage,
} from './statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection>
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id} color={getRandomHexColor()}>
            <LabelPdf>{label}</LabelPdf>
            <Percentage>{percentage}%</Percentage>
          </StatsItem>
        ))}
      </StatsList>
    </StatisticSection>
  );
};

export default Statistics;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, `0`)}`;
}
