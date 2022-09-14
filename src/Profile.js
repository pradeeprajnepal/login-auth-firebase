import './profile.css';
import {useAuthValue} from './AuthContext';
import {signOut} from 'firebase/auth';
import {auth} from './firebase';
import {Link} from 'react-router-dom';


function Profile() {
  const {currentUser}= useAuthValue();
  
const toggleSignBtn=()=>{
    if(currentUser?.emailVerified){
     return <span onClick={()=>signOut(auth)}>SignOut</span>
    }else{
      return <span><Link to='/login'></Link>Log In</span>
    }
  }

  return (
    <div className='center'>
      <div className='profile'>
        <h1>Welcome User</h1>
        <p><strong>Email: </strong> {currentUser?.email} </p>
        <p>
          <strong>Email verified: </strong>
          {`${currentUser?.emailVerified}`}
        </p>
        {/* <span onClick={()=>signOut(auth)}>SignOut</span> */}{toggleSignBtn()}
      </div>
    </div>
  )
}

export default Profile