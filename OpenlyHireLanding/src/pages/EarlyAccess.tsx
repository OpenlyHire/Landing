import { Box, Button, Paper, TextField, Typography } from "@mui/material";

const EarlyAccess: React.FC = () => {
    const fields = [
        { label: 'Email', type: 'email' },
        { label: 'Full Name', type: 'text' },
        { label: 'Current Role', type: 'text' },
        { label: 'Current Company', type: 'text' },
        { label: 'LinkedIn Profile', type: 'url' },
    ]
    return (
        <Box sx={{ mt: 8 }}>
            <Typography variant="h4" sx={{ textAlign: 'start', fontFamily: 'Playfair Display, serif', ml: 10 }}>Request for Early Access</Typography>
            <Paper sx={{ p: 12, mt: 4, ml: 'auto', mr: 'auto', width: '1000px', backgroundColor: '#ffffff', borderRadius: 6, boxShadow: '0px 10px 20px #d1a9db' }}>
                <Typography variant="h5" sx={{ mb: 6, fontFamily: 'Playfair Display, serif' }}>Be the first to experience the future of hiring. Join our early access program and gain exclusive insights into our innovative platform.</Typography>
                {fields.map((field, index) => (
                    <Box key={index} sx={{ mb: 3, display: 'flex', flexDirection: 'row', gap: 4 }}>
                        <label style={{ minWidth: 120, textAlign: 'left' }}>{field.label}: </label>
                        <TextField
                            fullWidth
                            type={field.type}
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 4,
                                    '& fieldset': {
                                        borderColor: '#d1a9db',
                                        borderWidth: 2,
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#c084d4',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#b35ccf',
                                    },
                                },
                            }}
                        />
                    </Box>
                ))}
                <Button variant="contained" sx={{ mt: 4, backgroundColor: '#b35ccf', borderRadius: 4, px: 6, py: 2 }}>Submit Request</Button>
            </Paper>
        </Box>
    );
}
export default EarlyAccess;