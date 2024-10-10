import {Permanent_Marker} from 'next/font/google';
import clsx from 'clsx';
import Link from '@/components/Link';

const permMark = Permanent_Marker({weight: '400', subsets: ['latin']});

export default function Home() {
  return (
    <>
      <header className="space-y-4">
        <h1 className={clsx('text-4xl', permMark.className)}>Andrew Huth</h1>
        <p>
          Software engineer, focused on web tech. Especially Accessibility,
          React, Remix, and Tailwind.
        </p>
      </header>
      <main className="space-y-6 pt-4">
        <section>
          <h2 className="sr-only">Links</h2>
          <ul className="flex flex-wrap gap-2 sm:gap-4">
            <li>
              <Link href="https://andrewhuth.substack.com">Writing</Link>
            </li>
            <li>
              <Link href="https://github.com/ahuth">Code</Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/andrewhuth2">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="mailto:hello@huth.me">Email</Link>
            </li>
          </ul>
        </section>
        <section>
          <h2>Projects</h2>
          <ul className="list-inside list-disc">
            <li>
              <Link href="https://ahuth.github.io/raycast/">
                Raycasting in React
              </Link>
            </li>
            <li>
              <Link href="https://ahuth.github.io/conway4/">
                Conway's Game of Life #4 (typescript)
              </Link>
            </li>
            <li>
              <Link href="https://ahuth.github.io/conway5/">
                Conway's Game of Life #5 (wasm)
              </Link>
            </li>
            <li>
              <Link href="https://ahuth.github.io/checkbox-life/">
                Checkbox Life
              </Link>
            </li>
            <li>
              <Link href="https://ahuth.github.io/tetris/">Tetris</Link>
            </li>
            <li>
              <Link href="https://github.com/ahuth/raytrace2/">
                Raytrace #2
              </Link>
            </li>
            <li>
              <Link href="https://ahuth.github.io/automata">
                Elementary cellular automata
              </Link>
            </li>
            <li>
              <Link href="https://ahuth.github.io/stack-machine">
                Stack machine
              </Link>
            </li>
            <li>
              <Link href="https://ahuth.github.io/dice-concept-1">
                Dice Concept #1
              </Link>
            </li>
            <li>
              <Link href="https://ahuth.github.io/branching-concept-1">
                Branching Concept #1
              </Link>
            </li>
            <li>
              <Link href="https://ahuth.github.io/svg-morph-concept">
                SVG morph concept
              </Link>
            </li>
            <li>
              <Link href="https://ahuth.github.io/sprite-concept-1">
                Sprite concept #1
              </Link>
            </li>
            <li>
              <Link href="https://ahuth.github.io/sprite-concept-2">
                Sprite concept #2
              </Link>
            </li>
            <li>
              <Link href="https://ahuth.github.io/flappy-flap-2">
                Flappy Flap 2
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h2>Work and education</h2>
          <ol className="list-inside list-disc" reversed>
            <li>
              <Link href="https://k-id.com/">k-ID</Link>
              <span className="italic text-gray-300">
                , Senior Software Engineer, 2024-present
              </span>
            </li>
            <li>
              <Link href="https://chanzuckerberg.com/">
                Chan Zuckerberg Initiative
              </Link>
              <span className="italic text-gray-300">
                , Senior Staff Software Engineer, 2020-2024
              </span>
            </li>
            <li>
              <Link href="https://www.airbnb.com/">Airbnb</Link>
              <span className="italic text-gray-300">
                , Software Engineer, 2019-2020
              </span>
            </li>
            <li>
              <Link href="https://www.mavenlink.com/">Mavenlink</Link>
              <span className="italic text-gray-300">
                , Senior Software Engineer, 2014-2019
              </span>
            </li>
            <li className="italic text-gray-300">Non-tech stuff, 2007-2014</li>
            <li>
              <Link href="https://udayton.edu/">University of Dayton</Link>
              <span className="italic text-gray-300">
                , BS, Finance, 2003-2007
              </span>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
}
