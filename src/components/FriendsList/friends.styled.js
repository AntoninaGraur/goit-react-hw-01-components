import styled from '@emotion/styled';

export const FriendsMenu = styled.ul`
  margin: 0 auto;
  padding: 0 30px 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;

export const FriendsMenuItem = styled.li`
  flex-direction: column;
  display: flex;
  gap: 15px;
  text-align: center;
`;

export const StatusIndicator = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;



export const ImgAvatarFoto = styled.img`
  width: 130px;
  height: 110px;
`;
export const NameText = styled.p`
  color: darkblue;
  font-size: 18px;
  margin-bottom: 10px;
`;