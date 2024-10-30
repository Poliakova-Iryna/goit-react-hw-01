import 'modern-normalize';
import Profile from './components/Profile/Profile';
import userData from './components/Profile/userData.json';
import './assets/index.css';
import FriendsList from './components/FriendsList/FriendsList';
import friends from './components/FriendsList/friends.json';
import TransactionHistory from './components/TransactionHistory/TransationHistory';
import transactions from './components/TransactionHistory/transactions.json';



const App = () => {
  return (
    <div>
      <Profile user={userData}/>
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  )
}

export default App
