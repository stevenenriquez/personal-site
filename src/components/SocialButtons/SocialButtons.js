import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import css from './SocialButtons.css'; 

const SocialButtons = () => {
    const socials = [
        {
            name: 'GitHub',
            link: 'https://www.github.com/stevenenriquez',
            icon: <GitHubIcon />
        },
        {
            name: 'Twitter',
            link: 'https://www.twitter.com/thatdevsteven',
            icon: <TwitterIcon />
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
                <IconButton color='inherit' 
                            aria-label='Github' 
                            component='a' 
                            href={social.link} 
                            target='_blank' 
                            rel='noopener noreferrer'
                >
                    {social.icon}
                </IconButton>
            );
        })
    );

    return (
        <div className={css.buttons}>
            {buttons}
        </div>
    );
}

export default SocialButtons;