/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import structuredEvaluationEngine from '../assets/Structured Evaluation Engine.png';
import intelligentFeedbackSystem from '../assets/Intelligent Feedback System.png';
import sharedNetworkAccess from '../assets/Shared Network Access.png';

const Benefits: React.FC = () => {

    const benefits = [
        {
            image: structuredEvaluationEngine,
            title: 'STRUCTURED EVALUATION ENGINE',
            description1: 'Clear criteria - Comparable results',
            description2: 'Track your application status',
            description3: 'Receive structured feedback'
        },
        {
            image: intelligentFeedbackSystem,
            title: 'INTELLIGENT FEEDBACK SYSTEM',
            description1: 'Structured evaluation criteria',
            description2: 'Clear evaluation process',
            description3: 'Reduced bias and discrimination'
        },
        {
            image: sharedNetworkAccess,
            title: 'SHARED NETWORK ACCESS',
            description1: 'Rejection is not final',
            description2: 'Stay visible to companies',
            description3: 'One evaluation - multiple applications',
        },
    ]
    return (
        <Box>
        <Typography variant="h4" sx={{ textAlign: 'start', ml: 10, mt: 6, fontFamily: 'Playfair Display, serif' }}>Benefits</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 6, mt: 8 }}>
            
            {benefits.map((benefit, index) => (
                <Card
                    sx={{
                        width: 400,
                        backgroundColor: '#ffffff',
                        borderRadius: 6,
                        boxShadow: '0px 10px 20px #d1a9db',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: '0px 20px 40px rgba(0,0,0,0.15)',
                        },
                    }} key={index}>
                    <CardMedia
                        component="img"
                        image={benefit.image}
                        alt={benefit.title}
                        sx={{
                            height: 260,
                            objectFit: 'contain',
                            p: 3,
                        }}
                    />
                    <CardContent sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        pb: 4
                    }}>
                        <Typography variant="h6" sx={{ pl: 6, pr: 6, mb: 2 }}>{benefit.title}</Typography>
                        <Typography variant="body1">{benefit.description1}</Typography>
                        <Typography variant="body1">{benefit.description2}</Typography>
                        <Typography variant="body1">{benefit.description3}</Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
        </Box>
    );
}
export default Benefits;