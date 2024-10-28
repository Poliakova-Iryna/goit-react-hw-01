import s from './Profile.module.css';

const Profile = ({user}) => {
    return <div>
        <div className={s.wrapper}>
            <div className={s.card}>
              <img className={s.image}
               src={user.avatar}
               alt="User avatar"
              />
              <p className={s.name}>{user.username}</p>
              <p className={s.description}>@{user.tag}</p>
              <p className={s.description}>{user.location}</p>
              <ul className={s.list}>
                <li className={s.item}>
                 <span className={s.span}>Followers</span>
                 <span className={s.stats}>{user.stats.followers}</span>
                </li>
                <li className={s.item}>
                  <span className={s.span}>Views</span>
                  <span className={s.stats}>{user.stats.views}</span>
                </li>
                <li className={s.item}>
                  <span className={s.span}>Likes</span>
                  <span className={s.stats}>{user.stats.likes}</span>
                </li>
              </ul>
            </div>
            
        </div>
    </div>
}


export default Profile