import { HomeCardType } from "@/utils/types/home";
import { Card, CardContent } from "@mui/material";
import { Header } from "../Texts/Header";
import { Paragraph } from "../Texts/Paragraph";

const HomeCard = (props: HomeCardType) => {
  const { header, sub_heading, span } = props;
  return (
    <div className="card">
      <div>
        <Header>
          {header}
          <span className="text-base ml-1">{span}</span>
        </Header>
        {sub_heading && <p>{sub_heading}</p>}
      </div>
    </div>
  );
};

export default HomeCard;
