import { FaGithubAlt, FaInstagram, FaMailBulk } from 'react-icons/fa';

const size: number = 30
const iconProps: string = "text-white"

function Github(): JSX.Element {
    return <><a href="https://github.com/anzlechavezz" target={'_blank'} rel="noreferrer">
        <FaGithubAlt className={iconProps} size={size}/>
    </a></>   
}

function Instagram(): JSX.Element {
    return <><a href="https://instagram.com/anzle.chavezzz" target={'_blank'} rel="noreferrer">
        <FaInstagram className={iconProps} size={size}/>
    </a></>   
}

function Email(): JSX.Element {
    return <><a href="mailto:anzlemchavez@gmail.com" target={'_blank'} rel="noreferrer">
        <FaMailBulk className={iconProps} size={size}/>
    </a></>   
}

export default function SocialLinks() : JSX.Element {
    return <div className='flex flex-row pt-10 justify-center gap-4'>
        <Github/>
        <Instagram/>
        <Email />
    </div>
}