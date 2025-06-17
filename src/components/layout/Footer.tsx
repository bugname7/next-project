import Link from "next/link";

export default function Footer() {
    return (
        <footer className="p-4 bg-gray-800 text-white text-center text-sm">
            &copy; 2025 Barcha huquqlar himoyalangan. <br />
            <Link href="/" className="text-2xl hover:underline">Homega qaytish</Link>
        </footer>
    );
}
