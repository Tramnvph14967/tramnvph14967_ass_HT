import TT_SV from "../../../data";
const Edit = {
    print(id) {
        const result = TT_SV.find((post) => post.id == id);
        console.log(result);
        return /* html */`
        <div class="max-w-5xl mx-auto pt-6">
            <form action="#" method="POST">
                <div class="shadow overflow-hidden sm:rounded-md p-4">
                    <div class="col-span-6 sm:col-span-3">
                        <span class=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                            Tiêu Đề:
                        </span>
                        <input type="text" name="tieude" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" value="${result.title}"/>
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                        <span
                            class=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                            Hình Ảnh Hiện Tại:
                        </span>
                        <img src="${result.img}" alt="" class="w-[100px]">
                        <input type="file" name="hinhanh"
                            class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            value="${result.img}"/>
            
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                    <span class=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                        Nội Dung Chính:
                    </span>
                    <textarea name="chitet" id="" cols="10" rows="3" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">${result.desc}</textarea>
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <span class=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                        Chi Tiết:
                    </span>
                    <textarea name="chitet" id="" cols="30" rows="5" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">${result.detail}</textarea>
                </div>
                <div class="flex">
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cập Nhật</button>
                    </div>
                </div>
                </div>  
            </form>
        </div>
        `;
    },
};
export default Edit;