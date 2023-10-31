import { Button, Flex, Heading, Highlight, Input, Spacer } from '@chakra-ui/react';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToken } from '../hooks/useToken';
import { useCookieToken } from '../hooks/useCookieToken';
import { SearchInput } from './SearchInput';

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
  const { removeTokenData } = useCookieToken();
  const navigate = useNavigate();

  const logout = () => {
    removeTokenData();
    navigate('/signup');
  }

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
      <SearchInput />
      <Spacer />
      {
        token.length !== 0 ? (
          <Link to="/create">
            <Button variant="link" color='custom.white'>
              Create post
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
          <Button variant='solid' h="35px" onClick={logout}>
            Log out
          </Button>
        )
      }
    </Flex>
  )
}