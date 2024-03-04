import { Box, Button, Container, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Textarea } from '@chakra-ui/react'
import Header from '../components/header'
import { useDisclosure } from '@chakra-ui/react'
import { TbCirclePlus } from "react-icons/tb";
import { useRef } from 'react';
function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = useRef()
  return <Container maxW='container.lg'>
    <Header />
    <>
      <Button onClick={onOpen} leftIcon={<TbCirclePlus />}>
        إضافة منظمة جديدة 
      </Button>
      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>إضافة منظمة جديدة</DrawerHeader>
          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <FormLabel htmlFor='username'>الإسم</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                  placeholder='أدخل الإسم'
                />
              </Box>

              <Box>
                <FormLabel htmlFor='url'>Url</FormLabel>
                <InputGroup>
                  <InputLeftAddon dir='ltr'>.com</InputLeftAddon>
                  <Input
                    dir='ltr'
                    type='url'
                    id='url'
                    placeholder='الرابط'
                  />
                  <InputRightAddon dir='ltr'>http://</InputRightAddon>
                </InputGroup>
              </Box>

              <Box>
                <FormLabel htmlFor='owner'>إختر الفرع</FormLabel>
                <Select id='owner' defaultValue='segun'>
                  <option value='segun'>الفرع الأول</option>
                  <option value='kola'>الفرع الثاني</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor='desc'>الوصف</FormLabel>
                <Textarea id='desc' />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              إلغاء
            </Button>
            <Button colorScheme='blue'>إضافة</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  </Container>
}

export default Home