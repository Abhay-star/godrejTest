import { Stack, Typography } from "@mui/material";
import Container from '@mui/material/Container';
import InfotechButton from "./common/InfotechButton";
import SecondryBtn from "./common/SecondryBtn";
import { useMediaQuery } from '@mui/material';


function Banner() {
    const isXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

    return (
        <Stack style={{ backgroundColor: "#07192D", minHeight: `calc(100vh - 40px)`, alignItems: 'center', justifyContent: 'center' }}>
            <Container fixed>
                <div className="bannerWrapper">
                    <Typography variant={isXs ? 'h4' :'h2' } display="block" color={'#F5F5F5'} fontWeight={'bold'}> Delivering Business value<br></br> with Automation </Typography>
                    <Typography variant="subtitle1" color={'#DBDBDB'} mt={3}>Revolutionize your business operations, save time and boost productivity <br></br> with our cutting-edge offerings.</Typography>

                    <Stack direction={ {xs: 'column', sm: 'row'}} mt={5} justifyContent={'center'}>
                        <InfotechButton text="Let's Connect"></InfotechButton>
                        &nbsp;
                        <SecondryBtn text="Co-operate Video"></SecondryBtn>

                    </Stack>
                </div>
            </Container>
        </Stack>
    );
}



export default Banner;