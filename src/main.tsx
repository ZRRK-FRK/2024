import '@fontsource/rubik/400.css'
import '@fontsource/rubik/700.css'
import './index.css'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import { Login } from './pages/Login'

import { extendTheme } from '@chakra-ui/react'
import rtl from 'stylis-plugin-rtl'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { HiLogin } from 'react-icons/hi'
import { Box, Flex, Spacer, Button, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { TbMenuDeep} from "react-icons/tb";
const theme = extendTheme({
  fonts: {
    heading: `'Rubik', sans-serif`,
    body: `'Rubik', sans-serif`,
  },
})

// NB: A unique `key` is important for it to work!
const options = {
  rtl: { key: 'css-ar', stylisPlugins: [rtl] },
  ltr: { key: 'css-en' },
}

export function RtlProvider({ children }) {

  const dir = "rtl";
  const cache = createCache(options[dir])
  return <CacheProvider value={cache} children={children} />
}


const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Box bg="blue.500" py={4}>
      <Flex alignItems="center" maxW="6xl" mx="auto">
        <Box>
          <Button
            display={{ base: 'block', md: 'none' }}
            onClick={onOpen}
            leftIcon={<TbMenuDeep />}
            variant="unstyled"
          >
            Menu
          </Button>
        </Box>
        <Spacer />
        <Box display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}>
          <Button variant="link" color="white" mr={4}>Home</Button>
          <Button variant="link" color="white" mr={4}>About</Button>
          <Button variant="link" color="white" mr={4}>Services</Button>
          <Button variant="link" color="white">Contact</Button>
        </Box>
        {isLargerThan768 && (
          <Box ml={4}>
            <Button variant="outline" colorScheme="whiteAlpha">
              Sign In
            </Button>
          </Box>
        )}
      </Flex>
    </Box>

  );
};


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RtlProvider>
        <Navbar />
        <Login />
      </RtlProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
