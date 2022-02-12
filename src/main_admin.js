import Navigo from "navigo";
import Header from "./components/admin/header";
import Footer from "./components/admin/footer";
import dashboard from "./pages/admin/dashboard";
import News from "./pages/admin/news/index";
import Add from "./pages/admin/news/add";
import Edit from "./pages/admin/news/edit";


import { router } from "./main";

const render = (content) => {
    document.getElementById("header").innerHTML = Header.print();
    document.getElementById("content").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.print();
};

router.on({
    "/admin/dashboard": () => {
        render(dashboard.print());
    },
    "/admin/news": () => {
        render(News.print());
    },
    "/admin/news/add": () => {
        render(Add.print());
    },
    "/admin/news/edit/:id": (value) => {
        render(Edit.print(value.data.id));
    },
   
    
   
});
router.notFound(() => print("Not Found Page"));
router.resolve();