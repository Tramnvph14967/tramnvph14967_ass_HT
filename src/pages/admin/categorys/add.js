import axios from "axios";
import { add } from "../../../api/category";


const Add = {
    render() {
        return /* html */`
        <div class="p-2 mx-auto pt-6">
            <form action="#" method="POST" id="form-add">
                <div class="shadow overflow-hidden sm:rounded-md p-4">
                    <div class="col-span-6 sm:col-span-3">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                            Name
                        </span>
                        <input type="text" id="name-category" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                    </div>
                   
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit" class="btn inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add category</button>
                </div>
                </div>  
            </form>
        </div>
        `;
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add");
          formAdd.addEventListener("submit", (e) => {
            e.preventDefault();

            add({
                          
                "name": document.querySelector('#name-category').value,
            });
                document.location.href="/admin/categorys";
          });
        
    
        
      },
    };

export default Add;