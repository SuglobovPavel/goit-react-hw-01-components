import PropTypes from 'prop-types';
import { FriendListItemBox, Status, Photo, Name } from "./index.styled";

export const FriendListItem = ({avatar, name, isOnline}) => {
   return <FriendListItemBox>
      <Status status={isOnline}></Status>
      <Photo src={avatar}></Photo>
      <Name>{name}</Name>
   </FriendListItemBox>;
};

FriendListItem.prototype = {
   avatar: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   isOnline: PropTypes.string.bool,
}