import {Permanent_Marker} from 'next/font/google';
import clsx from 'clsx';
import Link from '@/components/Link';

const permMark = Permanent_Marker({weight: '400', subsets: ['latin']});

export default function Home() {
  return (
    <main className="h-screen bg-black font-sans text-xl font-light text-gray-50 sm:pt-6">
      <div className="mx-auto flex max-w-2xl flex-col gap-2">
        <h1 className={clsx('text-4xl', permMark.className)}>Andrew Huth</h1>
        <section>
          <h2>Programmer</h2>
          <ul className="list-inside list-disc">
            <li>
              <Link href="https://landslide.software">Work with me</Link>
            </li>
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
          <h2>Random stuff</h2>
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
          </ul>
        </section>
      </div>
    </main>
  );
}
