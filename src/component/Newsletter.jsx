import { Container, Stack, Typography, TextField } from "@mui/material";
import InfotechButton from "./common/InfotechButton";

function Newsletter() {
    return (<>
        <Stack sx={{ backgroundColor: '#f5f5f5' }} py={10}>
            <Container>
                <Stack direction={'column'} alignItems={'center'}>
                    <Typography variant="h4" color={'#101828'} fontWeight={'bold'}>
                        Subscribe to our newsletter for all<br></br> the latest updates
                    </Typography>

                    <Typography variant="body1" mt={2}>
                        The latest news, articles, and resources, sent to your inbox weekly.
                    </Typography>
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} mt={5} justifyContent={'center'} spacing={2}>
                    <TextField id="outlined-basic" style={{ minWidth: '300px' }} label="Email address" variant="outlined" />
                    <InfotechButton text={'Subscribe'} backgroundColor={'#101828'} color={'#F5F5F5'}></InfotechButton>
                </Stack>
            </Container>
        </Stack>

    </>);
}

export default Newsletter;