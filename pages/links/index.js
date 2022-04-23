import Layout, { siteTitle } from '../../components/layout'
import post from '../../styles/layout/postsList.module.scss'
import Link from 'next/link'
import SEO from '../../components/Seo'

export default function Posts() {
    return (
        <Layout>
            <SEO
                pageTitle={'Links'}
                pageDescription={'井筒ミリのブログ - リンク'}
            />
            <section className={post.main}>
                <h1>Links</h1>
                <ul>
                    <li>
                        <Link href="https://itomiri.com/">
                            <a>井筒ミリ<small>紹介ページ</small></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://twitter.com/ItoMiri">
                            <a>Twitter<small>@itomiri</small></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://soundcloud.com/user-659804378/">
                            <a>SoundCloud<small>Ito Miri</small></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/isirmt">
                            <a>GitHub<small>isirmt</small></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/itomiri">
                            <a>GitHub<small>ItoMiri</small></a>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="https://www.youtube.com/channel/UC1uO5CcNNQI6TlAGxckup1A">
                            <a>YouTube<small>井筒 ミリ / Ito Miri</small></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.nicovideo.jp/user/118078888">
                            <a>ニコニコ<small>井筒 ミリ</small></a>
                        </Link>
                    </li>
                </ul>
            </section>
        </Layout>
    )
}