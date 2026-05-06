import { permanentRedirect } from "next/navigation";
import { getBlogPost } from "@/data/blog";

interface Props {
  params: { slug: string; child: string };
}

// Catchall for unknown 2-segment paths like /<blog-slug>/<wp-attachment>/ or /<random>/<feed>/.
// WordPress generated millions of these (one per uploaded image, RSS feed, taxonomy variation).
// If the parent slug is a migrated blog post → redirect to the parent post.
// Else → redirect to the blog index.
//
// Real 2-segment routes like /itineraries/lifestyle-and-nature, /travel-information/travel-tips
// have explicit static page.tsx files which take precedence over this dynamic catchall.
export default function CatchallChildPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (post) permanentRedirect(`/${params.slug}`);
  permanentRedirect("/new-zealand-travel-blog");
}

export function generateStaticParams() {
  return [];
}

export const dynamic = "force-dynamic";
