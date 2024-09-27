import {Permanent_Marker} from 'next/font/google';
import clsx from 'clsx';
import Link from '@/components/Link';

const permMark = Permanent_Marker({weight: '400', subsets: ['latin']});

export default function Home() {
  return (
    <>
      <header className="space-y-4 sm:pt-6">
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
        <section className="space-y-4">
          <h2>Projects</h2>
          <ul>
            <li className="md:flex">
              <Link
                className="block w-52 flex-shrink-0"
                href="https://ahuth.github.io/raycast/"
              >
                Raycast
              </Link>
              <span className="text-gray-300">Raycasting engine in React</span>
            </li>
            <li className="md:flex">
              <Link
                className="block w-52 flex-shrink-0"
                href="https://ahuth.github.io/conway4/"
              >
                Conway 4
              </Link>
              <span className="text-gray-300">
                Optimized Conway's Game of Life in TypeScript
              </span>
            </li>
            <li className="md:flex">
              <Link
                className="block w-52 flex-shrink-0"
                href="https://ahuth.github.io/conway5/"
              >
                Conway 5
              </Link>
              <span className="text-gray-300">
                Conway's Game of Life in Web Assembly
              </span>
            </li>
            <li className="md:flex">
              <Link
                className="block w-52 flex-shrink-0"
                href="https://ahuth.github.io/checkbox-life/"
              >
                Checkbox Life
              </Link>
              <span className="text-gray-300">
                Conway's Game of Life in checkboxes
              </span>
            </li>
            <li className="md:flex">
              <Link
                className="block w-52 flex-shrink-0"
                href="https://ahuth.github.io/tetris/"
              >
                Tetris
              </Link>
              <span className="text-gray-300">Yep... Tetris in React</span>
            </li>
            <li className="md:flex">
              <Link
                className="block w-52 flex-shrink-0"
                href="https://github.com/ahuth/raytrace2/"
              >
                Raytrace #2
              </Link>
              <span className="text-gray-300">
                Implementation of a ray tracer from "Ray Tracing in One Weekend"
              </span>
            </li>
            <li className="md:flex">
              <Link
                className="block w-52 flex-shrink-0"
                href="https://ahuth.github.io/automata"
              >
                Automata
              </Link>
              <span className="text-gray-300">
                Elementary cellular automata
              </span>
            </li>
            <li className="md:flex">
              <Link
                className="block w-52 flex-shrink-0"
                href="https://ahuth.github.io/stack-machine"
              >
                Stack machine
              </Link>
              <span className="text-gray-300">
                Very basic POC of a Zachtronics-style game
              </span>
            </li>
            <li className="md:flex">
              <Link
                className="block w-52 flex-shrink-0"
                href="https://ahuth.github.io/dice-concept-1"
              >
                Dice Concept #1
              </Link>
              <span className="text-gray-300">Dice game mechanic concept</span>
            </li>
            <li className="md:flex">
              <Link
                className="block w-52 flex-shrink-0"
                href="https://ahuth.github.io/branching-concept-1"
              >
                Branching Concept #1
              </Link>
              <span className="text-gray-300">
                Branching narrative game mechanic concept
              </span>
            </li>
            <li className="md:flex">
              <Link
                className="block w-52 flex-shrink-0"
                href="https://ahuth.github.io/svg-morph-concept"
              >
                SVG morph concept
              </Link>
              <span className="text-gray-300">SVG animation concept</span>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
