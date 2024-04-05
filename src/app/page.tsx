'use client';

import React, { FormEvent } from 'react';
import axios from 'axios';

import Layout from '@/components/Layout';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/layout';

export default function Home() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.post('http://localhost:3000/api/submit', {}).then(r => {
      console.log(r);
    });

    console.log('submit');
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <Flex gap="4px">
          <Input
            h="40px"
            flex={1}
            borderColor="#eeeeee"
            focusBorderColor="#dddddd"
          />
          <Button
            h="40px"
            bgColor="white"
            border="1px solid #eeeeee"
            _hover={{ bgColor: '#dddddd' }}
          >
            검색
          </Button>
        </Flex>
      </form>
    </Layout>
  );
}
