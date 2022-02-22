// import TT_SV from "../../../data";
import axios from "axios";
import { getAll, remove } from '../../../api/contacts';
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
                      <a href="/admin/contacts/add" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">add_contacts</a>
                  </td>
              </div>
              <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                          <table class="min-w-full divide-y divide-gray-200">
                              <thead class="bg-gray-50">
                                  <tr>
                                      <th scope="col" class="px-6 py-3 text-center text-left text-xs font-medium text-gray-900 uppercase tracking-wider"> ID </th>
                                      <th scope="col" class="px-6 py-3 text-center text-left text-xs font-medium text-gray-900 uppercase tracking-wider">name</th>
                                      <th scope="col" class="px-6 py-3 text-center text-left text-xs font-medium text-gray-900 uppercase tracking-wider">phone</th>
                                      <th scope="col" class="px-6 py-3 text-center text-left text-xs font-medium text-gray-900 uppercase tracking-wider">gmail</th>
                                      <th scope="col" class="px-6 py-3 text-center text-left text-xs font-medium text-gray-900 uppercase tracking-wider">message</th>
                                      
                                      <th scope="col" class="w-10 px-6 py-3 text-center text-xs font-medium text-gray-900 uppercase tracking-wider">Edit
                                      </th>
                                      <th scope="col" class="w-10 px-6 py-3 text-center text-xs font-medium text-gray-900 uppercase tracking-wider">Delete
                                      </th>
                                      
                                  </tr>
                              </thead>

                              <tbody class="bg-white divide-y divide-gray-200">
                                  <!-- Tin Tức Sinh Viên -->
                                  ${data.map((contacts) => `
                                  <tr>
                                  <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            ${contacts.id}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-sm">
                                        <div class="text-sm text-gray-900">
                                            ${contacts.name}
                                        </div>
                                    </td>
                                    <td class="px-2 py-2 text-sm text-gray-700">
                                        ${contacts.phone}
                                    </td>
                                    <td class="px-2 py-2 text-sm text-gray-700">
                                        ${contacts.gmail}
                                    </td>
                                    
                                    <td class="px-2 py-2 text-sm text-gray-700">
                                        ${contacts.message}
                                    </td>
                                    
                                    <td class="px-6 py-4 text-right text-sm font-medium">
                                        <a href="/admin/contacts/edit/${contacts.id}"
                                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Edit</a>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button data-id=${contacts.id} class="bnt btn-remove inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Delete</button>
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