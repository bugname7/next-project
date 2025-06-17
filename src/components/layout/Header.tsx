import Link from "next/link";
import Navbar from "../Navbar";

export default function Header() {
    return (
        <header className="bg-gray-600 text-white">
            <div className="container mx-auto flex items-center w-[1200px] justify-between py-4">
                <Link href='/' className="text-2xl font-bold tracking-wider">Logo</Link>
                <Navbar />
            </div>
        </header>
    );
}
