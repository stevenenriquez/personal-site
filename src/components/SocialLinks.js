import TwitterIcon from './TwitterIcon';
import GithubIcon from './GithubIcon';
import LinkedInIcon from './LinkedInIcon';

const SocialLinks = () => {
    const socials = [
        {
            name: 'GitHub',
            link: 'https://www.github.com/stevenenriquez',
            icon: <GithubIcon />
        },
        {
            name: 'Twitter',
            link: 'https://www.twitter.com/stevenedev',
            icon: <TwitterIcon />,
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/stevenenriquez',
            icon: <LinkedInIcon />
        }
    ];

    const buttons = (
        socials.map(social => {
            return (
                <a className="m-4 hover:scale-110" 
                   href={social.link}
                   key={`${social.name.toLowerCase()}-link`}
                   target='_blank' 
                   rel='noopener noreferrer'
                >
                    {social.icon}
                </a>
            );
        })
    );

    return (
        <div className='text-white flex'>
            {buttons}
        </div>
    );
}

export default SocialLinks;