import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>div</p>
        <p>
          ItoMiriのウェブページを構築中...
        </p>
      </section>
      <div> {/* ここはgrid */}
      </div>
    </Layout>
  )
}