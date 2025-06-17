import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="  p-4">
            <ul className="flex gap-6">
                <li><Link href="/" className="hover:text-red-500  font-normal ">Home</Link></li>
                <li><Link href="/about" className="hover:text-red-500  font-normal">About</Link></li>
                <li><Link href="/blog" className="hover:text-red-500  font-normal">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-red-500  font-normal">Contact</Link></li>
            </ul>
        </nav>
    );
}
