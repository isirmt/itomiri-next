import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import homeStyle from '../styles/layout/home.module.scss'
import Link from 'next/link'

const name = 'Ito Miri'
const nameJp = '井筒 ミリ'

const navLinks = [
  { path: "/", name: "Top" },
  { path: "/about/", name: "About" },
  { path: "/news/", name: "News" },
  { path: "/blog/", name: "Blog" },
  { path: "/works/", name: "Works" },
  { path: "/dev/", name: "Dev" },
  { path: "/inner/", name: "Inner" },
  { path: "/joinus/", name: "JoinUs" },
]

export const siteTitle = '井筒ミリ -Ito Miri-'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <div className={homeStyle.back}>
              <p>{name}</p>
              <p>作りたいものを形にする</p>
            </div>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
        <nav className={styles.headNav}>
          <ul className={styles.navLinks}>
            <li><Link href="/"><a>Ito Miri</a></Link></li>
          </ul>
          <ul className={styles.navLinks}>
            <li><Link href="/"><a>Top</a></Link></li>
            <li><Link href="/news/"><a>News</a></Link></li>
            <li><Link href="/productions/"><a>Productions</a></Link></li>
            <li><Link href="https://itomiri.com"><a target="_blank" rel="noopener noreferrer">itomiri</a></Link></li>
            <li><Link href="/links/"><a>Links</a></Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <div className={styles.footBox}>
        <span>&copy; 2021-{new Date().getFullYear()}{" "}{name}</span>
      </div>
      </footer>
    </>
  )
}