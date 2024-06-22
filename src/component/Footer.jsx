import { Box, Stack, Typography, Container, Link } from "@mui/material";


function Footer() {
    return (<>
        <Stack p={7} alignItems={'left'} justifyItems={'flex-start'} style={{
            background:
                "linear-gradient(0deg, rgb(7, 0, 33) 0%, rgb(12, 0, 36) 38%, rgb(13, 0, 39) 75%, rgb(16, 0, 46) 100%) 0% 0% no-repeat padding-box padding-box transparent"
        }}>
            <Container>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                    <Stack direction={'column'} textAlign={'left'}>
                        <img src="../icon/logo.png" Width="166px"></img>
                        <Typography color={'#DBDBDB'} variant="body2">Revolutionize your business<br></br> operations, save time and boost<br></br>
                            productivit0y with our cutting-edge offerings.</Typography>
                    </Stack>
                    <Stack direction={'column'} textAlign={'left'}>
                        <Typography variant="body1" color={'#F5F5F5'}>Solutions</Typography>
                        <Typography variant="body2" mt={2} color={'#98A2B3'}>AUTOMATION</Typography>
                        <Typography variant="body2" mt={1} color={'#F5F5F5'}>Enterprise Suite</Typography>
                        <Typography variant="body2" mt={1} color={'#F5F5F5'}>Technology Stack</Typography>
                        <Typography variant="body2" mt={1} color={'#F5F5F5'}>Godrej Infotech Products</Typography>
                        <Typography variant="body2" mt={2} color={'#98A2B3'}>ClOUDIFICATION  </Typography>
                        <Typography variant="body2" mt={1} color={'#F5F5F5'}>Upgrade to Cloud  </Typography>
                        <Typography variant="body2" mt={1} color={'#F5F5F5'}>Cloud Stack  </Typography>
                        <Typography variant="body2" mt={1} color={'#F5F5F5'}>Cloud Services  </Typography>
                        <Typography variant="body2" mt={2} color={'#98A2B3'}>TRANSFORMATION  </Typography>
                        <Typography variant="body2" mt={1} color={'#F5F5F5'}>Intelligent Technologies  </Typography>
                        <Typography variant="body2" mt={1} color={'#F5F5F5'}>Customer Experience  </Typography>
                        <Typography variant="body2" mt={1} color={'#F5F5F5'}>Data Insights  </Typography>
                    </Stack>
                    <Stack direction={'column'} textAlign={'left'}>
                        <Typography variant="body1" color={'#F5F5F5'}>Services</Typography>
                        <Typography variant="body2" mt={1} color={'#F5F5F5'}>Business Proccess Consulting</Typography>
                        <Typography variant="body2" mt={1} color={'#F5F5F5'}>Implementation & Global Roll Out</Typography>
                        <Typography variant="body2" mt={1} color={'#F5F5F5'}>Manage Services</Typography>
                        <Typography variant="body2" mt={1} color={'#F5F5F5'}>Data & Information Security</Typography>
                    </Stack>
                    <Stack direction={'column'} textAlign={'left'}>
                        <Typography variant="body1" color={'#F5F5F5'}>Industry Focus</Typography>
                        <Typography variant="body2" mt={1} color={'#F5F5F5'}>Manufacturing</Typography>
                        <Typography variant="body2" mt={1} color={'#F5F5F5'}>Retail</Typography>
                        <Typography variant="body2" mt={1} color={'#F5F5F5'}>Trading & Distribution</Typography>
                        <Typography variant="body2" mt={1} color={'#F5F5F5'}>Project</Typography>
                        <Typography variant="body2" mt={1} color={'#F5F5F5'}>Professional Services</Typography>

                    </Stack>
                    <Stack direction={'column'} textAlign={'left'}>
                        <Typography variant="body1" color={'#F5F5F5'}>More</Typography>
                        <Typography variant="body2" mt={1} color={'#F5F5F5'}>About us</Typography>
                        <Typography variant="body2" mt={1} color={'#F5F5F5'}>Infotech Weekly</Typography>
                        <Typography variant="body2" mt={1} color={'#F5F5F5'}>Carrer</Typography>
                        <Typography variant="body2" mt={1} color={'#F5F5F5'}>Contact us</Typography>
                    </Stack>
                </Stack>
            </Container>
        </Stack>

        <Stack style={{ backgroundColor: '#F2F4F7' }}>
            <Typography variant="body1" p={1} fontWeight={'500'}>© 2023 Godrej Infotech. All rights reserved. | <Link href="#" underline="none">
                Privacy Notice
            </Link></Typography>
        </Stack>

    </>);
}

export default Footer;