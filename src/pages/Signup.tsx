import { FC, useEffect } from 'react';
import { Button, Container, Flex, FormControl, Input } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import axios from 'axios';

type TPayload = {
  email: string,
  firstname:  string,
  lastname: string,
  password: string
}

export const Signup: FC = () => {
  const {
    handleSubmit, register, 
    formState: { errors, isSubmitting }
  } = useForm();
  
  const { mutate, data } = useMutation({
    mutationFn: (payload: TPayload) => {
      return axios.post(
        `https://frontend-test-be.stage.thinkeasy.cz/auth/signup`,
        payload 
      )
    }
  });

  const onSubmit = (values: any) => {
    console.log(values);
    mutate(values);
  }

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
              minLength: { value: 8, message: 'Minimum length should be 8' },  
            })}
            isInvalid={!!errors.password}
          />
          <Button variant="solid" h="35px" mt="20px" type='submit'>
            Submit
          </Button>
        </FormControl>
      </form>
    </Container>
  )
}