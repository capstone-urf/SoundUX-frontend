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
import ProgressDialog from '@/components/dialog/ProgressDialog';
import Layout from '@/components/Layout';
import { MusicList } from '@/types/Music';
import { numberToWon } from '@/utils/price-utils';

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);

  const [secret, setSecret] = useState<string>('');
  const [script, setScript] = useState<string>('');
  const [isPlayerOpen, setIsPlayerOpen] = useState<boolean>(false);
  const [selectedMusicId, setSelectedMusicId] = useState<string | undefined>(
    undefined,
  );
  const [musicList, setMusicList] = useState<MusicList | undefined>(undefined);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!script || !secret) return;
    setLoading(true);

    axios
      .post<MusicList>(
        '/ai/v1/music',
        { script },
        {
          baseURL: process.env.NEXT_PUBLIC_API_URL,
          headers: {
            Authorization: `Bearer ${secret}`,
          },
        },
      )
      .then(({ data }) => {
        setMusicList(data);
      })
      .catch(() => {
        alert('검색 중 오류가 발생했습니다.');
        setMusicList(undefined);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <Input
          h="40px"
          placeholder="시크릿 키"
          value={secret}
          onChange={e => setSecret(e.target.value)}
          borderColor="#eeeeee"
          focusBorderColor="#dddddd"
        />
        <Flex mt={4} gap="4px">
          <Input
            h="40px"
            flex={1}
            placeholder="스크립트 입력"
            value={script}
            onChange={e => setScript(e.target.value)}
            borderColor="#eeeeee"
            focusBorderColor="#dddddd"
          />
          <Button
            h="40px"
            bgColor="white"
            border="1px solid #eeeeee"
            type="submit"
            _hover={{ bgColor: '#dddddd' }}
            _focus={{ bgColor: '#dddddd' }}
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
              <Th>장르</Th>
              <Th>무드</Th>
              <Th>악기</Th>
              <Th>금액</Th>
              <Th>듣기</Th>
            </Tr>
          </Thead>
          <Tbody>
            {musicList &&
              musicList.musicList.length > 0 &&
              musicList.musicList.map(music => (
                <Tr key={music.id}>
                  <Td>{music.title}</Td>
                  <Td>{music.artist}</Td>
                  <Td>{music.genres.join(', ')}</Td>
                  <Td>{music.moods.join(', ')}</Td>
                  <Td>{music.instruments.join(', ')}</Td>
                  <Td>{numberToWon(music.price)}</Td>
                  <Td
                    onClick={() => {
                      setIsPlayerOpen(true);
                      setSelectedMusicId(music.id);
                    }}
                  >
                    <Flex cursor="pointer">듣기</Flex>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>

      {isPlayerOpen && selectedMusicId && (
        <PlayerDialog
          isOpen={true}
          onClose={() => {
            setIsPlayerOpen(false);
            setSelectedMusicId(undefined);
          }}
          musicId={selectedMusicId}
        />
      )}
      <ProgressDialog isOpen={loading} />
    </Layout>
  );
}
