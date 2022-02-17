import Nav from "./nav";

const Header = {
    render() {
        return /* html */`
        <header class="max-w-5xl mx-auto">
            <div >
                ${Nav.render()}
            </div>
            
            
        </header>`;
    },
};
export default Header;