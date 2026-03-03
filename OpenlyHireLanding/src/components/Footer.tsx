/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { BottomNavigationAction, Button, IconButton, InputBase, Paper } from "@mui/material";
import { BottomNavigation, Box, Link, Typography } from "@mui/material";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

export default function Footer() {
  const reroute = [
    { label: "Our Story", path: "/our-story" },
    { label: "Contact Us", path: "/contact-us" },
    { label: "Join Us", path: "/careers" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms of Service", path: "/terms-of-service" },
  ]
  const [value, setValue] = React.useState(0);
  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 4, md: 8 },
        py: 4,
        pr: { xs: 2, md: 8, lg: 12 }, 
        backgroundColor: "#d1a9db",

        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 4, md: 0 },                 
        justifyContent: { md: "space-around" },  
        alignItems: "flex-start",
      }}
    >
      <Box sx={{ textAlign: "left", display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="h5" color="black">
          OpenlyHire
        </Typography>
        <Typography variant="body2" color="black">
          +1 (123) 456-7890
        </Typography>
        <Typography variant="body2" color="black">
          123 Main Street, Suite 100,
          <br />
          Dublin, Ireland
        </Typography>
        <Typography variant="body1" color="black">
          openlyhire@gmail.com
        </Typography>
        <Box sx={{ width: 250 }}>
          <BottomNavigation
            // showLabels
            sx={{ backgroundColor: 'transparent' }}
          >
            <BottomNavigationAction label="Recents" icon={<SiFacebook />} sx={{ color: 'black' }} />
            <BottomNavigationAction label="Favorites" icon={<SiInstagram />} sx={{ color: 'black' }} />
            <BottomNavigationAction label="Nearby" icon={<SiX />} sx={{ color: 'black' }} />
            <BottomNavigationAction label="Nearby" icon={<SiLinkedin />} sx={{ color: 'black' }} />
          </BottomNavigation>
        </Box>
      </Box>

      <Box sx={{ textAlign: "left", display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="h5" color="black">
          Our Company
        </Typography>

        {reroute.map((item, index) => (
          <Link key={index} href={item.path} color="black" underline="hover">
            {item.label}
          </Link>
        ))}
      </Box>

      <Box sx={{ textAlign: "left", display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="h5" color="black">
          Join Our Newsletter
        </Typography>
        <Paper
          sx={{
            p: '2px 4px',
            display: 'flex',
            width: '100%',     
            maxWidth: 360,    
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Enter your email"
            inputProps={{ 'aria-label': 'enter your email' }}
          />
          <Button type="submit" sx={{ p: '10px', backgroundColor: '#e8be00', color: '#000000', fontWeight: 600, '&:hover': { backgroundColor: '#e8d200' } }}>
            Subscribe
          </Button>
        </Paper>
      </Box>

    </Box>
  );
}
