import Nav from "./nav";
import { reRender } from "../../utils/reRender";
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