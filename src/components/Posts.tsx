import { FC, useEffect } from 'react';
import { Box, Button, Center, Grid, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { pageState, postsState } from '../state/atoms/postsAtom';
import { postsSelector } from '../state/selectors/postsSelector';
import { PostItem } from './PostItem';
import { ReactComponent as Loading } from '../assets/loading.svg';

export const Posts: FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts'], 
    queryFn: () => {
      return axios(`${process.env.REACT_APP_REQUEST_URL}/posts`);
    }
  });

  const [postsInitial, setPosts] = useRecoilState(postsState);
  const posts = useRecoilValue(postsSelector);
  const [page, setPage] = useRecoilState(pageState);

  useEffect(() => {
    if (data && data.status === 200) setPosts(data.data);
  }, [data])
  
  return (
    <>
      {
        isLoading ? (
          <Box mt="30px">
            <Loading />
          </Box>
        ) : isError ? (
          <Text color="red.400" mt="30px">Error, try again later</Text>
        ) : (
          <>
            <Grid templateColumns='repeat(4, 1fr)' gap="20px" mt="30px">
              {
                posts.map(item => {
                  return (
                    <PostItem data={item} key={item.id} />
                  )
                })
              }
            </Grid>
            {
              page <= Math.round(postsInitial.length / 12) && (
                <Center>
                  <Button 
                    colorScheme='yellow' mt="20px"
                    onClick={() => { setPage(prev => prev + 1) }}
                  >
                    Load more
                  </Button>
                </Center>
              )
            }
          </>
        )
      }
    </>
  )
}