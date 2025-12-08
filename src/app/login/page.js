import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="min-h-screen w-full flex flex-col md:flex-row bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 lg:p-12">
                <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-lg">
                    <div className="space-y-2 text-center">
                       <h1 className="text-3xlfont-bold tracking-tight text-gray-900">
                         Login
                       </h1>
                       <p className="text-sm text-gray-500">
                        Sign in to your account to continue                       </p>
                       <LoginForm/>
                       <p className="text-center text-sm text-gray-600">
                        Don't have an account ?
                        <Link className="font-semibold ml-2 text-red-700 hover:text-red-500" href="/login">
                        Register
                        </Link>
                        </p>
                    </div>
                </div>
            </div>
            
                <div className="hidden md:flex w-1/2 p-12 items-center justify-center relative">
                <div className="max-w-lg space-y-6 text-white z-10">
                    <h2 className="text-4xl text-black font-medium">
                        Join Palabras, create a blog  & share your thoughts
                    </h2>
                    <p className="text-right text-lg text-black font-bold">-Bismay</p>
                </div>
                <div className="absolute inset-0 bg-black opacity-50">
                    <img src="https://imgs.search.brave.com/aTA9ev41lStr_e_CWw6yiOl_GvevHuALyQ51GmQfSBw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/My8yMi8xNS8yNi9i/bG9nLTY4NDc0OF82/NDAuanBn"
                    className="absolute inset-0 object-cover w-full h-full"
                    />
                </div>
                </div>
        </div>
    )
}