import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useTheme
} from '@mui/material';
import {
  Menu as MenuIcon,
  Brightness4,
  Brightness7,
  Code as CodeIcon
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const Navbar = ({ toggleTheme, currentTheme }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const theme = useTheme();

  const pages = [
    { title: 'Home', path: '/' },
    { title: 'Projects', path: '/projects' },
    { title: 'Activities', path: '/activities' }, // fixed spelling
    { title: 'About', path: '/about' },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navStyles = {
    link: {
      textDecoration: 'none',
      color: 'inherit',
      fontFamily: 'Poppins, sans-serif',
      position: 'relative',
    },
    activeLink: {
      color: theme.palette.primary.main,
      fontWeight: 'bold',
      fontFamily: 'Poppins, sans-serif',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '2px',
        backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'black',
        transition: 'width 0.3s ease',
      }
    },
    button: {
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '0%',
        height: '2px',
        backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'black',
        transition: 'width 0.3s ease',
      },
      '&:hover::after': {
        width: '80%',
      }
    },
    themeButton: {
      '&.MuiIconButton-root:hover': {
        backgroundColor: 'transparent',
      },
      '&.MuiIconButton-root:focus': {
        backgroundColor: 'transparent',
      },
    }
  };

  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontWeight: 700,
            letterSpacing: '.1rem',
            color: 'inherit',
            textDecoration: 'none',
            }}
          >
          Renz Jan
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <NavLink
                    to={page.path}
                    style={({ isActive }) => ({
                      ...navStyles.link,
                      ...(isActive ? navStyles.activeLink : {})
                    })}
                  >
                    <Typography textAlign="center">{page.title}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>


          <CodeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, ml:4}} />
          <Typography
            variant="h5"
            
            sx={{
              mr: 8,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize:'small',
              
            }}
          >
            PORTFOLIO
          </Typography>
          
          <Box sx={{width:'100%', display: { xs: 'none', md: 'flex' }}}><Typography>         </Typography></Box>
          <Box sx={{width:'100%', display: { xs: 'none', md: 'flex' }}}><Typography>         </Typography></Box>
          <Box sx={{width:'100%', display: { xs: 'none', md: 'flex' }}}><Typography>         </Typography></Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <NavLink
                key={page.title}
                to={page.path}
                style={({ isActive }) => ({
                  ...navStyles.link,
                  ...(isActive ? navStyles.activeLink : {})
                })}
              >
                <Button
                  sx={{ 
                    my: 2, 
                    color: 'inherit', 
                    display: 'block', 
                    mx: 1,
                    ...navStyles.button
                  }}
                >
                  {page.title}
                </Button>
              </NavLink>
            ))}
          </Box>
          <Box sx={{width:'100%', display: { xs: 'none', md: 'flex' }}}><Typography>         </Typography></Box>
          <Box sx={{width:'100%', display: { xs: 'none', md: 'flex' }}}><Typography>         </Typography></Box>
          <Box sx={{width:'100%', display: { xs: 'none', md: 'flex' }}}><Typography>         </Typography></Box>
          <Box sx={{ flexGrow: 0}}>
            <IconButton 
              onClick={toggleTheme} 
              color="inherit"
              backgroundColor="transparent"
              sx={navStyles.themeButton}
              style={{display:'flex', justifyContent:'end' ,width:'40px'}}
            >
              {currentTheme === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;