import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-primary pt-20 pb-40 sm:py-20 px-5 sm:px-10">
      <div className="flex items-center justify-between pt-16 md:pb-72 sm:pb-64 pb-56 flex-col lg:flex-row container mx-auto gap-10 ">
        <div className="w-full grid grid-cols-6 gap-3 grid-rows-6 justify-items-center items-center overflow-hidden">
          <div className="overflow-hidden row-span-2 col-span-2 ">
            <Image
              src="/img/building/city1.jpg"
              height={200}
              className="object-cover rounded-tl-large "
              width={200}
              quality={100}
              blurDataURL="/img/building/city1.jpg"
              placeholder="blur"
            />
          </div>
          <div className="overflow-hidden row-span-2 col-span-2 self-end justify-self-start">
            <Image
              src="/img/building/city6.jpg"
              height={90}
              className="object-cover rounded-3xl"
              quality={10}
              width={90}
              blurDataURL="/img/building/city6.jpg"
              placeholder="blur"
            />
          </div>
          <div className="overflow-hidden row-span-2 col-span-2 justify-self-start self-end">
            <Image
              src="/img/building/city3.jpg"
              height={120}
              className="object-cover rounded-tr-large"
              width={120}
              quality={100}
              blurDataURL="/img/building/city3.jpg"
              placeholder="blur"
            />
          </div>

          <div className="overflow-hidden row-span-2 col-span-2 justify-self-end ">
            <Image
              src="/img/building/city7.jpg"
              height={100}
              className="object-cover rounded-bl-medium"
              quality={100}
              width={100}
              blurDataURL="/img/building/city7.jpg"
              placeholder="blur"
            />
          </div>
          <div className="overflow-hidden row-span-2 col-span-2">
            <Image
              src="/img/building/city2.jpg"
              height={200}
              className="object-cover rounded-tr-large"
              quality={100}
              width={200}
              blurDataURL="/img/building/city2.jpg"
              placeholder="blur"
            />
          </div>
          <div className="overflow-hidden row-span-4 col-span-2">
            <Image
              src="/img/building/city4.jpg"
              height={200}
              className="object-cover rounded-br-large"
              quality={100}
              width={200}
              blurDataURL="/img/building/city4.jpg"
              placeholder="blur"
            />
          </div>
          <div className="overflow-hidden row-span-2 col-span-2 justify-self-end self-start">
            <Image
              src="/img/building/city10.jpg"
              height={120}
              className="object-cover rounded-bl-large"
              quality={100}
              width={120}
              blurDataURL="/img/building/city10.jpg"
              placeholder="blur"
            />
          </div>
          <div className="overflow-hidden row-span-2 col-span-2 justify-self-end self-start">
            <Image
              src="/img/building/city8.jpg"
              height={120}
              className="object-cover rounded-br-medium"
              quality={100}
              width={120}
              blurDataURL="/img/building/city8.jpg"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className=" space-y-4 mb-4">
            <h1 className="text-5xl">Hookah Association</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary.
            </p>
            <div className="space-x-4">
              <button className="btn text-white bg-black">Join us</button>
              <button className="btn bg-white text-black border-2 border-black">
                Donate
              </button>
            </div>
          </div>
          <hr />
          <div className="">
            <p className="mt-4">Have any questions ?</p>
            <p>Contact Us!</p>
            <p className="mt-3 text-3xl">+79823928398239</p>
          </div>
        </div>
      </div>
    </div>
  );
}
