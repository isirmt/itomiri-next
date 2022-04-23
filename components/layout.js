import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.scss'
import homeStyle from '../styles/layout/home.module.scss'
import Link from 'next/link'

const name = 'Ito Miri'
const nameJp = '井筒 ミリ'

const navLinks = [
  { path: "/", name: "Top" },
  { path: "/posts/", name: "Posts" },
  { path: "/productions/", name: "Productions" },
  { path: "/links/", name: "Links" },
  { path: "https://itomiri.com", name: "itomiri" },
]

export const siteTitle = '井筒ミリ -Ito Miri-'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" type="image/svg" href="/triangle.svg" />
        <meta charset="utf-8" />
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta name="theme-color" content="#FFFD98" />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta name="format-detection" content="email=no,telephone=no,address=no" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <div className={styles.blank} />
            <div className={homeStyle.back}>
              <Image
                src='/images/assets/20220422.png'
                alt='Thum'
                className={homeStyle.backImg}
                layout='fill'
              />
              <p>{name}</p>
              <p>作りたいものを形にする</p>
            </div>
          </>
        ) : (
          <div className={styles.blank} />
        )}
        <nav className={styles.headNav}>
          <ul className={styles.navLinks}>
            <li><Link href="/"><a>Ito Miri<small>.blog</small></a></Link></li>
          </ul>
          <ul className={styles.navLinks}>
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.mLinks}>
          <ul className={styles.navLinks}>
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )} */}
        <div className={styles.footBox}>
          <span>&copy; 2021-{new Date().getFullYear()}{" "}{name} 井筒ミリ</span>
        </div>
      </footer>
    </>
  )
}