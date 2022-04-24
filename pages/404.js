import Layout, { siteTitle } from '../components/layout'
import post from '../styles/layout/postsList.module.scss'
import Link from 'next/link'
import SEO from '../components/Seo'

export default function Custom404() {
    return (
        <Layout>
            <SEO
                pageTitle={'ページが見つかりません'}
                pageDescription={'井筒ミリのブログ - 404'}
            />
            <section className={post.main}>
                <h1>404 Not Found</h1>
                <p>ページが削除，または移動した可能性があります。</p>
                <Link href="/">
                    <a>TOPへ</a>
                </Link>
            </section>
        </Layout>
    )
}