
import { reRender } from "../../utils/reRender";

const Dashboard = {
  render() {
        return /* html */`
            <div class="p-2 mx-auto">
            <nav class="bg-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
                  </div>
                  <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                      <a href="/admin/dashboard" class="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>
        
                      <a href="/admin/categorys" class="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Categorys</a>

                      <a href="/admin/product" class="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Product</a>
        
                      <a href="/admin/news" class="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">News</a>

                      <a href="/admin/accounts" class="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Accounts</a>

                      <a href="/admin/contacts" class="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contacts</a>
                    </div>
                  </div>
                </div>
                <div class="hidden md:block">
                  <div class="ml-4 flex items-center md:ml-6">
                    
                    
                    <!-- Profile dropdown -->
                    <div class="ml-3 relative">
                      <div>
                        <button type="button" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                          <span class="sr-only">Open user menu</span>
                          
                         
                          ${localStorage.getItem("user") ? `
                            <div class="flex items-center"><span class="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium  hover:bg-gray-500" id="account"></span></div>
                            <div><a href="/" class="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium  hover:bg-gray-500" id="logout">Logout</a></div>
                        ` : ""}

                        </button>
                      </div>
                     
                      <!--
                        Dropdown menu, show/hide based on menu state.
        
                        Entering: "transition ease-out duration-100"
                          From: "transform opacity-0 scale-95"
                          To: "transform opacity-100 scale-100"
                        Leaving: "transition ease-in duration-75"
                          From: "transform opacity-100 scale-100"
                          To: "transform opacity-0 scale-95"
                      -->
                      
                    </div>
                  </div>
                </div>
                <div class="-mr-2 flex md:hidden">
                  <!-- Mobile menu button -->
                  <button type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <!--
                      Heroicon name: outline/menu
        
                      Menu open: "hidden", Menu closed: "block"
                    -->
                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <!--
                      Heroicon name: outline/x
        
                      Menu open: "block", Menu closed: "hidden"
                    -->
                    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
        
            <!-- Mobile menu, show/hide based on menu state. -->
            <div class="md:hidden" id="mobile-menu">
              <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a href="/admin/dashboard" class="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>

                <a href="/admin/categorys" class="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">categorys</a>

                <a href="/admin/product" class="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Product</a>
        
                <a href="/admin/news" class="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">News</a>
                
                <a href="/admin/accounts" class="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Accounts</a>
              </div>
              <div class="pt-4 pb-3 border-t border-gray-700">
                <div class="flex items-center px-5">
                  <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/241519190_1105170456955298_4454964298551639504_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=wQW1BVAM0HoAX-ic436&tn=GAXgTIe1gZJS4IAR&_nc_ht=scontent.fhan15-1.fna&oh=00_AT8dj8M3LBsEZaINn9Oem3odJSnTxCa7f4dFT8DbvYcbiQ&oe=61E69366" alt="">
                  </div>




                  ${localStorage.getItem("user") ? `
                      <div class="flex items-center"><span class="block py-3 px-4 text-black" id="account"></span></div>
                      <div><a href="/" class="block py-3 px-4 text-black text-center  hover:bg-blue-500" id="logout">Logout</a></div>
                  ` : ""}








                  <button type="button" class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span class="sr-only">View notifications</span>
                    <!-- Heroicon name: outline/bell -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </button>
                </div>
                
              </div>
            </div>
          </nav>
            <div class="min-h-full">
              <header class="bg-white shadow ">
                <div class="max-w-7xl text-right p-4">
                  <a href="/home" class="text-gray-400 hover:bg-gray-700 hover:text-white px-3 rounded-md text-sm font-medium" aria-current="page">Trang Web</a>
                  <a href="" class="text-gray-400 hover:bg-gray-700 hover:text-white px-3 rounded-md text-sm font-medium" aria-current="page">Hồ Sơ</a>
                  
                  
                </div>
              </header>
            </div>
      </div>
        `;
    },
    afterRender(){
      const account = document.querySelector('#account');
      const btnLogout = document.querySelector('#logout');
      account.innerHTML = JSON.parse(localStorage.getItem('user')).email;

      btnLogout.addEventListener('click', function(){
         localStorage.removeItem('user');
         alert('Ban da logout thanh cong');
         reRender(Header, "#header");
      })
  }
};
export default Dashboard;