import { Button, Container, FormControl, Input, Textarea } from '@chakra-ui/react';
import { FC } from 'react';

export const NewPost: FC = () => {
  return (
    <Container maxW="800px" mt="30px">
      <FormControl>
        <Input 
          placeholder='Title' 
          color="custom.white" 
        />
        <Textarea 
          placeholder='Content' mt="20px" 
          color="custom.white" 
        />
        <Button variant="solid" h="35px" mt="20px">
          Create
        </Button>
      </FormControl>
    </Container>
  )
}