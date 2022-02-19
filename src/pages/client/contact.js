import { add } from "../../api/contacts";
const Contact = {
    render() {
        return /* html */`
        <div class=" p-2 mx-auto">
        <div class="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
        <div class=" mx-auto px-6 sm:px-6 lg:px-8 mb-12">
            <div class="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
                <p class="text-3xl font-bold leading-7 text-center">Contact me</p>
                <form action="" method="post" id="form-add">
                    <div class="md:flex items-center mt-12">
                        <div class="w-full md:w-1/2 flex flex-col">
                            <label class="font-semibold leading-none">Name</label>
                            <input id="name-contacts" type="text" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                        </div>
                        <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label class="font-semibold leading-none">Phone</label>
                            <input id="phone-contacts" type="phone" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                        </div>
                    </div>
                    <div class="md:flex items-center mt-8">
                        <div class="w-full flex flex-col">
                            <label class="font-semibold leading-none">Gmail</label>
                            <input id="gmail-contacts" type="gmail" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                        </div>
                        
                    </div>
                    <div>
                        <div class="w-full flex flex-col mt-8">
                            <label class="font-semibold leading-none">Message</label>
                            <textarea id="message-contacts" type="text" class="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                        </div>
                    </div>
                    <div class="flex items-center justify-center w-full">
                        <button type="submit" class="btn mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                            Send message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
        `;
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add");
    
          formAdd.addEventListener("submit", (e) => {
            e.preventDefault();

            add({

                "name": document.querySelector('#name-contacts').value,
                "phone": document.querySelector('#phone-contacts').value,
                "gmail": document.querySelector('#gmail-contacts').value,
                "message": document.querySelector('#message-contacts').value,
                
            });
                document.location.href="/";
          });
    
      },
};
export default Contact;