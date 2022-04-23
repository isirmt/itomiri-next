import Layout, { siteTitle } from '../../components/layout'
import post from '../../styles/layout/postsList.module.scss'
import Link from 'next/link'
import SEO from '../../components/Seo'

export default function Productions() {
    return (
        <Layout>
            <SEO
                pageTitle={'Productions'}
                pageDescription={'井筒ミリのブログ - リンク'}
            />
            <section className={post.main}>
                <h1>Productions</h1>
                <p>工事中</p>
            </section>
        </Layout>
    )
}