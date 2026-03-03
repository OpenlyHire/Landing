/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';


const pages = [
  { label: 'How it works', path: '/how-it-works' },
  { label: 'Benefits', path: '/benefits' },
  { label: 'Early Access', path: '/early-access' },
];


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const navigate = useNavigate();


  return (
    <AppBar position="relative" sx={{ backgroundColor: '#ffffff', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* Desktop View Logo*/}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Playfair Display, serif',
              fontSize: '2rem',
              letterSpacing: '0.02em',
              color: 'black',
              textDecoration: 'none',
              '&:hover': {
                color: '#b35ccf',
                textDecoration: 'underline',
                transition: 'all 0.25s ease-in-out',
              },
            }}
          >
            OpenlyHire
          </Typography>

          {/* Mobile View Nav-items */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  onClick={() => {
                    navigate(page.path);
                    handleCloseNavMenu();
                  }}
                >
                  <Typography sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase'
                  }}>{page.label}</Typography>
                </MenuItem>
              ))}

            </Menu>
          </Box>


          {/* Mobile View Logo*/}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Playfair Display, serif',
              fontWeight: 750,
              letterSpacing: '0.02em',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            OpenlyHire
          </Typography>

          {/* Desktop View Nav-items*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={() => {
                  navigate(page.path);
                  handleCloseNavMenu();
                }}
                sx={{
                  my: 2,
                  ml: 4,
                  color: 'black',
                  display: 'block',
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  '&:hover': {
                    color: '#b35ccf',
                    textDecoration: 'underline',
                    transition: 'all 0.25s ease-in-out',
                  },
                }}
              >
                {page.label}
              </Button>
            ))}

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
