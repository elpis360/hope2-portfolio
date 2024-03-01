type ProjectIntroItem = {
  title: string;
  text: string;
};

type ProjectDataItem = {
  header: string;
  text?: string[];
  image?: DataImage[];
  sub_sections?: {
    header?: string;
    text?: string[];
    list?: { header?: string; text?: string }[];
    image?: DataImage[];
    after_text?: string[];
  }[];
};

type ProjectData = Array<ProjectDataItem>;
type DataImage = {
  url?: string;
  alt?: string;
  style: string;
  title?: string;
  sub_heading?: string;
  after_image?: {
    text?: string[];
    list?: { header?: string; text?: string }[];
    special?: Array<Special>;
  };
};
type ConclusionData = {
  text?: string[];
  list?: string[];
  after_text?: string[];
};

type Special = {
  text?: string;
  style?: string;
  div_style?: string;
};
