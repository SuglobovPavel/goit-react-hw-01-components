import PropTypes from 'prop-types';
import { FriendListBox } from "./index.styled";
import { FriendListItem } from "components/FriendListItem";

export const FriendList = ({friends}) => {
   return <FriendListBox>
      {friends.map(el => {
        return <FriendListItem key={el.id}
         isOnline={el.isOnline}
         avatar={el.avatar}
         name={el.name}
      ></FriendListItem>
      })}
   </FriendListBox>;
};

FriendList.propTypes  = {
   friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
   })).isRequired,
}