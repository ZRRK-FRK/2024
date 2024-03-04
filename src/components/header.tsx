import { Box, HStack, LinkBox, Link, Flex, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react"
import { TbHome, TbSettings, TbLink, TbMenuDeep, TbLogout, TbUser, TbLogin} from "react-icons/tb";
const NavLink = ({text, href, icon} : any) => (<LinkBox padding={"10px"} borderRadius="2px" _hover={{
  backgroundColor: "gray.100"
}}>
  <Link href={href} _hover={{
    color: "gray.600"
  }}>
    <HStack spacing="4px">
      <Box as="span">{icon}</Box>
      <Box as="span">{text}</Box>
    </HStack>
  </Link>
</LinkBox>);

function Header() {
  const linksData = {
    authenticated : [
    {text: "الرئيسة", href: "#", icon: <TbHome />},
    {text: "الصفحة 1", href: "#", icon: <TbLink />},
    {text: "الصفحة 2", href: "#", icon: <TbLink />},
    {text: "الإعدادات", href: "#", icon: <TbSettings />},
    ],
    guest : [
      {text: "تسجيل الدخول", href:"login", icon: <TbLogin />}
    ]
  }
  const isAuthenticated = false;

  return (
    <Flex justify={"space-between"}>
      <Box as="nav" h="60px">
        <HStack h="100%" spacing="0rem">
          {
            isAuthenticated ? (
              linksData.authenticated.map(({text, href, icon}) => <NavLink text={text} href={href} icon={icon} />)
            ) : (
              linksData.guest.map(({text, href, icon}) => <NavLink text={text} href={href} icon={icon} />)
            )
          }
        </HStack>
      </Box>
      <Flex h="60px" align="center">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<TbMenuDeep />}
            variant='outline'
          />
          <MenuList>
            <MenuItem icon={<TbUser />} command='Ctrl + 3'>
              الملف الشخصي
            </MenuItem>
            <MenuItem color="red.300" icon={<TbLogout />} command='Ctrl + 9'>
              تسجيل الخروج
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  )
}

export default Header