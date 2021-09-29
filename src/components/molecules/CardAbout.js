import Image from "next/image";

export default function CardAbout({ shadow }) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between mx-auto gap-5 sm:gap-10 ${
        shadow ? "shadow-md bg-white p-5 sm:p-10" : "md:flex-row-reverse"
      } text-black container`}
    >
      <div className="w-full sm:w-3/4 ms:w-1/2 space-y-4">
        <p className="uppercase font-bold">who We Are</p>
        <h1 className="sm:text-5xl text-2xl  font-semibold">About Us</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus
          libero ac mi interdum, eu volutpat lectus vestibulum. Quisque
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          maximus diam. Ut interdum non lorem vulputate sodales. Phasellus sed
          vulputate eros. Maecenas sit amet ante a lacus semper lobortis.
        </p>
        <p className="text-sm mb-5 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          maximus diam. Ut interdum non lorem vulputate sodales. Phasellus sed
          vulputate eros. Maecenas sit amet ante a lacus semper lobortis.
        </p>
        <button className="btn text-white bg-black">Read more</button>
      </div>
      <div
        className={`hidden md:block md:w-1/2 overflow-hidden ${
          shadow && "text-right"
        }`}
      >
        <Image
          src="/img/building/city9.jpg"
          height={600}
          alt="city9"
          className="object-cover"
          width={650}
          quality={100}
          blurDataURL="/img/building/city9.jpg"
          placeholder="blur"
        />
      </div>
    </div>
  );
}
