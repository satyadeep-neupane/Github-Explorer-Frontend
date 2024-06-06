import { IoSearch } from "react-icons/io5";

export default function App() {
    return (
        <div class="container mx-auto h-screen bg-custom-black">
            <h1 className="text-custom-white text-6xl font-semibold text-center pt-[7rem]">
                GitHub Explorer
            </h1>
            <form>
                <div class="mt-7">
                    <div class="relative w-5/12 mx-auto">
                        <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                            <IoSearch className="text-white" />
                        </span>
                        <input
                            name="q"
                            type="search"
                            class="pl-10 w-full bg-transparent border-white border-2 px-3.5 py-2 focus:border-gray-500 focus:ring-0 rounded-md shadow-sm text-white"
                            placeholder="Search Github"
                        />
                    </div>
                </div>
                <div className="mt-12">
                    <img
                        className="mx-auto"
                        src="https://github.com/images/modules/search/home-desktop-light.png"
                    />
                </div>
            </form>
        </div>
    );
}
