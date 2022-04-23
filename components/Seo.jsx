import Head from 'next/head'
import React from 'react';
import { useRouter } from 'next/router';

const Seo = ({
    pageTitle,
    pageDescription
}) => {
    const defaultTitle = '井筒ミリ.blog'
    const defaultDescription = '井筒ミリのブログページ'

    const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle
    const description = pageDescription ? pageDescription : defaultDescription

    const router = useRouter();

    const path = "https://blog.itomiri.com"+router.pathname;
    console.log(path);

    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width,initial-scale=1.0" />
            <meta name="description" content={description} />
            <meta property="og:url" content={path} />
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://blog.itomiri.com/Thumbnail.png" />
            <meta property="og:image:width" content="1280" />
            <meta property="og:image:height" content="640" />
            <meta name="twitter:card" content="summary_large_image" />
            <link rel="canonical" href={path} />
        </Head>
    )
}

export default Seo
