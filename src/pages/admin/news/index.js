import TT_SV from "../../../data";
const News = {
    render() {
        return /* html */`
          <div class="p-2 mx-auto pt-10">
          <div class="flex flex-col">
              <div>
                  <td class="px-6 py-4 text-right text-sm font-medium w-2">
                      <a href="/admin/news/add" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm Mới</a>
                  </td>
              </div>
              <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                          <table class="min-w-full divide-y divide-gray-200">
                              <thead class="bg-gray-50">
                                  <tr>
                                      <th scope="col" class="px-6 py-3 text-center text-left text-xs font-medium text-gray-900 uppercase tracking-wider"> Ảnh </th>
                                      <th scope="col" class="px-6 py-3 text-center text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Tiêu Đề</th>
                                      <th scope="col" class="px-6 py-3 text-center text-left text-xs font-medium text-gray-900 uppercase tracking-wider">  Ngày Tạo </th>
                                      <th scope="col" class="px-6 py-3 text-center text-left text-xs font-medium text-gray-900 uppercase tracking-wider"> Nội Dung </th>
                                      <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-900 uppercase tracking-wider">Sửa
                                      </th>
                                      <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-900 uppercase tracking-wider"> Xóa
                                      </th>
                                      <th scope="col" class="relative px-6 py-3"> <span class="sr-only"> Edit </span> </th>
                                  </tr>
                              </thead>

                              <tbody class="bg-white divide-y divide-gray-200">
                                  <!-- Tin Tức Sinh Viên -->
                                  ${TT_SV.map((post) => `
                                  <tr>
                                      <td class="px-6 py-4 text-sm whitespace-nowrap">
                                          <div class="flex items-center">
                                              <div class="flex-shrink-0 h-10 w-10">
                                                  <img class="h-10 w-10 rounded-full" src="${post.img}" alt="">
                                              </div>
                                          </div>
                                    </div>
                                    </td>
                                    <td class="px-6 py-4 text-sm">
                                        <div class="text-sm text-gray-900">${post.title}</div>
                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span
                                            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            ${post.createdAt}
                                        </span>
                                    </td>
                                    <td class="px-2 py-2 text-sm text-gray-700">
                                        ${post.desc}
                                    </td>

                                    <td class="px-6 py-4 text-right text-sm font-medium">
                                        <a href="/admin/news/edit/${post.id}"
                                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">sửa</a>
                                    </td>
                                    <td class="px-6 py-4 text-right text-sm font-medium">
                                        <a href=" "
                                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Xóa</a>
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
};
export default News;