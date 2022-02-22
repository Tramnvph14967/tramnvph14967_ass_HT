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

//accounts
import accounts_list from "./pages/admin/accounts/index";
import add_accounts from "./pages/admin/accounts/add";
import edit_accounts from "./pages/admin/accounts/edit";

//contact
import contacts_list from "./pages/admin/contacts/index";
import add_contacts from "./pages/admin/contacts/add";
import edit_contacts from "./pages/admin/contacts/edit";

//categorys
import categorys_list from "./pages/admin/categorys/index";
import add_categorys from "./pages/admin/categorys/add";
import edit_categorys from "./pages/admin/categorys/edit";


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
    //accounts
    "/admin/accounts": () => {
        print(accounts_list);
    },
    "/admin/accounts/add": () => {
        print(add_accounts);
    },
    "/admin/accounts/edit/:id": ({data}) => {
        print(edit_accounts, data.id);
    },
    //contacts
    "/admin/contacts": () => {
        print(contacts_list);
    },
    "/admin/contacts/add": () => {
        print(add_contacts);
    },
    "/admin/contacts/edit/:id": ({data}) => {
        print(edit_contacts, data.id);
    },
    // DANH MỤC 
    "/admin/categorys": () => {
        print(categorys_list);
    },
    "/admin/categorys/add": () => {
        print(add_categorys);
    },
    "/admin/categorys/edit/:id": ({data}) => {
        print(edit_categorys, data.id);
    },
	
});
router.notFound(() => render("Not Found Page"));
router.resolve();