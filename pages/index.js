import Head from 'next/head'

const styles = {
  main: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontSize: 16,
    lineHeight: 1.5,
  },
  item: {
    listStyle: 'none',
  }
}

export default () =>
  <div>
    <Head>
      <title>Andrew Huth</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main style={styles.main}>
      <ul>
        <li style={styles.item}><a href="https://ahuth.github.io/raycast">Raycast</a></li>
        <li style={styles.item}><a href="https://ahuth.github.io/waves">Waves</a></li>
        <li style={styles.item}><a href="https://ahuth.github.io/frostbite">Frostbite</a></li>
        <li style={styles.item}><a href="https://ahuth.github.io/orbital">Orbital</a></li>
        <li style={styles.item}><a href="https://ahuth.github.io/conway">Conway</a></li>
        <li style={styles.item}><a href="https://github.com/ahuth/standfast">Standfast</a></li>
      </ul>
    </main>
  </div>
