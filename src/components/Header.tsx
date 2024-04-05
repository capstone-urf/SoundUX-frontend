import { Text } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/layout';
import Link from 'next/link';

const Header = () => {
  return (
    <Flex
      px="24px"
      w="100%"
      h="64px"
      pos="fixed"
      flexDir="column"
      zIndex="1024"
      borderBottom="1px solid #eeeeee"
      bgColor="#fefefe"
    >
      <Flex h="64px" alignItems="center" justifyContent="space-between">
        <Link href="/">
          <Text fontSize="1.125rem" fontWeight="500">
            SoundUX
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
