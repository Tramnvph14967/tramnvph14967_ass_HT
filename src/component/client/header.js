import Nav from "./nav";

const Header = {
    print() {
        return /* html */`
        <header class="max-w-5xl mx-auto">
            <div class="bg-[#272f54] p-2">

                <img src="https://i.imgur.com/5EK1lFm.png" class="mx-auto" style=" width:150px"/>
                
            </div>
            <div class="bg-orange-600">
                ${Nav.print()}
            </div>
        </header>`;
    },
};
export default Header;