import axios from "axios";
import { reRender } from "../../utils/reRender";
import { getAll } from '../../api/category';
const Header = {
    async render() {
         // Chờ thằng axios.get truy cập API và lấy dữ liệu, 
        // lấy dữ liệu xong sẽ trả về và gán vào biến data
        const { data } = await getAll();
        return /* html */`
        
            ${data.map((categorys) =>/*html*/ `
                <div class="p-2 md:w-40 ">
                    <div class="flex items-center p-4 bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-gray-500 hover:text-gray-100">
                        <div>
                            <a href="/productCate/${categorys.id}">
                                <p class="text-xs font-medium ml-2">${categorys.name}</p>
                            </a>
                        </div>
                    </div>
                </div>
            `).join("")}
        `;
    },
};
export default Header;