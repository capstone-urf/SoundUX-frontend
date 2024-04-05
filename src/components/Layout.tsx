import { ReactNode } from 'react';

import { Flex } from '@chakra-ui/layout';
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
        height="100%"
        p="88px 20px 0 20px"
        mx="auto"
        flexDir="column"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
