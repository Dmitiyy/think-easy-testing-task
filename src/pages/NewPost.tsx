import { Button, Container, Flex, FormControl, Input, Text, Textarea } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { useToken } from '../hooks/useToken';
import 'react-toastify/dist/ReactToastify.css';

interface IPayload {
  title: string;
  content: string;
}

export const NewPost: FC = () => {
  const { handleSubmit, register, formState: { errors }, reset } = useForm();
  const { token } = useToken();

  const { mutate, isError, isPending } = useMutation({
    mutationFn(payload: IPayload) {
      return axios.post(
        `${process.env.REACT_APP_REQUEST_URL}/posts`,
        payload,
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      )
    },
    onSuccess() {
      toast.success('You have successfully created a post', {delay: 1});
      reset();
    }
  });
  
  const onSubmit = (values: any) => {
    mutate(values);
  }

  return (
    <>
      <Container maxW="800px" my="30px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <Input 
              placeholder='Title' 
              color="custom.white" id="title"
              {...register('title', {
                required: 'This is required'
              })}
              isInvalid={!!errors.title}
            />
            <Textarea 
              placeholder='Content' mt="20px" 
              color="custom.white" id="content"
              {...register('content', {
                required: 'This is required'
              })}
              isInvalid={!!errors.content}
            />
            <Flex align="center">
              <Button variant="solid" h="35px" mt="20px" type='submit'>
                {isPending ? "Loading" : "Create"}
              </Button>
              {
                isError && (
                  <Text ml="20px" color="red.400">Error, try again</Text>
                )
              }
            </Flex>
          </FormControl>
        </form>
      </Container>
      <ToastContainer />
    </>
  )
}