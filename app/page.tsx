export default function Home() {
  return (
    <main className="bg-black text-gray-50 text-lg font-light font-sans sm:pt-6">
      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl">Andrew Huth</h1>
          <ol className="flex flex-wrap gap-2">
            <li><a className="text-blue-300 underline" href="#about">About</a></li>
            <li><a className="text-blue-300 underline" href="#writing">Writing</a></li>
            <li><a className="text-blue-300 underline" href="#work">Work</a></li>
            <li><a className="text-blue-300 underline" href="#fun">Fun</a></li>
          </ol>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-2xl" id="about">About</h2>
          <p>Hi there 👋. I'm Andrew, a software engineer with expertise in frontend development and accessibility.</p>
          <p>
            Find me on <a className="text-blue-300 underline" href="https://www.linkedin.com/in/andrewhuth2">LinkedIn</a>,
            {' '}<a className="text-blue-300 underline" href="https://github.com/ahuth">GitHub</a>, and at
            {' '}<a className="text-blue-300 underline" href="mailto:hello@huth.me">hello@huth.me</a>.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-2xl" id="writing">Writing</h2>
          <p>See my writing (about working in tech) on <a className="text-blue-300 underline" href="https://andrewhuth.substack.com/">Substack</a>.</p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-2xl" id="work">Work</h2>
          <p>Currently at the <a className="text-blue-300 underline" href="https://chanzuckerberg.com/">Chan Zuckerberg Initiative</a>, working on <a className="text-blue-300 underline" href="https://remix.run/">Remix</a> apps.</p>
          <p>
            In past lives, I worked at <a className="text-blue-300 underline" href="https://www.airbnb.com/">Airbnb</a> on accessibility,
            and <a className="text-blue-300 underline" href="https://www.mavenlink.com/">Mavenlink</a> with <a className="text-blue-300 underline" href="https://rubyonrails.org/">Rails</a>.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-2xl" id="fun">Fun</h2>
          <ul className="list-inside list-['➝_']">
            <li><a className="text-blue-300 underline" href="https://ahuth.github.io/raycast/">Raycasting in React</a></li>
            <li><a className="text-blue-300 underline" href="https://ahuth.github.io/conway4/">Conway's Game of Life #4</a></li>
            <li><a className="text-blue-300 underline" href="https://ahuth.github.io/tetris/">Tetris</a></li>
            <li><a className="text-blue-300 underline" href="https://github.com/ahuth/raytrace2/">Raytrace #2</a></li>
            <li><a className="text-blue-300 underline" href="https://ahuth.github.io/l-systems/">L-systems</a></li>
            <li><a className="text-blue-300 underline" href="https://ahuth.github.io/automata">Elementary cellular automata</a></li>
            <li><a className="text-blue-300 underline" href="https://github.com/ahuth/emitter-gates">EventEmitter-based logic gates</a></li>
          </ul>
        </div>
      </div>
    </main>
  )
}
