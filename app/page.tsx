import Link from '@/components/Link';

export default function Home() {
  return (
    <main className="bg-black text-gray-50 text-lg font-light font-sans sm:pt-6">
      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl">Andrew Huth</h1>
          <ol className="flex flex-wrap gap-2">
            <li><Link href="#about">About</Link></li>
            <li><Link href="#writing">Writing</Link></li>
            <li><Link href="#work">Work</Link></li>
            <li><Link href="#fun">Fun</Link></li>
          </ol>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-2xl" id="about">About</h2>
          <p>Hi there 👋. I'm Andrew, a software engineer with expertise in frontend development and accessibility.</p>
          <p>
            Find me on <Link href="https://www.linkedin.com/in/andrewhuth2">LinkedIn</Link>,
            {' '}<Link href="https://github.com/ahuth">GitHub</Link>, and at
            {' '}<Link href="mailto:hello@huth.me">hello@huth.me</Link>.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-2xl" id="writing">Writing</h2>
          <p>See my writing (about working in tech) on <Link href="https://andrewhuth.substack.com/">Substack</Link>.</p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-2xl" id="work">Work</h2>
          <p>Currently at the <Link href="https://chanzuckerberg.com/">Chan Zuckerberg Initiative</Link>, working on <Link href="https://remix.run/">Remix</Link> apps.</p>
          <p>
            In past lives, I worked at <Link href="https://www.airbnb.com/">Airbnb</Link> on accessibility,
            and <Link href="https://www.mavenlink.com/">Mavenlink</Link> with <Link href="https://rubyonrails.org/">Rails</Link>.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-2xl" id="fun">Fun</h2>
          <ul className="list-inside list-['➝_']">
            <li><Link href="https://ahuth.github.io/raycast/">Raycasting in React</Link></li>
            <li><Link href="https://ahuth.github.io/conway4/">Conway's Game of Life #4</Link></li>
            <li><Link href="https://ahuth.github.io/tetris/">Tetris</Link></li>
            <li><Link href="https://github.com/ahuth/raytrace2/">Raytrace #2</Link></li>
            <li><Link href="https://ahuth.github.io/l-systems/">L-systems</Link></li>
            <li><Link href="https://ahuth.github.io/automata">Elementary cellular automata</Link></li>
            <li><Link href="https://github.com/ahuth/emitter-gates">EventEmitter-based logic gates</Link></li>
          </ul>
        </div>
      </div>
    </main>
  )
}
