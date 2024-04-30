import { Flex } from '@chakra-ui/layout';
import { ReactNode } from 'react';

import Header from '@/components/Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex height="100%" flexDir="column">
      <Header />
      <Flex
        w="100%"
        maxW="1200px"
        p="88px 20px 0"
        mx="auto"
        flexDir="column"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
