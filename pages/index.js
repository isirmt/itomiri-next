import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import home from '../styles/layout/home.module.scss'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getServerSideProps(context) {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={home.homeGrid}>

        <div className={home.gridA}>
          <div className={home.sectionTitle}>Posts</div>
          <ul>
            {allPostsData.slice(0, 6).map(({ id, date, title, type }) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>
                  <a><span>{type}</span><span className={home.typeTitle}> - </span>{title}</a>
                </Link>
                <br />
                <small >
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
          <Link href="/posts/">
            <p className={home.moreTextP}><a title='News' className={home.moreText}>more...</a></p>
          </Link>
        </div>

        <div className={home.gridB}>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="itomiri"
            options={{ margin: "0 5%", width: "100%", height: "30rem" }}
          />
        </div>

        <div className={home.gridC}>
          <div className={home.sbTile}>
            <div className={home.gridA}>
              <Image
                priority
                src="/images/home/thum1.png"
                layout='fill'
                alt={"RoadSignThumb"}
              />
            </div>
            <div className={home.gridB}>
              <div>音楽</div>
            </div>
          </div>
          <div className={home.sbTile}>
            <div className={home.gridB}>
              <Image
                priority
                src="/images/home/thum2.png"
                layout='fill'
                alt={"megahonThumb"}
              />
            </div>
            <div className={home.gridA}>
              <div>映像</div>
            </div>
          </div>
          <div className={home.sbTile}>
            <div className={home.gridA}>
              <Image
                priority
                src="/images/home/thum3.png"
                layout='fill'
                alt={"atbThumb"}
              />
            </div>
            <div className={home.gridB}>
              <div>プログラム</div>
            </div>
          </div>
        </div>

      </section>
      <div> {/* ここはgrid */}
      </div>
      {/* className={`${utilStyles.headingMd} ${utilStyles.padding1px}`} */}
    </Layout>
  )
}