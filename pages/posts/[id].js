import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import pcss from '../../styles/layout/posts.module.scss'
import Link from "next/link";

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title + " - 井筒ミリ"}</title>
            </Head>
            <article className={pcss.main}>
                <h1>{postData.title}</h1>
                <div className={pcss.date}>
                    post:<Date dateString={postData.date} />, lastUpdated:{postData.last}
                </div>
                <div className={pcss.author}>
                    author:{postData.author}
                </div>
                <div className={pcss.contents} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                <Link href="/posts/">
                    <a className={pcss.backLink}>記事一覧へ</a>
                </Link>
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}