import { Paper, Stack, Typography } from "@mui/material";
import { useMediaQuery } from '@mui/material';

function ReviewCard() {
    const isXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

    return (

        <Paper elevation={1} sx={{ minWidth: isXs ? '80%' : '60%', minHeight: isXs ? '200px' : '400px', background: "linear-gradient(to right, #7474bf, #348ac7)" }}>
            <Stack p={isXs ? 2 : 4} direction={'column'} justifyContent={'flex-start'}>
                <Typography variant={isXs ? 'h6' : 'h4'} textAlign={'left'} fontWeight={'bold'} color={'#F5F5F5'}>
                    Over 200 reviews on Glassdoor and counting
                </Typography>

                <Typography variant="body1" textAlign={'left'} fontWeight={'400'} color={'#F5F5F5'} mt={1}>User reviews have proven to outperform any other assessments in the consumer world.
                    That’s why we’re proud of what our reviewers have to say.</Typography>

                <Stack direction={'row'} mt={isXs ? 2  : 7} justifyContent={'space-between'} alignItems={'baseline'}>
                    <Typography variant={isXs ? "h6" : "h1"} fontWeight={'bold'} color={'#f5f5f5'}>4.7</Typography>
                    <Typography variant="body1" fontWeight={'400'} color={'#f5f5f5'}>Here are Some Job Listing</Typography>
                </Stack>
            </Stack>
        </Paper>
    );
}

export default ReviewCard;