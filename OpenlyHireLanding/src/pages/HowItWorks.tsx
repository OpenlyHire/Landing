/* eslint-disable @typescript-eslint/no-unused-vars */
import SpotlightCard from "../components/SpotlightCard";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HowItWorks: React.FC = () => {
    const steps = [
        { title: "APPLY" },
        { title: "GET EVALUATED" },
        { title: "STAY VISIBLE" }
    ]
    const processes = [
        {
            label: 1,
            title: 'TRANSPARENCY',
            description1: 'Visible evalutaion score',
            description2: 'Track your application status',
            description3: 'Receive structured feedback'
        },
        {
            label: 2,
            title: 'FAIR EVALUATION',
            description1: 'Structured evaluation criteria',
            description2: 'Clear evaluation process',
            description3: 'Reduced bias and discrimination'
        },
        {
            label: 3,
            title: 'SECOND CHANCES',
            description1: 'One evaluation - multiple applications',
            description2: 'Stay visible to companies',
            description3: 'Rejection is not final'
        },
    ]
    return (
        <Box sx={{ backgroundColor: '#f0eff074', mt: 8, py: 8 }}>
            <Typography variant="h4" sx={{ textAlign: 'start', ml: 9, fontFamily: 'Playfair Display, serif' }}>How It Works</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 6, }}>
                {steps.map((step, index) => (
                    <SpotlightCard key={index} className="mx-auto mt-12 min-w-xs" >
                        <Typography variant="h5">{step.title}</Typography>
                    </SpotlightCard>
                ))}
            </Box>
            <Box sx={{ display: 'grid', justifyContent: 'center', gap: 6, mt: 8 }}>

                {processes.map((process, index) => (
                    <SpotlightCard >
                        <Accordion
                            elevation={0}
                            sx={{
                                minWidth: 1200,
                                mx: 'auto',
                                backgroundColor: 'transparent',

                                '&:before': {
                                    display: 'none',
                                },

                                '&.Mui-expanded': {
                                    margin: 'auto',
                                },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                sx={{
                                    '&.Mui-focusVisible': {
                                        outline: 'none',
                                    },
                                    '&:focus': {
                                        outline: 'none',
                                    },
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '2px solid #000000',
                                        borderRadius: '50%',
                                        flexShrink: 0,
                                        ml: 2,
                                        mr: 2,
                                    }}
                                >
                                    {process.label}
                                </Typography>
                                <Typography variant="h6">{process.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignContent: 'flex-start', textAlign: 'left' }}>
                                <Typography variant="body1">{process.description1}</Typography>
                                <Typography variant="body1">{process.description2}</Typography>
                                <Typography variant="body1">{process.description3}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    </SpotlightCard>

                ))}

            </Box>
        </Box>
    );
}
export default HowItWorks;