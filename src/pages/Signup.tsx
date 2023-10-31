import { FC } from 'react';
import { Button, Container, Flex, FormControl, Input, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { ReactComponent as Loading } from '../assets/loading.svg';
import { useAuthFunc } from '../hooks/useAuthFunc';

type TPayload = {
  email: string,
  firstname:  string,
  lastname: string,
  password: string
}

export const Signup: FC = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const { onSubmit, isError, isPending } = useAuthFunc<TPayload>('signup');

  return (
    <Container maxW="800px" my="30px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Flex>
            <Input 
              placeholder='First name' mr="20px" 
              color="custom.white" 
              id="firstname"
              {...register('firstname', {
                required: 'This is required'
              })}
              isInvalid={!!errors.firstname}
            />
            <Input 
              placeholder='Last name' 
              color="custom.white" 
              id="lastname"
              {...register('lastname', {
                required: 'This is required'
              })}
              isInvalid={!!errors.lastname}
            />
          </Flex>
          <Input 
            placeholder='Email' 
            type="email" mt="20px" 
            color="custom.white" 
            id="email"
            {...register('email', {
              required: 'This is required'
            })}
            isInvalid={!!errors.email}
          />
          <Input 
            placeholder='Password' 
            type="password" mt="20px" 
            color="custom.white" 
            id="password"
            {...register('password', {
              required: 'This is required',
              minLength: { value: 5, message: 'Minimum length should be 5' },  
            })}
            isInvalid={!!errors.password}
          />
          <Flex align='center'>
            <Button variant="solid" h="35px" mt="20px" type='submit'>
              Submit
            </Button>
            {
              isError && (
                <Text color="red.400" ml="30px">
                  Error, try again
                </Text>
              )
            }
          </Flex>
        </FormControl>
      </form>
      {
        isPending && ( <Loading /> )
      }
    </Container>
  )
}