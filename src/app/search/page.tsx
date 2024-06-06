import Layout from '@/components/layouts/Layout';
import { useAISearchFetch } from '@/hooks/mutations/useAISearchMutation';

import SearchPage from './SearchPage';

type PageProps = {
  searchParams: { [key: string]: string | undefined };
};

export default async function Page({ searchParams }: PageProps) {
  const query: string = searchParams.q || '';
  const { musicList, tags } = await useAISearchFetch(query);

  return (
    <Layout>
      {musicList && tags && <SearchPage musicList={musicList} tags={tags} />}
    </Layout>
  );
}
