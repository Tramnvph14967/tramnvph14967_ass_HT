// import TT_SV from "../../../data";
import axios from "axios";
import { getAll, remove } from '../../../api/product';
import { reRender } from "../../../utils/reRender";

const News = {
    async render() {
         // Chờ thằng axios.get truy cập API và lấy dữ liệu, 
        // lấy dữ liệu xong sẽ trả về và gán vào biến response
        const { data } = await getAll();

        return /* html */`
          <div class="p-2 mx-auto pt-10">
          <div class="flex flex-col">
              <div>
                  <td class="px-6 py-4 text-right text-sm font-medium w-2">
                      <a href="/admin/product/add" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add_Product</a>
                  </td>
              </div>
              <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                          <table class="min-w-full divide-y divide-gray-200">
                              <thead class="bg-gray-50">
                                  <tr>
                                      <th scope="col" class="px-6 py-3 text-center text-left text-xs font-medium text-gray-900 uppercase tracking-wider"> ID </th>
                                      <th scope="col" class="px-6 py-3 text-center text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Name</th>
                                      <th scope="col" class="px-6 py-3 text-center text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Img</th>
                                      <th scope="col" class="px-6 py-3 text-center text-left text-xs font-medium text-gray-900 uppercase tracking-wider">desc</th>
                                      <th scope="col" class="px-6 py-3 text-center text-left text-xs font-medium text-gray-900 uppercase tracking-wider">price</th>
                                      <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-900 uppercase tracking-wider">Edit
                                      </th>
                                      <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-900 uppercase tracking-wider">Delete
                                      </th>
                                      <th scope="col" class="relative px-6 py-3"> <span class="sr-only"> Edit </span> </th>
                                  </tr>
                              </thead>

                              <tbody class="bg-white divide-y divide-gray-200">
                                  
                                  ${data.map((product) => `
                                  <tr>
                                  <td class="px-6 py-4 whitespace-nowrap">
                                        <span
                                            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            ${product.id}
                                        </span>
                                    </td>
                                     
                                    <td class="px-6 py-4 text-sm">
                                        <div class="text-sm text-gray-900">${product.name}</div>
                                    </td>

                                    
                                    <td class="px-6 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 h-10 w-10">
                                                <img class="h-10 w-10 rounded-full" src="${product.img}" alt="">
                                            </div>
                                        </div>
                                        </div>
                                    </td>
                                    <td class="px-2 py-2 text-sm text-gray-700">
                                        ${product.desc}
                                    </td>
                                    <td class="px-2 py-2 text-sm text-gray-700">
                                        ${product.price}
                                    </td>

                                    <td class="px-6 py-4 text-right text-sm font-medium">
                                        <a href="/admin/product/edit/${product.id}"
                                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Edit</a>

                                       
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button data-id=${product.id} class="bnt btn-remove inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Delete</button>
                                    </td>
                                    </td>
                                  </tr>
                      `).join("")}

                      <!-- Hoạt Động Sinh Viên -->
                      </tbody>


                      </table>
                  </div>
              </div>
          </div>
      </div>
      </div>
        `;
    },
    afterRender() {
        // lấy toàn bộ danh sách button có class là .btn
        const buttons = document.querySelectorAll(".bnt");
        // tạo vòng lặp để lấy ra từng button
        buttons.forEach((button) => {
            // sử dụng dataset để lấy id từ data-*
            const { id } = button.dataset;
            // click vào button thì xóa phần tử trong mảng
            // dựa vào ID vừa lấy được
            button.addEventListener("click", () => {
                const confirm = window.confirm("Bạn chắc chắn muốn xóa không?");
                if (confirm) {
                    remove(id).then(() => {
                        reRender(News, "#content");
                    });
                }
            });
        });
    },
   
};
export default News;