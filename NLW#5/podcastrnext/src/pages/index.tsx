import { GetStaticProps } from 'next';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt';
import { api } from '../services/api';
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';

type Episode = {
  episodes: Array<{
    id: string;
    title: string;
    members: string;
    thumbnail: string;
    publishedAt: string;
    duration: number;
    durationAsString: string;
    description: string;
    url: string;
  }>
}

type HomeProps = {
  episodes: Episode[]
}

export default function Home(props) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      members: episode.members,
      thumbnail: episode.thumbnail,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      description: episode.description,
      url: episode.file.url,
    }
  })

  return {
    props: {
      episodes,
    },
    revalidate: 60 * 60 * 8,
  }
}