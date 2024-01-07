import viteLogo from '/vite.svg'
import reactLogo from '/react.svg'
import './header.css'


export default function Header(){

    return(
        <>
        <header>
        <img src={viteLogo} alt={'vite-Logo'} />
        <span><img src={reactLogo} alt={'vite-Logo'} /></span>
        </header>
        </>
    )

}