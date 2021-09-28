import Link from "next/link";
import Sosmed from "./molecules/Sosmed";

export default function Footer() {
  return (
    <div className="bg-black text-white py-20 px-10">
      <div className="container mx-auto">
        <h1 className="text-center py-5 text-3xl font-bold">Logo</h1>
        <div className="flex items-center justify-center py-5">
          <div className="flex items-center justify-center gap-6">
            <Link href="#">
              <a className="hover:underline">Home</a>
            </Link>
            <Link href="#">
              <a className="hover:underline">About</a>
            </Link>
            <Link href="#">
              <a className="hover:underline">Advocacy</a>
            </Link>
            <Link href="#">
              <a className="hover:underline">Blog</a>
            </Link>
            <Link href="#">
              <a className="hover:underline">Membersip</a>
            </Link>
          </div>
        </div>
        <hr className="opacity-40" />
        <div className="flex items-center justify-between pt-6">
          <p className="text-sm">&copy; Ninja Assasins. All Right Reserved</p>
          <Sosmed />
        </div>
      </div>
    </div>
  );
}
