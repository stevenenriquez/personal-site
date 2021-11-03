import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
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