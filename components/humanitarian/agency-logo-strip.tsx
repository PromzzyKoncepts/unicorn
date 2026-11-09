import Image from "next/image";
import { cofi, cofiAgencies } from "./cofi-agencies";

export function AgencyLogoStrip() {
  return (
    <div className="mx-auto flex w-full max-w-[960px] flex-col items-center gap-6 px-3 sm:gap-10 sm:px-6">
      <h2 className="framer-text framer-styles-preset-rm8els text-center">
        Agencies under Humanitarian Affairs
      </h2>
      <ul className="m-0 grid w-full list-none grid-cols-4 items-center gap-x-3 gap-y-3 p-0 sm:gap-x-8 sm:gap-y-8">
        {[cofi, ...cofiAgencies].map(({ name, website, logo }) => (
          <li key={name} className="min-w-0">
            <a
              className="flex h-10 items-center justify-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 sm:h-16"
              href={website}
            >
              <Image
                alt={name}
                className="h-full w-full object-contain"
                height={64}
                src={logo}
                width={180}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
