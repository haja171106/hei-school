export default function Footer() {
    return (
        <footer className="bg-gray-800 p-4 text-white text-center">
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} HEI School. All rights reserved.</p>
                <p>Follow us on 
                    <a href="https://twitter.com" className="text-blue-400 hover:underline"> Twitter</a>, 
                    <a href="https://facebook.com" className="text-blue-400 hover:underline"> Facebook</a>, and 
                    <a href="https://instagram.com" className="text-blue-400 hover:underline"> Instagram</a>.
                </p>
            </div>
        </footer>
    );
}