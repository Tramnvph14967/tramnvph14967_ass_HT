import axios from "axios";
import { getAll } from '../../api/product';
import { reRender } from "../../utils/reRender";
import nav from "../../components/client/nav";
import categorys from './category';


const HomePage = {
    async render() {
        // Chờ thằng axios.get truy cập API và lấy dữ liệu, 
        // lấy dữ liệu xong sẽ trả về và gán vào biến response
        const { data } = await getAll();
        
        return /* html */`
        <div class="p-2 mx-auto"> 
            
                <div class="flex flex-col items-center mx-auto">
                <div class="w-full bg-white rounded overflow-x-hidden flex snap-x">
                    <div class="border-4 border-black-900 snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 " id="slide-1">
                        <img src="https://t92store.com/wp-content/uploads/2021/05/BANNER-JORDAN-1.jpg" alt="">
                    </div>
                    <div class="border-4 border-black-900 snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 " id="slide-2">
                        <img src="https://t92store.com/wp-content/uploads/2021/05/BANNER-CONVERSE.jpg" alt="">
                    </div>
                    <div class="border-4 border-black-900 snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 " id="slide-3">
                        <img src="https://theme.hstatic.net/1000381774/1000494179/14/collection_banner.jpg?v=190" alt="">
                    </div>
                </div>
                <div class="flex">
                    <a class="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center" href="#slide-1">1</a>
                    <a class="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center" href="#slide-2">2</a>
                    <a class="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center" href="#slide-3">3</a>
                </div>
        </div>


        <section class="container mx-auto my-1 flex flex-wrap -m-4">
            ${await categorys.render()}
        </section>




        
            <div>
                <div class="md:flex mt-4 md:-mx-4">
                    <div class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" style="background-image: url('https://x9shop.vn/wp-content/uploads/2020/08/banner111-1400x474.jpg')">
                        <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                            <div class="px-10 max-w-xl">
                                <h2 class="text-2xl text-white font-semibold">Style Shoes</h2>
                                <p class="mt-2 text-gray-400">✓ Guaranteed Quality ✓ Very Good Price ✓ Nationwide Delivery ✓ Fast Online Purchase ✓</p>
                                <button class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                    <span>Shop Now</span>
                                    <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2" style="background-image: url('https://giaynhapkhau68.com/wp-content/uploads/2020/08/footwear-mens-banner-2.jpg')">
                        <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                            <div class="px-10 max-w-xl">
                                <h2 class="text-2xl text-white font-semibold">Trendy Shoes</h2>
                                <p class="mt-2 text-gray-400">
                                Trendy Shoes You Should Know. ✓ Guaranteed Quality ✓ Very Good Price ✓ Nationwide Delivery ✓ Fast Online Purchase ✓.</p>
                                <button class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                    <span>Shop Now</span>
                                    <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            

        <div class="mt-8">
        <h3 class="text-gray-600 text-2xl font-medium">New Product</h3>
        <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">

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
    </div>
    <div class="mt-8">
        <h3 class="text-gray-600 text-2xl font-medium">Featured Products</h3>
        <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">

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
    </div>


        </div>
        `;
    },
    afterRender() {
        nav.afterRender();
      },
};

export default HomePage;