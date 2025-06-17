import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="  p-4">
            <ul className="flex gap-6">
                <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
                <li><Link href="/about" className="hover:text-red-500">About</Link></li>
                <li><Link href="/blog" className="hover:text-red-500">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-red-500">Contact</Link></li>
            </ul>
        </nav>
    );
}
