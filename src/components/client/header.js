import Nav from "./nav";

const Header = {
    print() {
        return /* html */`
        <header class="max-w-5xl mx-auto">
            <div >
                ${Nav.print()}
            </div>
            
            
        </header>`;
    },
};
export default Header;