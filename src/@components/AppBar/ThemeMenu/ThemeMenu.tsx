import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { ThemeColorsType } from '../../../@types';

const options = [
  'light',
  'dark',
  'deepPurpleAmber',
  'pinkBlueGrey',
] as ThemeColorsType[];

const ThemeMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  //   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  //   const handleMobileMenuClose = () => {
  //     setMobileMoreAnchorEl(null);
  //   };

  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <FormatColorFillIcon />
      </IconButton>
      {renderMenu}
    </Box>
  );
};
export default ThemeMenu;
