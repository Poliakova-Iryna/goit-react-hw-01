import Profile from "./Profile/Profile";
import userData from './userData.json';



const App = () => {
    return (
      <>
        <Profile  user={userData} />
      </>
    );
};


export default App;