import { FC } from 'react';
import { Button, Container, Flex, FormControl, Input } from '@chakra-ui/react';

export const Login: FC = () => {
  return (
    <Container maxW="800px" mt="30px">
      <FormControl>
        <Input 
          placeholder='Email' 
          type="email" 
          color="custom.white" 
        />
        <Input 
          placeholder='Password' 
          type="password" mt="20px" 
          color="custom.white" 
        />
        <Button variant="solid" h="35px" mt="20px">
          Submit
        </Button>
      </FormControl>
    </Container>
  )
}