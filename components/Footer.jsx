export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 py-8 text-center text-gray-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm">
          &copy; {currentYear} Thread Polish AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
