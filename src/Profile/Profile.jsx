import s from '../Profile/Profile.module.css';

const Profile = ({user}) => {
    const { avatar, name, tag, location, stats: {followers, views, likes} } = user;
    return (
        <div>
          <div>
              <img className={s.image}
                src={avatar}
                alt="User avatar"
               />
              <p className={s.name}>{name}</p>
              <p className={s.tag}>@{tag}</p>
              <p className={s.location}>{location}l</p>
            </div>

            <ul className={s.list}>
                <li className={s.listItem}>
                  <span>Followers</span>
                  <span className={s.listSpan}>{followers}</span>
                </li>
                <li className={s.listItem}>
                  <span>Views</span>
                  <span>{views}</span>
                </li>
                <li className={s.listItem}>
                  <span>Likes</span>
                  <span>{likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;