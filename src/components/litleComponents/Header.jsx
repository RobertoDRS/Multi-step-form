import './Header.css'

const Header = ({title, text}) => {
    return(
        <header>
            <h2>{title}</h2>
            <p>{text}</p>
        </header>
    )
}

export default Header