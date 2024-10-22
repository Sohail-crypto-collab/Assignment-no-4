// tailwindcss.com
// Windows/Linux: Shift + Alt + F
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <div>
          <nav className="bg-sky-900 p-4">
            <div className="absolute left-3 top-[1%]">
              <Image src="/logo.png" alt="good" width={100} height={100} />
            </div>

            <div className="mx-auto flex justify-end font-bold">
              <div className="text-white px-28">
                <h1>Tuition Free Education Program on Latest Technologies</h1>
              </div>
              <a href="/Home" className="text-white px-3">
                Home
              </a>
              <a href="/Apply" className="text-white px-3">
                Apply
              </a>
              <a href="/Job" className="text-white px-3">
                Job
              </a>
              <a href="/Contact" className="text-white px-3">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      <div className="flex gap-7  justify-center p-20">
        <div className="bg-red-400 h-96  w-96 rounded-xl shadow-2xl shadow-black "></div>
        <div className="bg-yellow-400 h-96  w-96 rounded-xl shadow-2xl shadow-black "></div>
        <div className="bg-blue-400 h-96  w-96 rounded-xl shadow-2xl shadow-black  "></div>
      </div>

      <div className="flex gap-7 justify-center p-20">
        <div className="bg-red-400 h-96  w-96 rounded-xl shadow-2xl shadow-black  "></div>
        <div className="bg-yellow-400 h-96  w-96 rounded-xl shadow-2xl shadow-black"></div>
      </div>

      <footer className="bg-gray-800 text-white py-6 text-2xl">
        <div className=" text-center">
          <p className="mb-2">© 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
