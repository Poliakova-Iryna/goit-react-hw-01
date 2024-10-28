import s from '../FriendsList/FriendsList.module.css';
import clsx from "clsx";

const FriendsList = ({ friends }) => {
    return (
        <ul className={s.wrapper}>
            {friends.map(friend => (
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
            ))}
        </ul>
    )
}


export default FriendsList