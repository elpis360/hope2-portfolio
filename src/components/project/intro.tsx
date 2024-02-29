import Image from "next/image";
import React from "react";

export function ProjectIntro({
  hero_image,
  title,
  data,
}: {
  hero_image: string;
  title: string;
  data: Array<{ title: string; text: string }>;
}) {
  return (
    <div className="">
      <Image
        alt={title}
        src={hero_image}
        width={300}
        height={200}
        priority
        placeholder="blur"
        blurDataURL="/assets/images/hope_image.png"
        className="w-full object-cover  aspect-ratio:16/9 "
      />
      <div className="screen-center my-10 ">
        {data.map((item) => (
          <div
            className=" md:grid grid-cols-5 mb-5 text-pri_text"
            key={item.title}
          >
            <p className="col-span-1 mb-2 md:mb-0 h4-text font-medium">
              {item.title}
            </p>
            <p className="col-span-4 p-text ">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
