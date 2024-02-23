import Link from "next/link";
import React from "react";

export function ProjectConclusion({
  prevButton,
  nextButton,
  conclusion_data,
}: {
  prevButton: { text: string; link: string };
  nextButton: { text: string; link: string };
  conclusion_data: ConclusionData;
}) {
  return (
    <section className="screen-center my-5 lg:my-10 text-pri_text">
      <div>
        <p className="h4-text font-medium italic mb-3">Conclusion</p>
        <div className="grid gap-3 lg:gap-5 p-text my-3 lg:my-5">
          <div className="">
            {conclusion_data?.text?.map((item) => (
              <p key={item.substring(0, 8)} className="p-text">
                {item}
              </p>
            ))}
          </div>
          <ul>
            {conclusion_data?.list?.map((item) => (
              <li key={item.substring(0, 8)} className="p-text list-disc ml-5">
                {item}
              </li>
            ))}
          </ul>
          <div className="">
            {conclusion_data?.after_text?.map((item) => (
              <p key={item.substring(0, 8)} className="p-text">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5 lg:mt-10 flex justify-between items-center">
        <Link href={prevButton.link}>
          <p className="p_text text-primary underline">{prevButton.text}</p>
        </Link>
        <Link href={nextButton.link}>
          <p className="text-p_text text-primary underline">
            {nextButton.text}
          </p>
        </Link>
      </div>
    </section>
  );
}
