import './Home.css';
import avatar from '../../img/steven.png';
import SocialButtons from '../SocialButtons/SocialButtons';
import TypeWriter from '../TypeWriter/TypeWriter';

const typeWriterWords = ["I'm a Software Developer..", "From Arizona, USA, Earth, Milky Way, Virgo Supercluster, Laniakea Supercluster..", "I don't know what else to put..", "Should I stop typing..?", "Alright.. let's start over!"];

const Home = () => {

  return (
    <div className='home'>
      <header className='header'>
        <img src={avatar} className='avatar' alt='avatar' />
        <h4 className='title'>
          Hey, my name is Steven Enriquez.<br/>
          Welcome to my site 👋
        </h4>
        <p>
          About me:
          <TypeWriter words={typeWriterWords} />
        </p>
        <p>
          Reach me at:
          <SocialButtons />
        </p>
      </header>
    </div>
  );
}
  
export default Home;