import 'modern-normalize';
import Profile from './components/Profile/Profile';
import userData from './components/Profile/userData.json';
import './assets/index.css';
import friends from './components/FriendsList/friends.json';
import FriendsList from './components/FriendsList/FriendsList';


const App = () => {
  return (
    <div>
      <h1>HELLO</h1>
      <Profile user={userData}/>
      <FriendsList friends={friends} />
    </div>
  )
}

export default App
