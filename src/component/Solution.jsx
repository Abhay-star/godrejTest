import { Container, Stack, Typography } from "@mui/material";
import { Paper } from "@mui/material";
import Link from '@mui/material/Link';
import { useMediaQuery } from '@mui/material';

function Solution() {
    const isXs = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const divStyle = {
        backgroundImage: 'url("../icon/robobg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: isXs ? '400px' : '100vh', // Adjust height as per your requirement
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };


    const automationData = [
        {
            id: 1, heading: 'Intelligent Technologies', innerData:
                [{ url: '', text: 'Artificial Intelligence' },
                { url: '', text: 'Machine Learning' },
                { url: '', text: 'Robotic Process Automation' }
                ]
        },
        {
            id: 2, heading: 'Technology Suite', innerData:
                [{ url: '', text: 'Java' },
                { url: '', text: '.Net, Share Point' },
                { url: '', text: 'Low code application development' }
                ]
        },
        {
            id: 3, heading: 'Data Insights', innerData:
                [{ url: '', text: 'Power BI and Power Apps' },
                { url: '', text: 'Birst' },
                { url: '', text: 'Big Data' },
                { url: '', text: 'Data Lake' }

                ]
        }
    ]
    return (
        <Stack style={{ backgroundColor: '#F2F4F7' }} pb={10} >
            <Container maxWidth={'md'}>
                <Typography pt={{xs:10 , sm:25}} pb={{xs:10 , sm:25}} variant="h2" fontSize={isXs ? '40px' : '68px'} textAlign={'left'} fontWeight={'bold'} color={'#101828'}>Introducing ACT based <br></br>approach for building <br></br>sustainable solutions</Typography>
                <Stack style={divStyle}>
                    <img src="../image/SolutionImage/Layer.png" alt="solution image" maxWidth={{xs: '190px' , sm:'300px'}}></img>
                </Stack>
            </Container>
            <Container maxWidth={'lg'}>
                <Stack direction={'column'} justifyContent={'left'} alignItems={'flex-start'} mt={5}>
                    <Typography variant="h4" fontWeight={'bold'}>
                        Embrace Tomorrow with Automation
                    </Typography>
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} mt={4}>
                    {automationData.map((item) => (
                        <>
                            <div style={{ flex: '1' }}>
                                <Typography variant="body1" fontWeight={'600'}>{item.heading}</Typography>
                                <Paper elevation={0} style={{ padding: '20px 20px', minHeight: '120px', marginTop: '15px' }}>
                                    {item?.innerData.map(data => (
                                        <>
                                            <Stack direction={'column'} justifyContent={'flex-start'} alignItems={'flex-start'} spacing={3}>
                                                <Link href="#" underline="always" style={{ marginBottom: '10px', textAlign: 'left' }}>
                                                    {data.text}
                                                </Link>
                                            </Stack>
                                        </>
                                    ))}
                                </Paper>
                            </div>
                        </>
                    ))}

                </Stack>
            </Container>
        </Stack>
    );
}

export default Solution;