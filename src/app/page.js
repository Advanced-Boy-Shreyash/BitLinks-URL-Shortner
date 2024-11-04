import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBoldItalic.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL Shortner in the Market
          </p>
          <p className="px-28">
            We are the most straightforward URL Shortner in the world. Most of
            the URL Shortners will track you and ask you for login. But we are
            solving this problem by not asking for your details and without
            tracking you.
          </p>
          <div className="flex gap-3">
            <Link href="/shorten">
              <button className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold">
                GitHub
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image
            className="mix-blend-darken"
            alt="Office Image"
            src={"/vector.jpg"}
            fill={true}
          />
        </div>
      </section>
    </main>
  );
}
