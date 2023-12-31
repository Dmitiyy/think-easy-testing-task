import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from './pages/Home';
import { RecoilRoot } from 'recoil';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Post } from './pages/Post';
import { MyPosts } from './pages/MyPosts';
import { NewPost } from './pages/NewPost';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: '#303841',
      },
    },
  },
  colors: {
    custom: {
      white: "#eee",
      secondary: "#3A4750"
    }
  }
})

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RecoilRoot>
          <BrowserRouter>
            <Routes>
              <Route path='/create' element={<NewPost />} />
              <Route path='/my' element={<MyPosts />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/post/:id' element={<Post />} />
              <Route path='*' element={<Home />} />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
