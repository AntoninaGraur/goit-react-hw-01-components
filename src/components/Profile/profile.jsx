import PropTypes from 'prop-types';
import {
  ProfileWraper,
  DescriptionWraper,
  ImgAvatar,
  DiscriptionText,
  Socials,
  SocialsList,
  FollowersLabel,
  FollowersQuantity
} from '../../components/Profile/profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileWraper>
      <DescriptionWraper>
        <ImgAvatar src={avatar} alt="User avatar" />
        <DiscriptionText> {username} </DiscriptionText>
        <DiscriptionText> {tag} </DiscriptionText>
        <DiscriptionText>{location}</DiscriptionText>
      </DescriptionWraper>

      <Socials>
        <SocialsList>
          <FollowersLabel>Followers:</FollowersLabel>
          <FollowersQuantity>{followers}</FollowersQuantity>
        </SocialsList>
        <SocialsList>
          <FollowersLabel>Views:</FollowersLabel>
          <FollowersQuantity>{views}</FollowersQuantity>
        </SocialsList>
        <SocialsList>
          <FollowersLabel>Likes:</FollowersLabel>
          <FollowersQuantity>{likes}</FollowersQuantity>
        </SocialsList>
      </Socials>
    </ProfileWraper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.objectOf(PropTypes.string),
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
