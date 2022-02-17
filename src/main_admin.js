import Navigo from "navigo";
import Header from "./components/admin/header";
import Footer from "./components/admin/footer";
import dashboard from "./pages/admin/dashboard";
import News from "./pages/admin/news/index";
import Add from "./pages/admin/news/add";
import Edit from "./pages/admin/news/edit";


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
    "/admin/news": () => {
        print(News);
    },
    "/admin/news/add": () => {
        print(Add);
    },
    "/admin/news/edit/:id": ({data}) => {
        print(Edit, data.id);
    },
});
router.notFound(() => render("Not Found Page"));
router.resolve();