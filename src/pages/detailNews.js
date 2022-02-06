import data from "../data";
const DetailNewsPage = {
    print(id) {
        
        const result = data.find((post) => post.id == id);
        
        return `
        <div class="max-w-5xl mx-auto" >
            <h1>${result.title}</h1>
            <img src="${result.img}" />
            <div>${result.desc}</div>
        </div>
        `;
    },
};
export default DetailNewsPage;