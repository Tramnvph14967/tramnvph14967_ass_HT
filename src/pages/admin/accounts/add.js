import axios from "axios";
import { add } from "../../../api/account";


const Add = {
    render() {
        return /* html */`
        <div class="p-2 mx-auto pt-6">
            <form action="#" method="POST" id="form-add">
                <div class="shadow overflow-hidden sm:rounded-md p-4">
                    <div class="col-span-6 sm:col-span-3">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                            lastname
                        </span>
                        <input type="text" id="lastname-account" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                            firstname
                        </span>
                        <input type="text" id="firstname-account" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                        img
                    </span>
                    <input type="file" id="img-account" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                        gender
                    </span>
                    <input type="text" id="gender-account" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                        email
                    </span>
                    <input type="text" id="email-account" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                        password
                    </span>
                    <input type="password" id="password-account" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                        Phone
                    </span>
                    <input type="number" id="phone-account" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                </div>



                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit" class="btn inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add account</button>
                </div>
                </div>  
            </form>
        </div>
        `;
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add");
        const imgproduct = document.querySelector('#img-account');
    
        imgproduct.addEventListener('change', async (e) => {
          const file = e.target.files[0];
          const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/shose/image/upload"
    
          const formData = new FormData();
    
          formData.append('file', file);
          formData.append('upload_preset', "uyd4thcf");
    
        // call api cloudinary
        
          const response = await axios.post(CLOUDINARY_API, formData, {
            headers: {
              "Content-Type": "application/form-data"
            }
          });
          console.log(response.data.url);
    
    
          formAdd.addEventListener("submit", (e) => {
            e.preventDefault();
            
            add({

                "lastname": document.querySelector('#lastname-account').value,
                "firstname": document.querySelector('#firstname-account').value,
                "img": response.data.url,
                "gender": document.querySelector('#gender-account').value,
                "email": document.querySelector('#email-account').value,
                "password": document.querySelector('#password-account').value,
                "phone": document.querySelector('#phone-account').value,
                if(lastname = ""){
                    alert("Không được bỏ trống");
                }
            });
                document.location.href="/admin/accounts";
          });
        });
    
        
      },
    };

export default Add;
