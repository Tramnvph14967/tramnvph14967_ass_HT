import Nav from "./nav";

const Header = {
    render() {
        return /* html */`
        <header class="mx-auto">
            <div >
                ${Nav.render()}
            </div>
            
            
        </header>`;
    },
};
export default Header;