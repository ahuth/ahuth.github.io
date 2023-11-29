import Link from '@/components/Link';

export default function Home() {
  return (
    <main className="bg-black text-gray-50 text-lg font-light font-sans h-screen sm:pt-6">
      <div className="flex flex-col gap-2 max-w-2xl mx-auto">
        <h1 className="text-3xl mb-4">Andrew Huth</h1>
        <p>Frontend software engineer at the <Link href="https://chanzuckerberg.com/">Chan Zuckerberg Initiative</Link>.</p>
        <p>See my writing at <Link href="https://andrewhuth.substack.com">andrewhuth.substack.com</Link> and code at <Link href="https://github.com/ahuth">github.com/ahuth</Link>.</p>
        <p>Random stuff:</p>
        <ul className="list-inside list-['➝_']">
          <li><Link href="https://ahuth.github.io/raycast/">Raycasting in React</Link></li>
          <li><Link href="https://ahuth.github.io/conway4/">Conway's Game of Life #4</Link></li>
          <li><Link href="https://ahuth.github.io/conway5/">Conway's Game of Life #5</Link></li>
          <li><Link href="https://ahuth.github.io/tetris/">Tetris</Link></li>
          <li><Link href="https://github.com/ahuth/raytrace2/">Raytrace #2</Link></li>
          <li><Link href="https://ahuth.github.io/l-systems/">L-systems</Link></li>
          <li><Link href="https://ahuth.github.io/automata">Elementary cellular automata</Link></li>
          <li><Link href="https://github.com/ahuth/emitter-gates">EventEmitter-based logic gates</Link></li>
        </ul>
      </div>
    </main>
  )
}
