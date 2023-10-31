import { Container, Heading, Text } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReactComponent as Loading } from '../assets/loading.svg';

export const Post: FC = () => {
  const { id } = useParams();
  
  const { data, isError, isPending, mutate } = useMutation({
    mutationFn: () => {
      return axios(`${process.env.REACT_APP_REQUEST_URL}/posts/${id}`);
    }
  });
  
  useEffect(() => {mutate()}, [])

  return (
    <Container maxW="800px" my="30px">
      {
        isPending ? (
          <Loading />
        ) : isError ? (
          <Text color="red.400" mt="30px">Error, try again later</Text>
        ) : data ? (
          <>
            <Heading size="md" color="custom.white">
              {data.data.title}
            </Heading>
            <Text color="custom.white" mt="20px">
              {data.data.content}
            </Text>
          </>
        ) : null
      }
    </Container>
  )
}