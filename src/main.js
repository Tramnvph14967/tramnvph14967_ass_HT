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
export const router = new Navigo("/", { linksSelector: "a" });

const render = (content) => {
    document.getElementById("header").innerHTML = Header.print();
    document.getElementById("content").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.print();
    
};

router.on({
    "/": () => {
        render(HomePage.print());
    },
    "/home": () => {
        render(HomePage.print());
    },
    "/Product": () => {
        render(Product.print());
    },
    "/news/:id": (value) =>{
        console.log(value.data.id);
        render(DetailNewsPage.print(value.data.id));
    },
    "/contact": () => {
        render(Contact.print());
    },
    "/signin": () => {
        render(signin.print());
    },
    "/signup": () => {
        render(Signup.print());
    },
    "/cart": () => {
        render(cart.print());
    },
    "/error": () => {
        render(error.print());
    },
});
router.notFound(() => print("Not Found Page"));
router.resolve();