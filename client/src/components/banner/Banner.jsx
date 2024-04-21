
import { Box, Typography, styled } from '@mui/material';
import bgImage from './chest.jpg';
const Image = styled(Box)`
    background: url(${bgImage}) center;
    width:100%;
    height: 50vh;
    filter: brightness(40%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

const Heading = styled(Typography)`
    font-size: 70px;
    color:#fff;

`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background:#fff;

`

const Banner = ()=>{
    return(
        <Image>
            <Heading>BLOG</Heading>
            <SubHeading>Discover the Power of Knowledge in Achieving Your Fitness Goals</SubHeading>
        </Image>
    )
}

export default Banner;