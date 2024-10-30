import s from '../FriendsList/FriendsList.module.css';
import FriendsListItem from '../FriendsListItem/FriendsListItem';
import friends from './friends.json';

const FriendsList = () => {
    return (
        <ul className={s.wrapper}>
            {friends.map(friend => (
                <FriendsListItem key={friend.id} friend={friend} /> 
            ))}
        </ul>
    )
}


export default FriendsList