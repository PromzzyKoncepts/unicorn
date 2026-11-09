import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { agencyPhoto, humanitarianOrganisations } from "@/components/humanitarian/cofi-agencies";
import { MinistryLogo } from "@/components/humanitarian/ministry-logo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return humanitarianOrganisations.map(({ slug }) => ({ slug }));
}

async function getAgency(params: Props["params"]) {
  const { slug } = await params;
  const agency = humanitarianOrganisations.find((entry) => entry.slug === slug);
  if (!agency) notFound();

  return agency;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const agency = await getAgency(params);
  return {
    title: `${agency.name} | Loveworld Ministry of Humanitarian Affairs`,
    description: agency.description,
  };
}

export default async function AgencyPage({ params }: Props) {
  const agency = await getAgency(params);

  return (
    <main className="min-h-screen bg-[#fdfdf5] px-5 py-8 text-[#1e1e1e] sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 flex items-center justify-between gap-4">
          <Link className="block h-12 w-20" href="/">
            <MinistryLogo />
          </Link>
          <Link className="text-sm font-bold text-[#754100]" href="/#agencies">
            ← All agencies
          </Link>
        </header>
        <article className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
          <div>
            <Image className="mb-6 h-16 w-32 object-contain object-left" alt="" width={128} height={64} src={agency.logo} />
            <p className="text-sm font-bold uppercase tracking-widest text-[#754100]">{agency.focus}</p>
            <h1 className="mt-3 text-4xl leading-tight font-bold tracking-tight sm:text-5xl">{agency.name}</h1>
            <p className="mt-5 max-w-prose text-base leading-relaxed sm:text-lg">{agency.description}</p>
            <a className="mt-6 inline-flex rounded-full bg-[#754100] px-6 py-3 text-sm font-bold text-white no-underline" href={agency.website}>
              Visit the official website <span aria-hidden="true" className="ml-2">↗</span>
            </a>
          </div>
          <figure className="m-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image alt={agency.photoAlt} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" src={agencyPhoto(agency.slug)} />
            </div>
           
          </figure>
        </article>
      </div>
    </main>
  );
}

