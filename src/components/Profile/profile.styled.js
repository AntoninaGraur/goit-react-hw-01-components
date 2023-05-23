import styled from '@emotion/styled';

export const ProfileWraper = styled.div`
  margin: 0 auto;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;
export const DescriptionWraper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0dc7e25c;
  align-items: center;
`;

export const ImgAvatar = styled.img`
  width: 230px;
  height: 210px;
`;

export const DiscriptionText = styled.p`
  color: darkblue;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Socials = styled.ul`
  display: flex;
  
  flex-direction: row;
  align-items: center;
`;
export const SocialsList = styled.li`
  background-color: #d59fef87;
  padding: 10px;
`;
export const FollowersLabel = styled.span`
  margin-right: 10px;
  
  font-size: 18px;
`;
export const FollowersQuantity = styled.span`
  font-size: 22px;
`;
