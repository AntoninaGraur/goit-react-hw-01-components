import styled from '@emotion/styled';

export const StatisticSection = styled.section`
  background-color: aliceblue;
  margin: 0 auto;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StatsTitle = styled.h2`
  color: blueviolet;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #49ff18,
    0 0 30px #49ff18, 0 0 40px #49ff18, 0 0 55px #49ff18, 0 0 75px #49ff18,
    1px -2px 10px rgba(206, 89, 55, 0.35);
  margin-bottom: 15px;
`;
export const StatsList = styled.ul`
  display: flex;
`;
export const StatsItem = styled.li`
  /* margin-right: 10px; */
  flex-direction: column;
  display: flex;
  background-color: ${props => props.color};
  padding: 8px 12px;
`;

export const LabelPdf = styled.span`
  font-size: 19px;

  /* padding: 8px 12px; */
  text-align: center;
`;
export const Percentage = styled.span`
  font-size: 17px;
  text-align: center;
`;
