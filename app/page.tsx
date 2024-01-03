import Link from 'next/link';

export default function Home() {
  return (
    <div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left'>
      <Link
        href='/bad'
        className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
        rel='noopener noreferrer'
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>Bad</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          API発火しますが、このままだとビルド通りません。
        </p>
      </Link>
      <Link
        href='/good'
        className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
        rel='noopener noreferrer'
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>good</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>これならビルド通ります。</p>
      </Link>
    </div>
  );
}
