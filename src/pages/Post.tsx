import { Container, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';

export const Post: FC = () => {
  return (
    <Container maxW="800px" mt="30px">
      <Heading size="md" color="custom.white">
        Title
      </Heading>
      <Text color="custom.white" mt="20px">
        Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator
      </Text>
    </Container>
  )
}