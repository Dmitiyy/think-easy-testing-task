import { Container, Grid, GridItem, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Posts } from '../components/Posts';

export const Home: FC = () => {
  return (
    <Container maxW="800px" my="30px">
      <Header />
      <Posts />
    </Container>
  )
}