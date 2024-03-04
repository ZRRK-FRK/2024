import { chakra, HTMLChakraProps, Image,AbsoluteCenter,Box } from '@chakra-ui/react'

export const Logo = (props: HTMLChakraProps<'svg'>) => (
  
     
  <Box position='relative' h='100px'>
  <AbsoluteCenter bg='white' p='1' color='white' axis='both'>
  < Image
  borderRadius='full'
  boxSize='150px'
  src='https://www.cu-aflou.dz//img/logo_cua.jpg' 
  alt='Dan Abramov'/>
  </AbsoluteCenter>
  </Box> 
)