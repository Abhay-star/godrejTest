import Paper from '@mui/material/Paper';
import { Container, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from '@mui/material';

function NotificationHeader() {
    const isXs = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    return (
        <Paper elevation={0} style={{ backgroundColor: '#320A53', borderRadius: '0px' }}>
            <Container>
                <Stack style={{ minHeight: '40px', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                    <Typography variant="subtitle2" color={'#F2F4F7'} fontWeight={'300'} display="block">Announcements will be <span style={{ color: '#B2C8F8' }}>highlighted</span> here</Typography>
                    <Typography style={{ display: isXs ? 'none' : 'block', position: 'absolute', right: '0px' }} variant="subtitle2" color={'#F2F4F7'} display="block">dropdown</Typography>

                </Stack>
            </Container>

        </Paper >
    );
}

export default NotificationHeader;