import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './SocialButtons.css'; 

const SocialButtons = () => {
    const socials = [
        {
            name: 'GitHub',
            link: 'https://www.github.com/stevenenriquez',
            icon: <GitHubIcon fontSize='large'/>
        },
        {
            name: 'Twitter',
            link: 'https://www.twitter.com/thatdevsteven',
            icon: <TwitterIcon fontSize='large'/>,
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/stevenenriquez',
            icon: <LinkedInIcon fontSize='large'/>
        }
    ];

    const buttons = (
        socials.map(social => {
            return (
                <IconButton color='inherit' 
                            aria-label='Github' 
                            component='a' 
                            href={social.link} 
                            target='_blank' 
                            rel='noopener noreferrer'
                            size='large'
                >
                    {social.icon}
                </IconButton>
            );
        })
    );

    return (
        <div className='buttons'>
            {buttons}
        </div>
    );
}

export default SocialButtons;