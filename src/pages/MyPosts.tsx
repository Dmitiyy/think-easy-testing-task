import { FC } from 'react';
import { Center, Container, Grid, GridItem, Text } from "@chakra-ui/react"
import { Link } from 'react-router-dom';

export const MyPosts: FC = () => {
  return (
    <Container maxW="800px" mt="30px">
      <Grid templateColumns='repeat(4, 1fr)' gap="20px" mt="30px">
        <GridItem 
          w='100%' bg='transparent' 
          border="1px solid white" 
          borderRadius={10} cursor="pointer"
        >
          <Link to="/create">
            <Center h="100%">
              <Text 
                color="white" 
                fontSize="30px" 
                userSelect="none"
              >
                +
              </Text>
            </Center>
          </Link>
        </GridItem>
        {
          [0, 1, 2, 3, 4, 5,6 , 7,8 ].map(item => {
            return (
              <GridItem 
                key={item} w='100%' 
                bg='custom.secondary' p="15px" 
                borderRadius={10}
              >
                <Text color="custom.white" fontWeight="medium">
                  Title
                </Text>
                <Text color="custom.white" fontSize="14px" mt="5px">
                  Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator
                </Text>
              </GridItem>
            )
          })
        }
      </Grid>
    </Container>
  )
}