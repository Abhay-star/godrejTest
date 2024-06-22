import { Stack, Typography, Paper, Container } from "@mui/material";
import ReviewCard from "./common/ReviewCard";
import { useMediaQuery } from '@mui/material';
function Review() {
    const isXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

    return ( 
        <>
        <Stack px={isXs ? 2 : 10} direction={'column'}  sx={{  background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)", overflow:'hidden'}}>
            <Stack p={isXs ? 2 : 6} spacing={5} direction={'row'}>
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
            </Stack>
        </Stack>
        </>
     );
}

export default Review;