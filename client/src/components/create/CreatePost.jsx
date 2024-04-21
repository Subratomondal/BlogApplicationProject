
import { AddCircle as Add } from '@mui/icons-material';
import { Box, FormControl, styled, InputBase,Button, TextareaAutosize } from '@mui/material';
const Container = styled(Box)`
    margin: 50px 100px
`
const Image = styled('img')({
    width: '100%',
    height: '50vh',
    ///objectFit: 'cover'
    filter: 'brightness(40%)'
})

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;

`;

const InputTextFeild = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
    
`
const Textarea = styled(TextareaAutosize)`
    width: 100%;
    margin-top: 50px;
    font-size: 18px;
    border: none;
    &:focus-visible{
        outline: none;
    }

`;



const CreatePost =() =>{
    const url='https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    return(
        <Container>
            <Image src ={url} alt="banner"/>

        <StyledFormControl>
            <label htmlFor="fileInput">
                <Add fontSize="large" color="action" />
            </label>
            <input
                type ="file"
                id="fileInput"
                style = {{display: 'none'}}
            />

            <InputTextFeild placeholder='Title'/>
            <Button variant="contained">Publish</Button>
        </StyledFormControl>

        <Textarea
            minRows = {5}
            placeholder='You can write here'
        />

        </Container>
    )
}

export default CreatePost;