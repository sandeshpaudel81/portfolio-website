export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-sm text-gray-600 flex justify-between">
        <span>© {new Date().getFullYear()} Sandesh Paudel</span>
        <span>Built with Next.js</span>
      </div>
    </footer>
  );
}
