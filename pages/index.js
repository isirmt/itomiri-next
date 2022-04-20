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
                width={"100%"}
                height={"100%"}
                layout='intrinsic'
                alt={"RoadSignThumb"}
              />
            </div>
            <div className={home.gridB}>
              vercel
            </div>
          </div>
        </div>

      </section>
      <div> {/* ここはgrid */}
      </div>
    </Layout>
  )
}