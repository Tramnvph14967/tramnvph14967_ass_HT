import axios from "axios";
import { getAll, remove } from '../../api/product';
import { reRender } from "../../utils/reRender";
import categorys from './category';
const Product = {
    async render() {
        // Chờ thằng axios.get truy cập API và lấy dữ liệu, 
        // lấy dữ liệu xong sẽ trả về và gán vào biến response
        const { data } = await getAll();


        return /* html */`

        <div tabindex="0" class="p-2 focus:outline-none">
        <!-- Remove py-8 -->
        <section class="container mx-auto my-1 flex flex-wrap -m-4">
            ${await categorys.render()}
        </section>
        <div class=" grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">

            ${data.map((product) =>/*html*/ `
                <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div class="flex items-end justify-end h-56 w-full bg-cover" style="background-image: url('${product.img}')">
                        <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </button>
                        </div>
                    <a href="/#/products/${product.id}">
                        <div class="px-5 py-3">
                            <h3 class="text-gray-700 uppercase">${product.name}</h3>
                            <span class="text-gray-500 mt-2">${product.price}</span>
                        </div>
                    </a>
                    
                </div>
            `).join("")}

        </div>
        <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
    </div>
     <script src="chrome-extension://kgejglhpjiefppelpmljglcjbhoiplfn/shadydom.js"></script>
    <script>
        if (!window.ShadyDOM) window.ShadyDOM = { force: true, noPatch: true };
    </script>
        `;
    },
};
export default Product;