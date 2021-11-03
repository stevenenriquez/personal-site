import './Home.css';
import logo from '../../steven.jpg';
import SocialButtons from '../SocialButtons/SocialButtons';

const Home = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Steven Enriquez
        </p>
        <SocialButtons />
      </header>
    </div>
  );
}
  
export default Home;