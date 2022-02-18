import Navigo from "navigo";
import Header from "./components/admin/header";
import Footer from "./components/admin/footer";
import dashboard from "./pages/admin/dashboard";

//product
import Product from "./pages/admin/product/index";
import Add from "./pages/admin/product/add";
import Edit from "./pages/admin/product/edit";

//news
import news_list from "./pages/admin/news/index";
import add_news from "./pages/admin/news/add";
import edit_news from "./pages/admin/news/edit";


import { router } from "./main";

const print = async (content, id) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("content").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/admin/dashboard": () => {
        print(dashboard);
    },
    //product
    "/admin/product": () => {
        print(Product);
    },
    "/admin/product/add": () => {
        print(Add);
    },
    "/admin/product/edit/:id": ({data}) => {
        print(Edit, data.id);
    },
    //news
    "/admin/news": () => {
        print(news_list);
    },
    "/admin/news/add": () => {
        print(add_news);
    },
    "/admin/news/edit/:id": ({data}) => {
        print(edit_news, data.id);
    },
});
router.notFound(() => render("Not Found Page"));
router.resolve();