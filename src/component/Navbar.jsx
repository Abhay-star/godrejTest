import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/material";
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
function Navbar() {
    const isXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

    const navData = [
        { id: '1', text: 'Solutions', link: '' },
        { id: '2', text: 'Services', link: '' },
        { id: '3', text: 'Industry Focus', link: '' },
        { id: '4', text: 'Careers', link: '' },
        { id: '5', text: 'Insights', link: '' },
    ]

    return (<>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} style={{ minHeight: ' 75px', backgroundColor: '#061826' }}>
            <Container>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <img src="../icon/logo.png" style={{ width: '163px' }}></img>
                    <Stack direction={'row'} spacing={6} alignItems={'center'} style={{ display: isXs ? 'none' : 'block',}}>
                        {navData.map((item) => (
                            <>
                                <Link href="#" color="#F5F5F5" style={{ textDecoration: 'none' }}>
                                    {item.text}
                                </Link>
                            </>
                        ))}
                        <Button variant="outlined" style={{ border: '1px solid #F5F5F5', borderRadius: '2px', padding: '8px 45px', color: '#F5F5F5' }}><Typography variant="body1">Contact us</Typography></Button>
                    </Stack>
                    <FormatListBulletedIcon  sx={{ display: isXs ? 'block' : 'none',  fontSize: 40, color:'#F5F5F5' }}></FormatListBulletedIcon>
                </Stack>
            </Container>
        </Stack>
    </>);
}

export default Navbar;