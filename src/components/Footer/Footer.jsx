import '../../App'
import { Link, Typography, Box, } from '@mui/material';

export default function Footer() {

    return (
        <div>
            <Box component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Channel
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to !
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://www.youtube.com/channel/UCNaK7hwuYqLDeRCm9CBrJVA">
                        My Youtub Channel👻
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Box>
        </div >
    );
}

