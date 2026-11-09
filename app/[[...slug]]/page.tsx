import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JournalCategories } from "@/components/almswell/interactions";
import { routes } from "@/components/almswell/routes";

type RoutePath = keyof typeof routes;
type PageProps = { params: Promise<{ slug?: string[] }> };

function getPath(slug: string[] = []): RoutePath {
  const path = "/" + slug.join("/");
  if (!Object.hasOwn(routes, path)) notFound();
  return path as RoutePath;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(routes).map((path) => ({
    slug: path === "/" ? [] : path.slice(1).split("/"),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { title, description, image } = routes[getPath((await params).slug)];

  return {
    title,
    description,
    openGraph: { title, description, images: image ? [image] : [] },
  };
}

export default async function Page({ params }: PageProps) {
  const path = getPath((await params).slug);
  const { default: Content } = await routes[path].load();

  return path === "/journal" ? (
    <JournalCategories>
      <Content />
    </JournalCategories>
  ) : (
    <Content />
  );
}

