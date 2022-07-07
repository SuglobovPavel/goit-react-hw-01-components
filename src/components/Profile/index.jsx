import PropTypes from 'prop-types';
import { ProfileContainer, ProfliePhoto, ProflieName, ProflieTag, ProflieLocation, ProflieStatsBox, ProflieStatsElemet, ProfileTopBox } from "./index.styled";

export const Profile = ({avatar, username, tag, location, stats}) => {
   let {followers, views, likes} = stats;
   return (
      <ProfileContainer>
         <ProfileTopBox>
            <ProfliePhoto>
               <img src={avatar} alt="" />
            </ProfliePhoto>
            <ProflieName>{username}</ProflieName>
            <ProflieTag>@{tag}</ProflieTag>
            <ProflieLocation>{location}</ProflieLocation>
         </ProfileTopBox>
         <ProflieStatsBox>
            <ProflieStatsElemet>
               Followers
               <strong>{followers}</strong>
            </ProflieStatsElemet>
            <ProflieStatsElemet>
               Views
               <strong>{views}</strong>
            </ProflieStatsElemet>
            <ProflieStatsElemet>
               Likes
               <strong>{likes}</strong>
            </ProflieStatsElemet>
         </ProflieStatsBox>
      </ProfileContainer>
   )
}

Profile.prototype = {
   avatar: PropTypes.string.isRequired,
   username: PropTypes.string.isRequired,
   tag: PropTypes.string.isRequired,
   location: PropTypes.string.isRequired,
   stats: PropTypes.arrayOf(PropTypes.shape({
      followers: PropTypes.string.isRequired,
      views: PropTypes.string.isRequired,
      likes: PropTypes.string.isRequired,
   })).isRequired,
}