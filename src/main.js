import Navigo from "navigo";
import Nav from "./component/client/nav";
import Header from "../src/component/client/header";
import Footer from "../src/component/client/footer";
export const router = new Navigo("/", { linksSelector: "a" });

const render = (content) => {
    document.getElementById("header").innerHTML = Header.print();
    document.getElementById("content").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.print();
    
};

router.on({
    "/": () => {
        render(Signup.print());
    },
    "/home": () => {
        render(HomePage.print());
    },
    "/news": () => {
        render(News.print());
    },
    "/news/:id": (value) =>{
        console.log(value.data.id);
        render(DetailNewsPage.print(value.data.id));
    },
    "/signin": () => {
        render(signin.print());
    },
    "/signup": () => {
        render(Signup.print());
    },
});
router.notFound(() => print("Not Found Page"));
router.resolve();