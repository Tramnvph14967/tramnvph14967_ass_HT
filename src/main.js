import Navigo from "navigo";
import HomePage from "./pages/client/home";
import Footer from "./components/client/footer";
import Header from "./components/client/header";
import DetailNewsPage from "./pages/client/detailNews";
import signin from "./pages/client/signin";
import Signup from "./pages/client/signup";
import Contact from "./pages/client/contact";
import Product from "./pages/client/product";
import cart from "./pages/client/cart";
import error from "./pages/client/404";

export const router = new Navigo("/", { linksSelector: "a", hash: true });// router thừa kế các thuộc tính của NAvigo, link để không load trang


const print = async (content, id) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("content").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
    document.getElementById("footer").innerHTML = Footer.render();
};


router.on({
    "/": () => {
        print(HomePage);
    },
    "/home": () => {
        print(HomePage);
    },
    "/Product": () => {
        print(Product);
    },
    "/news/:id": (value) =>{
        console.log(value.data.id);
        print(DetailNewsPage.render(value.data.id));
    },
    "/contact": () => {
        print(Contact);
    },
    "/signin": () => {
        print(signin);
    },
    "/signup": () => {
        print(Signup);
    },
    "/cart": () => {
        print(cart);
    },
    "/error": () => {
        print(error);
    },
    
});

router.resolve();