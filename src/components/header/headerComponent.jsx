import React, { useContext } from "react";
import { motion as a } from "framer-motion";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Paper,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import { UserContext } from "../../context/userContext";

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

const newStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#EEEEEE",
    position: "relative",
    borderRadius: "10px",
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
  const { user } = useContext(UserContext);
  const { header, toolbar, menuButton } = newStyles();

  const headersData = [
    {
      id: 0,
      label: "About",
      href: "/about",
    },
    {
      id: 1,
      label: "Services",
      href: "/services",
    },
    {
      id: 2,
      label: `${user ? "Log Out" : "log In"}`,
      href: "/log",
    },
  ];

  return (
    <a.div
      variants={headerVariants}
      animate="animate"
      initial="initial"
      transition="transition"
      style={{ paddingTop: "20px", paddingLeft: "20px" }}
    >
      <AppBar className={header}>
        <Toolbar className={toolbar}>
          <Link to="/">
            <Typography>HEADER</Typography>
          </Link>

          <div className={menuButton}>
            {headersData.map(({ id, label, href }) => {
              return (
                <Button
                  {...{
                    key: id,
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
