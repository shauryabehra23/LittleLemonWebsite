function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Little Lemon Restaurant</p>
                <p>123 Main Street, Your City, Country</p>
                <p>Phone: (123) 456-7890 | Email: info@littlelemon.com</p>
                <div className="footer-social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |{" "}
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> |{" "}
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;