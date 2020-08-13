import { Menu, MenuItem, Typography } from "@material-ui/core";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { useTranslation } from "react-i18next";

export const menuItems: any = {
  M1TV: "/games",
  Friends: "/games",
  Inventory: "/games",
};

const ITEM_HEIGHT = 48;
export default function MobileMenu() {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <MenuIcon onClick={handleClick} style={{ cursor: "pointer" }} />
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {Object.keys(menuItems).map((v: any, k: number) => (
          <Link to={menuItems[v]}>
            <MenuItem key={k} onClick={() => null} component={"span"}>
              <Typography color={"textSecondary"}>{t(v)}</Typography>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </>
  );
}
