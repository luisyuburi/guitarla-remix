import Navigation from "./navigation"
const Footer = () => {
    const year = new Date().getFullYear()  // returns the current year
    return (
        <footer className="footer">
            <div className="container content">
                <Navigation />
                <p className="copyright">All rights reserved {year} </p>
            </div>
        </footer>
    )
}

export default Footer