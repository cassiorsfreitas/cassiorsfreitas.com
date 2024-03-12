export default function Home() {
  return (
    <main className="mt-32">
      <h1 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gradient-yellow to-gradient-pink">
        hey, I&apos;m <br /> Cássio Freitas
      </h1>
      <h2 className="text-lg lg:text-lg text-grey mt-2">
        Software Engineer at{' '}
        <a
          className="text-gray-600"
          target="_blank"
          href="https://www.hugoboss.com/"
          rel="noreferrer"
        >
          @HugoBoss
        </a>{' '}
        through{' '}
        <a
          className="text-gray-600"
          target="_blank"
          href="https://www.metyis.com/"
          rel="noreferrer"
        >
          @Metyis
        </a>
      </h2>
    </main>
  )
}
