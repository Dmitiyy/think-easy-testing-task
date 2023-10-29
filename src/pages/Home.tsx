import { Button, Container, Flex, Grid, GridItem, Heading, Highlight, Input, Spacer, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';

export const Home: FC = () => {
  return (
    <Container maxW="800px" my="30px">
      <Header />
      <Grid templateColumns='repeat(4, 1fr)' gap="20px" mt="30px">
        {
          [0, 1, 2, 3, 4, 5,6 , 7,8 ].map(item => {
            return (
              <Link to={`/post/${item}`} key={item}>
                <GridItem 
                  w='100%' p="15px"
                  bg='custom.secondary' 
                  borderRadius={10}
                >
                  <Text color="custom.white" fontWeight="medium">
                    Title
                  </Text>
                  <Text color="custom.white" fontSize="14px" mt="5px">
                    Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator
                  </Text>
                </GridItem>
              </Link>
            )
          })
        }
      </Grid>
    </Container>
  )
}