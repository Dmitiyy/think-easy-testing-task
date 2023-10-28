import { Button, Container, Flex, FormControl, Input } from '@chakra-ui/react';
import { FC } from 'react';

export const Signup: FC = () => {
  return (
    <Container maxW="800px" mt="30px">
      <FormControl>
        <Flex>
          <Input 
            placeholder='First name' mr="20px" 
            color="custom.white" 
          />
          <Input 
            placeholder='Last name' 
            color="custom.white" 
          />
        </Flex>
        <Input 
          placeholder='Email' 
          type="email" mt="20px" 
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