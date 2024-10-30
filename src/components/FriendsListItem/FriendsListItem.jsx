import s from './FriendsListItem.module.css';
import clsx from "clsx";


const FriendsListItem = ({ friend }) => {
    return (
        <li className={s.item} key={friend.id}>
            <div>
                <img src={friend.avatar} alt="Avatar" width="48" />
                <p className={s.name}>{friend.name}</p>
                <p className={clsx({
                    [s.online]: friend.isOnline,
                    [s.offline]: !friend.isOnline
                })}>{friend.isOnline ? 'Online' : 'Offline'}</p>
            </div>
        </li>
    );
};

export default FriendsListItem