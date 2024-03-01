import { HomeCardType } from "@/utils/types/home";

const HomeCard = (props: HomeCardType) => {
  const { header, sub_heading, span } = props;
  return (
    <div className="card p-5 min-h-[200px] flex items-center justify-center flex-1">
      <div>
        <p className="h1-text capitalize font-medium text-center">
          {header}
          <span className="text-base  p-text font-normal capitalize">
            &nbsp;{span}
          </span>
        </p>
        <p className="text-center p-text font-normal capitalize lg:mt-2">
          {sub_heading}
        </p>
      </div>
    </div>
  );
};

export default HomeCard;
