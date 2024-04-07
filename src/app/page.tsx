'use client';

import {
  Flex,
  Button,
  Input,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { FormEvent, useState } from 'react';

import PlayerDialog from '@/components/dialog/PlayerDialog';
import Layout from '@/components/Layout';

export default function Home() {
  const [isPlayerOpen, setIsPlayerOpen] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.post('/v1/ai/music', {}).then(() => {
      alert('검색 결과');
    });
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

      <TableContainer mt={12}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>제목</Th>
              <Th>제작자</Th>
              <Th>금액</Th>
              <Th>듣기</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Soft Pedal</Td>
              <Td>solxis</Td>
              <Td>9,900원</Td>
              <Td onClick={() => setIsPlayerOpen(true)}>듣기</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      {isPlayerOpen && (
        <PlayerDialog
          isOpen={true}
          onClose={() => setIsPlayerOpen(false)}
          musicId="2035308706"
        />
      )}
    </Layout>
  );
}
