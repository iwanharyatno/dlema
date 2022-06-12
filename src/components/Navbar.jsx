function Navbar(props) {
    return (
        <nav className="py-4 px-3 mb-4 bg-blue-700 text-white text-center">
            <h1 className="text-xl">{props.text}</h1>
        </nav>
    );
}

export default Navbar;
