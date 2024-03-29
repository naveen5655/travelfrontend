import "./Navbar.css"
export const Navbar = () => {
    return (
        <header className="heading d-flex align-center">
            <h1 className="heading-1">
                <a className="link" href="/">TravelO</a>
            </h1>
            <nav className="d-flex align-center gap-large">
                <div className="nav d-flex align-center cursor-pointer">
                    <span className="material-icons-outlined profile-option menu">
                        menu
                    </span>
                    <span className="material-icons-outlined profile-option person">
                        person_2
                    </span>
                </div>
            </nav>
        </header>
    )
}