import { Button, Flex, Heading, Highlight, Input, Spacer } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useToken } from '../hooks/useToken';

const customHighlight = {
  px: '3', 
  py: '1', 
  rounded: 'full', 
  bg: 'custom.secondary', 
  pt: 0, 
  color: "custom.white"
}

export const Header: FC = () => {
  const { token } = useToken();

  return (
    <Flex align="center">
      <Heading as='h1' size='md' color="#eee">
        <Highlight
          query='Posts'
          styles={customHighlight}
        >
          Think Easy Posts
        </Highlight>
      </Heading>
      <Spacer />
      <Input 
        placeholder="Enter a keyword" 
        maxW="350px" h="35px" 
        color="custom.white" 
      />
      <Spacer />
      {
        token.length !== 0 ? (
          <Link to="/my">
            <Button variant="link" color='custom.white'>
              My posts
            </Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button variant="link" color='custom.white'>
              Log in
            </Button>
          </Link>
        )
      }
      <Spacer />
      {
        token.length === 0 ? (
          <Link to="/signup">
            <Button variant='solid' h="35px">
              Sign up
            </Button>
          </Link>
        ) : (
          <Button variant='solid' h="35px">
            Log out
          </Button>
        )
      }
    </Flex>
  )
}