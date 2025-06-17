import logo from '../react-logo.png'


export default function NavBar(){
    return(
        <header className="navhead">
            <nav className="navmain">
                <img className="nav-img" src={logo} alt="Logo" />
                <span className="nav-text">ReactFacts</span>
            </nav>
        </header>
    )
}