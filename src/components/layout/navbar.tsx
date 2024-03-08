import React from "react";
import Link from "next/link";
import { AlternateEmail } from "@mui/icons-material";
import { CloseCircle, Home2 } from "iconsax-react";
import { PiProjectorScreen } from "react-icons/pi";
import { Icon } from "@iconify/react";
import { Logo } from "../logo";
import { useRouter } from "next/router";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Group, NavLink } from "@mantine/core";

import { MdOutlineMenu } from "react-icons/md";

export function Navbar() {
  const [opened, { open, close }] = useDisclosure(false);

  const router = useRouter();
  const size = 24;
  const navbar_list = [
    { link: "/", icon: <Home2 size={size} />, name: "Home" },
    {
      link: "/projects",
      icon: <PiProjectorScreen size={size} />,
      name: "Projects",
    },
    { link: "/about", icon: <AlternateEmail />, name: "About" },
    {
      link: "/contact",
      icon: (
        <Icon
          icon="fluent:book-contacts-24-filled"
          width={size}
          height={size}
        />
      ),
      name: "Contact",
    },
  ];

  const drawer = (
    <div className="mx-auto grid gap-10 bg-black text-p">
      {navbar_list.map((item) => (
        <div key={item.name}>
          <Link href={item.link}>
            <NavLink
              icon={item.icon}
              label={item.name}
              active={router.pathname === item.link}
              color="gray"
              variant="subtle"
              classNames={{
                root: "text-white",
              }}
            />
          </Link>
        </div>
      ))}
    </div>
  );
  return (
    <nav
      aria-label="mobile navigation "
      className="bg-black relative mb-[3.5rem] z-20"
    >
      <div className=" bg-black   w-full lg:hidden  fixed h-[3.5rem]   top-0 left-0">
        <div className="justify-between flex items-center screen-center">
          <div>
            <Logo width="30" />
          </div>

          <button aria-label="open drawer" onClick={open}>
            <MdOutlineMenu color="white" size={30} />
          </button>
        </div>
      </div>
      <Drawer
        opened={opened}
        onClose={close}
        position="top"
        color="dark-9"
        overlayProps={{ color: "black" }}
        classNames={{
          content: "bg-black border ",
          header: "bg-black hidden",
        }}
      >
        <div className="screen-center mb-10">
          <div className="flex items-center justify-between my-10">
            <div>
              <Logo width="30" />
            </div>

            <button aria-label="open drawer" onClick={close}>
              <CloseCircle color="white" />
            </button>
          </div>
          {drawer}
        </div>
      </Drawer>
      <div className="hidden lg:block fixed h-full  w-[15%] ">
        <div className="bg-black w-full">
          <div className="items-center flex justify-center my-10 mb-20 screen-center mx-auto">
            <Logo />
          </div>
          <div className="flex justify-center items-center">{drawer}</div>
        </div>
      </div>
    </nav>
  );
}
