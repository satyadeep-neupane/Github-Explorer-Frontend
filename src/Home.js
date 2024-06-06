import { IoSearch } from "react-icons/io5";

export default function App() {
    return (
        <main className="container-full mx-auto h-screen bg-custom-black">
            <header className="text-center pt-[7rem]">
                <h1 className="text-custom-white text-6xl font-semibold">
                    GitHub Explorer
                </h1>
            </header>
            <section>
                <form aria-label="Search GitHub">
                    <div className="mt-7">
                        <div className="relative w-10/12 md:w-8/12 lg:w-6/12 max-w-2xl mx-auto">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                <IoSearch className="text-white" />
                            </span>
                            <input
                                name="q"
                                type="search"
                                className="pl-10 w-full bg-transparent border-white border-2 px-3.5 py-2 focus:border-gray-500 focus:ring-0 rounded-md shadow-sm text-white"
                                placeholder="Search GitHub"
                            />
                        </div>
                    </div>
                    <div className="mt-12">
                        <img
                            className="mx-auto"
                            src="https://github.com/images/modules/search/home-desktop-light.png"
                            alt="GitHub search illustration"
                        />
                    </div>
                </form>
            </section>
        </main>
    );
}
