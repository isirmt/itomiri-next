import Layout, { siteTitle } from '../../components/layout'
import post from '../../styles/layout/postsList.module.scss'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'
import SEO from '../../components/Seo'


export async function getServerSideProps(context) {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Posts({ allPostsData }) {
    return (
        <Layout>
            <SEO
                pageTitle={'Posts'}
                pageDescription={'井筒ミリのブログ - 投稿一覧'}
            />
            <section className={post.main}>
                <h1>Posts</h1>
                <ul>
                    {allPostsData.map(({ id, date, title, type }) => (
                        <li key={id}>
                            <Link href={`/posts/${id}`}>
                                <a><span>{type}</span><span className={post.typeTitle}> - </span>{title}</a>
                            </Link>
                            <br />
                            <small >
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}