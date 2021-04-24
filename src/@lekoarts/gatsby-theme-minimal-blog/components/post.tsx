/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "./layout";
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags";
import SEO from "./seo";
import useSiteMetadata from "../hooks/use-site-metadata";
import { TwitterShareButton, TwitterIcon } from "react-share";

type PostProps = {
  data: {
    post: {
      slug: string;
      title: string;
      date: string;
      tags?: {
        name: string;
        slug: string;
      }[];
      description?: string;
      body: string;
      excerpt: string;
      timeToRead?: number;
      banner?: {
        childImageSharp: {
          resize: {
            src: string;
          };
        };
      };
    };
  };
};

const px = [`32px`, `16px`, `8px`, `4px`];
const shadow = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`);

const Post = ({ data: { post } }: PostProps) => {
  const { siteImage } = useSiteMetadata();
  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.description ? post.description : post.excerpt}
        image={post.banner ? post.banner.childImageSharp.resize.src : siteImage}
        pathname={post.slug}
      />
      <Styled.h2>{post.title}</Styled.h2>
      <p
        sx={{
          color: `secondary`,
          mt: 3,
          a: { color: `secondary` },
          fontSize: [1, 1, 2],
        }}
      >
        <time>{post.date}</time>
        {post.tags && (
          <React.Fragment>
            {` — `}
            <ItemTags tags={post.tags} />
          </React.Fragment>
        )}
        {post.timeToRead && ` — `}
        {post.timeToRead && <span>{post.timeToRead} min read</span>}
      </p>
      <section
        sx={{
          my: 5,
          ".gatsby-resp-image-wrapper": {
            my: [4, 4, 5],
            boxShadow: shadow.join(`, `),
          },
        }}
      >
        <MDXRenderer>{post.body}</MDXRenderer>
        <TwitterShareButton
          url={window.location.href}
          title={post.title}
          via="@africansinatra"
        >
          <Flex
            sx={{
              mt: [2, 4],
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TwitterIcon round size="36" />
            <span
              sx={{
                pl: 2,
                fontWeight: "bold",
              }}
              title="Share on Twitter"
            >
              Share on Twitter
            </span>
          </Flex>
        </TwitterShareButton>
      </section>
    </Layout>
  );
};

export default Post;
