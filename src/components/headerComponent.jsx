import React from "react";
import { motion as a } from "framer-motion";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Paper
} from "@material-ui/core";
import { Link } from "react-router-dom";

//img

const headerVariants = {
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.2,
      // type:'spring',
      // stiffness:120
      staggerChildren: 0.5,
    },
  },
  initial: {
    opacity: 0,
  },
};

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/mentors",
  },
  {
    label: "About",
    href: "/account",
  },
  {
    label: "Log In/Out",
    href: "/logout",
  },
];

const newStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#EEEEEE",
    position: "relative",
    borderRadius:'10px',
    boxShadow: "3px 3px 3px  gray",
    color: "gray",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButton: {
    fontWeight: 700,
    // size: "18px",
  },
}));

export const Header = () => {
  const { header, toolbar, menuButton } = newStyles();

  return (
    <a.div
      variants={headerVariants}
      animate="animate"
      initial="initial"
      transition="transition"
    >
        <AppBar className={header}>
            <Toolbar className={toolbar}>
            <Typography>HEADER</Typography>

            <div className={menuButton}>
                {headersData.map(({ label, href }) => {
                return (
                    <Button
                    {...{
                        key: label,
                        color: "inherit",
                        to: href,
                        component: Link,
                    }}
                    >
                    {label}
                    </Button>
                );
                })}
            </div>
            </Toolbar>
        </AppBar>
    </a.div>
  );
};
