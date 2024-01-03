import Link from 'next/link';

export default async function Bad() {
  // const res = await fetch(`/api/bad`);
  // const data: string[] = await res.json();

  return (
    <div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left'>
      {/* {data.map((item) => (
        <Link
          href='/'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          rel='noopener noreferrer'
          key={item}
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>{item}</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>初期画面に戻ります</p>
        </Link>
      ))} */}
      <Link
        href='/'
        className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
        rel='noopener noreferrer'
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>hoge</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>初期画面に戻ります</p>
      </Link>
    </div>
  );
}
