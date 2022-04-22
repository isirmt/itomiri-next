import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../../components/layout'
import post from '../../styles/layout/postsList.module.scss'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'

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
            <Head>
                <title>Posts{" - "}{siteTitle}</title>
            </Head>
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