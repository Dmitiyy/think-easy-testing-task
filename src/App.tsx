import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from './pages/Home';
import { RecoilRoot } from 'recoil';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Post } from './pages/Post';
import { MyPosts } from './pages/MyPosts';
import { NewPost } from './pages/NewPost';

//TODO seperate into different theme file
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

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path='/create' element={<NewPost />} />
            <Route path='/my' element={<MyPosts />} />
            <Route path='/post/:id' element={<Post />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default App;
