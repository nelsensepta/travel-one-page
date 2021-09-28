import Image from "next/image";
import Link from "next/link";

export default function CardPost({
  url,
  width,
  height,
  slug,
  content,
  date,
  title,
}) {
  return (
    <div className="shadow-lg hover:shadow-2xl overflow-hidden rounded">
      <Image
        src={url}
        width={width}
        height={height}
        layout="responsive"
        className="hover:scale-105 transform transition-all duration-400 cursor-pointer w-full h-56 object-cover"
        quality={100}
        blurDataURL={url}
        placeholder="blur"
      />
      <div className="flex flex-col items-start justify-start space-y-4 p-5 leading-relaxed">
        <h1 className="text-2xl">{title}</h1>
        <p className="text-md">{content}</p>
      </div>
      <div className="flex justify-between items-center p-5">
        <p>{date}</p>
        <Link href={`/${slug}`}>
          <a>Read more</a>
        </Link>
      </div>
    </div>
  );
}
