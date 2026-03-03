import type { ReactNode } from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",        // full viewport height
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: "100%",
        }}
      >
        {children}
      </Box>


      <Footer />
    </Box>
  );
};

export default Layout;
