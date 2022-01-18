import { FaGithubAlt, FaInstagram } from 'react-icons/fa';

const size: number = 30
const iconProps: string = "text-white"

function Github(): JSX.Element {
    return <><a href="https://github.com/anzlechavezz" target={'_blank'} rel="noreferrer">
        <FaGithubAlt className={iconProps} size={size}/>
    </a></>   
}

function Instagram(): JSX.Element {
    return <><a href="https://github.com/anzlechavezz" target={'_blank'} rel="noreferrer">
        <FaInstagram className={iconProps} size={size}/>
    </a></>   
}

export default function SocialLinks() : JSX.Element {
    return <div className='flex flex-row pt-3 justify-center gap-4'>
        <Github/>
        <Instagram/>
    </div>
}