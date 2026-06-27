import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="bg-black min-h-screen text-gray-100 flex flex-col relative selection:bg-neutral-800 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow pt-20 md:pt-24 relative z-10 w-full overflow-hidden">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
