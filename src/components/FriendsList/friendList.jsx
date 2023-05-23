import React from 'react';

import {FriendsMenu, FriendsMenuItem, ImgAvatarFoto, StatusIndicator, NameText} from './friends.styled'

const FriendList = ({ friends }) => {
  return (
    <FriendsMenu>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </FriendsMenu>
  );
};

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;

  return (
    <FriendsMenuItem isOnline={isOnline}>
      <StatusIndicator isOnline={isOnline}></StatusIndicator>
      <ImgAvatarFoto src={avatar} alt="User avatar"/>
      <NameText>{name}</NameText>
    </FriendsMenuItem>
  );
};

export default FriendList;
