import { FC } from 'react';
import { Button, Container, Flex, FormControl, Input, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { ReactComponent as Loading } from '../assets/loading.svg';
import { useAuthFunc } from '../hooks/useAuthFunc';

type TPayload = {
  email: string,
  password: string
}

export const Login: FC = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const { onSubmit, isError, isPending } = useAuthFunc<TPayload>('login');

  return (
    <Container maxW="800px" my="30px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Input 
            placeholder='Email' 
            type="email"
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
              required: 'This is required'
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