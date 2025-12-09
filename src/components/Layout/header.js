export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white z-50">
           <div className="border-b">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <h1 className="text-2xl cursor-pointer font-bold font-serif tracking-tight">
                        <span className="bg-red-800 text-white px-2 py-1 rounded-full">
                            P
                        </span>
                        <span className="ml-1">
                            Palabras
                        </span>
                        </h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative hidden md:block">
                            <Input
                                placeholder="Search"
                                className="pl-10 pr-4 py-1 w-64 ronded-full bg-gray-100 border border-gray-300 text-gray-900 focus:ring-gray-500 focus:border-gray-500"
                            />
                            <Search
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                            />
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </header>
    );
}