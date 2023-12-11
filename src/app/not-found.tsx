import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mt-10 flex flex-col justify-center items-center">
      <h1 className="text-[120px] sm:text-[200px] font-black text-white tracking-widest font-display">
        404
      </h1>
      <div className="bg-[#ff3d3d] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button>
        <Link href="/">
          <span className="transition-all ease-in-out relative inline-block text-sm font-medium text-[#ff3d3d] group  focus:outline-none focus:ring hover:bg-[#ff3d3d] hover:text-black">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5  group-hover:translate-y-0 group-hover:translate-x-0"></span>
            <span className="relative block px-8 py-3  border border-current">
              Go Home
            </span>
          </span>
        </Link>
      </button>
    </main>
  );
}
