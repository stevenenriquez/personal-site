import './Home.css';
import avatar from '../../img/steven.png';
import SocialButtons from '../SocialButtons/SocialButtons';
import TypeWriter from '../TypeWriter/TypeWriter';

const typeWriterText = ["Welcome to my site", "I'm a full stack web developer..", "From Arizona, USA, Earth, Milky Way, Virgo Supercluster, Laniakea Supercluster..", "Alright.. let's run this back"];

const Home = () => {

  return (
    <div className='home'>
      <header>
        <div>
          <img src={avatar} className='avatar' alt='avatar' />
          <h3>
            Hey, my name is Steven 👋<br/>
          </h3>
        </div>
      </header>
      <body>
        <TypeWriter text={typeWriterText} />
      </body>
      <footer className='footer'>
        <h4>
          Reach me at:
        </h4>
        <SocialButtons />
      </footer>
    </div>
  );
}
  
export default Home;