"use client";

import {
  createContext,
  useContext,

  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from "react";

type DivProps = ComponentPropsWithoutRef<"div">;

export function PreviewForm({
  children,
  ...props
}: ComponentPropsWithoutRef<"form">) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      {...props}
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      {children}
      {submitted && (
        <p className="text-sm" role="status">
          This preview does not send submissions or process donations.
        </p>
      )}
    </form>
  );
}

export function AccordionItem({
  className,
  defaultOpen = false,
  ...props
}: DivProps & { defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const variant = open ? "framer-v-1i0b62a" : "framer-v-1id1sxg";

  return (
    <div
      {...props}
      className={className?.replace(/framer-v-(1i0b62a|1id1sxg)/, variant)}
      data-accordion-open={open}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={(event) => {
        if (!(event.target as Element).closest("a")) setOpen(!open);
      }}
      onKeyDown={(event) => {
        if (event.target === event.currentTarget && isActivation(event)) {
          event.preventDefault();
          setOpen(!open);
        }
      }}
    />
  );
}

function isActivation(event: KeyboardEvent) {
  return event.key === "Enter" || event.key === " ";
}

export function MobileNavigation(props: ComponentPropsWithoutRef<"nav">) {
  const [open, setOpen] = useState(false);

  function handleClick(event: MouseEvent<HTMLElement>) {
    const target = event.target as Element;
    if (target.closest('[data-framer-name="Menu Icon Wrap"]')) setOpen(!open);
    else if (target.closest("a")) setOpen(false);
  }

  return (
    <nav
      {...props}
      data-mobile-menu={open ? "open" : "closed"}
      onClick={handleClick}
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
        if (
          isActivation(event) &&
          (event.target as Element).closest('[data-framer-name="Menu Icon Wrap"]')
        ) {
          event.preventDefault();
          setOpen(!open);
        }
      }}
    />
  );
}

export function VideoPlayer(props: DivProps) {
  const player = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  async function toggle() {
    const video = player.current?.querySelector("video");
    if (!video) return;
    if (!video.paused) {
      video.pause();
      setPlaying(false);
      return;
    }

    try {
      await video.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }

  return (
    <div
      {...props}
      ref={player}
      data-video-playing={playing}
      onClick={(event) => {
        if ((event.target as Element).closest("video, [tabindex]")) void toggle();
      }}
      onKeyDown={(event) => {
        if (isActivation(event)) {
          event.preventDefault();
          void toggle();
        }
      }}
    />
  );
}

const JournalContext = createContext({
  category: "All",
  select: (_category: string) => {},
});

export function JournalCategories({ children }: { children: ReactNode }) {
  const [category, select] = useState("All");

  return (
    <JournalContext.Provider value={{ category, select }}>
      <div data-journal-filter={category} className="contents">
        {children}
      </div>
    </JournalContext.Provider>
  );
}

export function JournalFilter({
  category,
  className,
  ...props
}: ComponentPropsWithoutRef<"button"> & { category: string }) {
  const state = useContext(JournalContext);
  const selected = state.category === category;


  return (
    <button
      {...props}

      type="button"
      aria-pressed={selected}
      className={className}
      onClick={() => state.select(category)}
    />
  );
}

