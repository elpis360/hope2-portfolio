import Image from "next/image";
import React from "react";

export function ProjectSection({ data }: { data: ProjectData }) {
  return (
    <div className="flex flex-col gap-5 md:gap-10 text-p_text">
      {data.map((item) => (
        <div key={item.header}>
          <p className="h1-text font-medium mb-5 lg:mb-10">{item.header}</p>
          <div className="mb-5 lg:mb-10">
            {item?.text?.map((text) => (
              <p
                key={text.substring(0, 30)}
                className="p-text text-pri_text mb-2 lg:mb-3"
              >
                {text}
              </p>
            ))}
          </div>
          {item?.image?.map((image) => (
            <div key={image.url} className="my-5 lg:my-10">
              <Image
                alt={image?.alt ?? ""}
                src={image?.url ?? ""}
                width={500}
                height={500}
                priority
                placeholder="blur"
                blurDataURL="/assets/images/hope_image.png"
                className={`${
                  image.style ?? `w-full object-cover  aspect-ratio:16/9 `
                }  `}
              />
              <p className="p-text italic my-1 lg:my-3">{image?.title}</p>
              <div className="my-5 lg:mb-5 grid gap-3 lg:gap-5">
                {image?.after_image?.text?.map((after_image) => (
                  <p className="p_text " key={after_image.substring(0, 8)}>
                    {after_image}
                  </p>
                ))}
              </div>
              <div>
                {image.after_image?.special?.map((item) => (
                  <div
                    key={item.text?.substring(0, 8)}
                    className={item.div_style}
                  >
                    <p className={item.style}>{item?.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="my-3 lg:my-5">
            {item?.sub_sections?.map((sub) => (
              <div key={sub.header}>
                <p className="italic h4-text my-3 lg:my-5 font-medium">
                  {sub.header}
                </p>
                {sub.text?.map((text) => (
                  <p
                    key={text.substring(0, 8)}
                    className="p-text text-pri_text mb-2 lg:mb-3"
                  >
                    {text}
                  </p>
                ))}
                <ul className="grid gap-5 ">
                  {sub?.list?.map((item) => (
                    <li key={item.header} className="p-text list-disc ml-5">
                      <span className="font-bold">{item.header}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <div>
                  {sub.after_text?.map((text) => (
                    <p
                      className="p-text text-pri_text mt-2"
                      key={text.substring(0, 8)}
                    >
                      {text}
                    </p>
                  ))}
                </div>
                {sub?.image?.map((image) => (
                  <div key={image.url} className="my-5 lg:my-10">
                    <p className="text-h4_text font-bold my-2 lg:my-4">
                      {image?.sub_heading}
                    </p>

                    <Image
                      alt={image?.alt ?? ""}
                      src={image?.url ?? ""}
                      width={500}
                      height={400}
                      priority
                      placeholder="blur"
                      blurDataURL="/assets/images/hope_image.png"
                      className={`${
                        image.style ?? `w-full object-cover  aspect-ratio:16/9 `
                      }  `}
                    />
                    <p className="p-text text-center text-pri_text font-light italic my-2 lg:my-3">
                      {image?.title}
                    </p>
                    <div className="my-5 lg:mb-5 grid gap-3 lg:gap-5">
                      {image?.after_image?.text?.map((after_image) => (
                        <p
                          className="p-text text-pri_text"
                          key={after_image.substring(0, 8)}
                        >
                          {after_image}
                        </p>
                      ))}
                    </div>
                    <ul className="grid gap-5 ">
                      {image?.after_image?.list?.map((item) => (
                        <li key={item.header} className="p-text list-disc ml-5">
                          <span className="font-bold">{item.header}</span>
                          {item.text}
                        </li>
                      ))}
                    </ul>
                    <div>
                      {image.after_image?.special?.map((item) => (
                        <div
                          key={item.text?.substring(0, 8)}
                          className={item.div_style}
                        >
                          <p className={item.style}>{item?.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
