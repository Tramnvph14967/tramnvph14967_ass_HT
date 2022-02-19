import axios from "axios";
import { add } from "../../api/account"
const Signup = {
  render() {
        return /* html */`
       
        <div class="mx-auto">
        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register an account to log in
            </h2>
            
          </div>
          <form class="mt-8 space-y-6" action="#" id="form-add" method="POST">
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
              <div class="flex py-2">
                <label class="py-2">lastname:*</label>
                <input id="lastname-account" name="lastname" type="surname" autocomplete="lastname" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="lastname">
              </div>
              <div class="flex py-2">
                <label class="py-2">firstname:*</label>
                <input id="firstname-account" name="firstname" type="firstname" autocomplete="firstname" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="firstname">
              </div>
              <div class="flex py-2">
                <label class="py-2">img:*</label>
                <input id="img-account" name="img" type="file" autocomplete="img" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="img">
              </div>
              <div class="flex py-2">
                <label class="py-2">gender:*</label>
                <input id="gender-account" name="gender" type="text" autocomplete="gender" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="gender">
              </div>
              <div class="flex py-2">
                <label class="py-2">email:*</label>
                <input id="email-account" name="email" type="text" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="email">
              </div>
              <div class="flex py-2">
                <label class="py-2">password:*</label>
                <input id="password-account" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="password">
              </div>
              <div class="flex py-2">
                <label class="py-2" >phone:*</label>
                <input id="phone-account" name="phone" type="phone" autocomplete="current-phone" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="phone">
              </div>
            </div>
      
            <div class="flex items-center justify-between">
              
      
              <div class="text-sm">
                <a href="/signin" class="font-medium text-indigo-600 hover:text-indigo-500">
                  Login?
                </a>
              </div>
            </div>
      
            <div>
              <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <!-- Heroicon name: solid/lock-closed -->
                  <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                  </svg>
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
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
          });
              document.location.href="/signin";
        });
      });
  
      
    },
};
export default Signup;