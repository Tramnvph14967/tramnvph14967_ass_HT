import header from "../../components/admin/header";
const AboutPage = {
    render() {
        return /* html */`
            <div class="p-2 mx-auto">
                <main>
                    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <!-- Replace with your content -->
                    <div class="px-4 py-6 sm:px-0">
                        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
                        
                        </div>
                    </div>
                    <!-- /End replace -->
                    </div>
                </main>
            </div>
        `;
    },
    afterRender() {
        header.afterRender();
      },
    
};
export default AboutPage;