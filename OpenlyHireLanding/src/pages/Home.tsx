/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Typography } from "@mui/material";
import HowItWorks from "./HowItWorks";
import Benefits from "./Benefits";
import EarlyAccess from "./EarlyAccess";
import banner from '../assets/banner.png';

const Home: React.FC = () => {
    return (
        <Box sx={{ mt: 8 }}>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '1.5fr 2fr',
                    alignItems: 'center',
                    gap: 3,
                    minHeight: '80vh',
                }}
            >
                {/* LEFT SIDE */}
                <Box>
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: 600, mb: 3, pl: 2 }}
                    >
                        Transparent Hiring. <br />
                        Open Opportunities. <br />
                        For Everyone.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ color: 'text.secondary', pl: 6 }}
                    >
                        Get evaluated once. Stay visible across companies.
                        No ghosting. No dead ends.
                    </Typography>
                </Box>

                {/* RIGHT SIDE */}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        src={banner}
                        alt="Banner"
                        style={{
                            width: '100%',
                            maxWidth: '750px',
                        }}
                    />
                </Box>
            </Box>
            <HowItWorks />
            <Benefits />
            <EarlyAccess />
        </Box>
    );
}
export default Home;