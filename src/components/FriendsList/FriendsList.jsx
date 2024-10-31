import s from '../FriendsList/FriendsList.module.css';
import FriendsListItem from '../FriendsListItem/FriendsListItem';

const FriendsList = ({ friends }) => {
    return (
        <ul className={s.wrapper}>
            {friends.map(friend => (
                <FriendsListItem key={friend.id} friend={friend} /> 
            ))}
        </ul>
    )
}


export default FriendsList