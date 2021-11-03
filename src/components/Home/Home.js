import './Home.css';
import avatar from '../../img/steven.png';
import SocialButtons from '../SocialButtons/SocialButtons';

const Home = () => {
  return (
    <div className='home'>
      <header className='header'>
        <img src={avatar} className='avatar' alt='avatar' />
        <p>
          Steven Enriquez
        </p>
        <SocialButtons />
      </header>
    </div>
  );
}
  
export default Home;