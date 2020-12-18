import './footer.css';

function Footer() {
    return (
        <footer className="cols">
            <div className="rows">
                <span>&copy; 2020 DeePLUG gadgets.</span>
                <a href="https://hitmee.herokuapp.com">Hitmee</a>
                <a href="https://oneunivers.herokuapp.com">Univers</a>
                <a href="https://teambod.herokuapp.com">Teambod</a>
                <a href="#">Status</a>
                <a href="https://github.com">Contact Github</a>
                <a href="#">Pricing</a>
                <a href="#">API</a>
                <a href="#">Training</a>
                <a href="#">Blog</a>
                <a href="#">About</a>
            </div>
            <div className="rows" style={{marginTop: '1.5rem'}}>
                <span>Developed By</span>
                <a href="#">Temiloluwa Ogunbanjo</a>
            </div>
        </footer>
    );
};

export default Footer;