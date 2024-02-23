import React from "react";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AlternateEmail, CloseSharp } from "@mui/icons-material";
import { Home2, Menu } from "iconsax-react";
import { PiProjectorScreen } from "react-icons/pi";
import { Icon } from "@iconify/react";
import { Logo } from "../logo";
import { useRouter } from "next/router";
import { Drawer } from "@mui/material";
import { FcCancel } from "react-icons/fc";
import { CloseButton } from "@mantine/core";
import { MdOutlineMenu } from "react-icons/md";

export function Navbar() {
  const [toggleModal, setToggleModal] = React.useState(false);
  const router = useRouter();
  const size = 24;
  const navbar_list = [
    { link: "/", icon: <Home2 size={size} />, name: "home" },
    {
      link: "/projects",
      icon: <PiProjectorScreen size={size} />,
      name: "projects",
    },
    { link: "/about", icon: <AlternateEmail />, name: "about" },
    {
      link: "/contact",
      icon: (
        <Icon
          icon="fluent:book-contacts-24-filled"
          width={size}
          height={size}
        />
      ),
      name: "contact",
    },
  ];

  const drawer = (
    <div className="mx-auto grid gap-5 bg-black">
      {navbar_list.map((item) => (
        <div key={item.name}>
          <Link href={item.link}>
            <ListItem
              disablePadding
              sx={{
                color: router.pathname === item.link ? "#ffffff" : "#ACACAC",
                "&:hover": {
                  color: "primary",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: router.pathname === item.link ? "#ffffff" : "#ACACAC",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: router.pathname === item.link ? "#ffffff" : "#ACACAC",
                  textTransform: "capitalize",
                }}
              >
                {item.name}
              </ListItemText>
            </ListItem>
          </Link>
        </div>
      ))}
    </div>
  );
  return (
    <nav aria-label="mobile navigation" className="bg-black">
      <div className=" bg-black   w-full lg:hidden  sticky top-0 right-0">
        <div className="justify-between flex items-center screen-center">
          <div>
            <Logo width="30" />
          </div>

          <button
            aria-label="open drawer"
            onClick={() => setToggleModal(!toggleModal)}
          >
            <MdOutlineMenu color="white" size={30} />
          </button>
        </div>
      </div>
      <Drawer
        open={toggleModal}
        onClose={() => setToggleModal(!toggleModal)}
        anchor="top"
      >
        <div className="bg-black border border-border">
          <div className="screen-center mb-10">
            <div className="flex items-center justify-between ">
              <div>
                <Logo width="30" />
              </div>

              <button
                aria-label="open drawer"
                onClick={() => setToggleModal(!toggleModal)}
              >
                <CloseButton color="white" />
              </button>
            </div>
            {drawer}
          </div>
        </div>
      </Drawer>
      <div className="hidden lg:block">
        <div className="bg-black">
          <div className="items-center flex justify-center my-10 screen-center">
            <Logo />
          </div>
          <div className="flex justify-center">{drawer}</div>
        </div>
      </div>
    </nav>
  );
}
