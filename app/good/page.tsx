import Link from 'next/link';
import { headers } from 'next/headers';
import { config } from '@/app/lib/config';

const fetchData = async (host: string) => {
  const res = await fetch(`${config.apiPrefix}${host}/api/good`);
  return res.json();
};

export default async function Good() {
  const host = headers().get('host');
  const data: string[] = await fetchData(host!);

  return (
    <div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left'>
      {data.map((item) => (
        <Link
          href='/'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          rel='noopener noreferrer'
          key={item}
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>{item}</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>初期画面に戻ります</p>
        </Link>
      ))}
    </div>
  );
}
