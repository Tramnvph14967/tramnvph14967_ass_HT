const Nav = {
    print() {
        return /* html */`
        <nav>
        <ul class="flex justify-around">
            <li><a href="/home" class="block py-3 px-4 text-white hover:bg-blue-500">Trang chủ</a></li>
            <li><a href="/news" class="block py-3 px-4 text-white hover:bg-blue-500"> News </a></li>
            <li><a href="/signin" class="block py-3 px-4 text-white hover:bg-blue-500">Signin</a></li>
            <li><a href="/signup" class="block py-3 px-4 text-white hover:bg-blue-500">Signup</a></li>
            <li><a href="/admin/dashboard" class="block py-3 px-4 text-white hover:bg-blue-500">Admin</a></li>
            
          <div class="action py-3 px-4">
            <input type="text">
            <button class="bg-[#272f54] text-white w-20 hover:bg-red-800" type="submit"> Tìm kiếm </button>
          </div>
        </ul>
  
      </nav>`;
    },
};
export default Nav;