import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import home from '../styles/layout/home.module.scss'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={home.homeGrid}>

        <div className={home.gridA}>
          <div className={home.sectionTitle}>News</div>
        </div>

        <div className={home.gridB}>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="itomiri"
            options={{ margin: "0 5%",width: "100%",height: "max(min(40vw, 40vh), 30vw)" }}
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
    </Layout>
  )
}