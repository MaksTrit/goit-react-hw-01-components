import PropTypes from 'prop-types';
import {
  StyledAvatar,
  StyledContainer,
  StyledWrapper,
  StyledName,
} from './Profile.styled';
import { StatList } from './ProfileStat/StatList';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledAvatar src={avatar} alt={username} />
        <StyledName>{username}</StyledName>
        <p>@{tag}</p>
        <p>{location}</p>
      </StyledWrapper>
      <StatList items={stats} />
    </StyledContainer>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  }).isRequired,
};
