import { Stack, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

function OrgTrust() {

    const orgImageList = [
        { url: '../image/orgImage/img1.png' },
        { url: '../image/orgImage/img2.png' },
        { url: '../image/orgImage/img3.png' },
        { url: '../image/orgImage/img4.png' },
    ]

    return (
        <Stack style={{ paddingTop: '40px', paddingBottom: '0px' }}>
            <Container>
                <Typography variant="body1" color={'#101828'}>
                    500 + organizations trust our exceptional expertise. Join them today!
                </Typography>

                <Stack mt={{ xs: 5, sm: 0 }} mb={{ xs: 5, sm: 0 }} direction={{ xs: 'column', sm: 'row' }} justifyContent={'center'} alignItems={'center'} spacing={{ xs: 4, sm: 8 }}>
                    {
                        orgImageList.map((item, index) => (
                            <>
                                <Paper elevation={0}>
                                    <img src={item.url}></img>
                                </Paper>
                            </>
                        ))
                    }

                </Stack>

            </Container>
        </Stack>

    );
}

export default OrgTrust;