import { Stack, Typography, Container } from "@mui/material";
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
function Hub() {
    const isXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

    const hubData = [
        { id: '1', text: '50 +', description: 'Countries with trusted client' },
        { id: '2', text: '10.31', description: 'Billion Total Revenue' },
        { id: '3', text: '500 +', description: 'Employee all Over The globe' },
    ]

    return (<>
        <Stack style={{
            padding: isXs ? '30px' : '80px 80px 0px 80px',
            background:
                "transparent linear-gradient(0deg, #070021 0%, #0C0024 38%, #0D0027 75%, #10002E 100%) 0% 0% no-repeat padding-box"
        }}>
            <Container>
                <Stack>
                    <Typography variant="h4" fontWeight={'bold'} color={'#F5F5F5'} mb={2}>The Hub of Expertise</Typography>
                    <Typography variant="subtitle1" color={'#DBDBDB'}>We are here to build edge and bring technology brilliance with the finest in the
                        industry.<br></br> Driving the innovation path, we develop better results for businesses across the globe.</Typography>
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={'center'} mt={6} spacing={5}>
                    {hubData.map(item => (
                        <>
                            <Box component="div">
                                <Typography variant="h3" color={'#F5F5F5'} fontWeight={'bold'} mb={1}>{item.text}</Typography>
                                <Typography variant="body1" color={'#F5F5F5'}>{item.description}</Typography>
                            </Box>
                        </>
                    ))}
                </Stack>
                <Stack display={{ xs: 'none', sm: 'block' }} style={{
                    background: 'url(../icon/earth.png)', backgroundRepeat: "no-repeat",
                    backgroundPosition: 'top', minHeight: '400px', backgroundSize: "cover"
                }}>
                </Stack>
            </Container>
        </Stack>

    </>);
}

export default Hub;