import React from "react";
import BaseHead from "next/head";

export const Head = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => (
  <BaseHead>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    {description && <meta property="og:description" content={description} />}
    <meta property="og:type" content="blog" />
    <meta property="og:site_name" content="berlysia.net" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    {description && <meta name="twitter:description" content={description} />}
    <meta name="twitter:creator" content="@berlysia" />
  </BaseHead>
);