import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <p>Hello world.</p>
      Click here to go to mdx test! 
      <Link href="/test"><a>Test!</a></Link>

      Click on my head.
    </div>
  );
}
