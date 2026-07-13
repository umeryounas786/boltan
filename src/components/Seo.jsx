import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  TWITTER_HANDLE,
  absUrl,
} from '@/lib/siteConfig';

/**
 * Reusable SEO head component.
 *
 * Renders title, meta description, canonical link, Open Graph tags,
 * Twitter Card tags and any JSON-LD structured data passed via `schema`.
 *
 * Props:
 *  - title:        Page/article title (site name is appended unless titleTemplate is false)
 *  - description:  Meta description
 *  - path:         Route path (e.g. "/services") used to build the canonical URL
 *  - canonical:    Explicit canonical URL (overrides `path`)
 *  - image:        Social share image (path or absolute URL)
 *  - type:         Open Graph type ("website" | "article", default "website")
 *  - keywords:     Array or comma-separated string of keywords
 *  - noindex:      When true, adds a noindex,nofollow robots tag
 *  - schema:       A JSON-LD object or array of objects for structured data
 *  - titleTemplate: Set to false to use `title` verbatim without the site suffix
 *  - article:      { publishedTime, modifiedTime, author, section } for og:article
 */
export function Seo({
  title,
  description,
  path,
  canonical,
  image,
  type = 'website',
  keywords,
  noindex = false,
  schema,
  titleTemplate = true,
  article,
}) {
  const canonicalUrl = canonical || absUrl(path || '/');
  const fullTitle =
    titleTemplate && title && !title.includes(SITE_NAME)
      ? `${title} | ${SITE_NAME}`
      : title || SITE_NAME;
  const ogImage = absUrl(image || DEFAULT_OG_IMAGE);
  const keywordsStr = Array.isArray(keywords) ? keywords.join(', ') : keywords;
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywordsStr && <meta name="keywords" content={keywordsStr} />}
      <link rel="canonical" href={canonicalUrl} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}
      {article?.author && <meta property="article:author" content={article.author} />}
      {article?.section && <meta property="article:section" content={article.section} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />
      {TWITTER_HANDLE && <meta name="twitter:site" content={TWITTER_HANDLE} />}

      {/* Structured data */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}

export default Seo;
