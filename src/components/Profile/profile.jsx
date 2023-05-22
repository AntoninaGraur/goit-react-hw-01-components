import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar,
  stats: { followers, views, likes }
}) => {
  return (
    <div className="profile">
  <div className="description">
    <img src={avatar} alt="User avatar" className="avatar"/>
    <p className={username}>Petra Marica</p>
    <p classNameName={tag}>@pmarica</p>
    <p className={location}>Salvador, Brasil</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
          <span className="quantity">{views }</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
</div>
  );
};

// UserItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   avatarUrl: PropTypes.string.isRequired,
//   address: PropTypes.shape({
//     street: PropTypes.string,
//     city: PropTypes.string,
//     geo: PropTypes.objectOf(PropTypes.string),
//   }),
// };
