"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink, LoaderCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PAGE_COUNT = 15;
const PAGE_ASPECT_RATIO = 674.6 / 475.9;
const PAGE_SOURCES = Array.from(
  { length: PAGE_COUNT },
  (_, index) => `/wsd-zapwrap-brochure-pages/page-${String(index + 1).padStart(2, "0")}.png`,
);

const HTMLFlipBook = dynamic(() => import("react-pageflip"), {
  ssr: false,
  loading: () => (
    <div className="catalogue-flipbook-loading" role="status">
      <LoaderCircle className="catalogue-loading-spinner" size={24} aria-hidden="true" />
      Preparing the page-turning reader...
    </div>
  ),
});

interface CataloguePage {
  src: string;
  width: number;
  height: number;
}

interface PageFlipHandle {
  flipNext: () => void;
  flipPrev: () => void;
}

interface HTMLFlipBookHandle {
  pageFlip: () => PageFlipHandle;
}

export default function CatalogueBook() {
  const [pages, setPages] = useState<CataloguePage[]>([]);
  const [loadedPages, setLoadedPages] = useState(0);
  const [loadError, setLoadError] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLFlipBookHandle>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const objectUrls: string[] = [];
    let active = true;

    const loadPages = async () => {
      const results = await Promise.allSettled(
        PAGE_SOURCES.map(async (source) => {
          const response = await fetch(source, {
            cache: "force-cache",
            signal: abortController.signal,
          });

          if (!response.ok) {
            throw new Error(`Failed to load ${source}: ${response.status}`);
          }

          const objectUrl = URL.createObjectURL(await response.blob());
          objectUrls.push(objectUrl);
          const image = new window.Image();
          image.src = objectUrl;
          await image.decode();

          if (active) {
            setLoadedPages((count) => count + 1);
          }

          return {
            src: objectUrl,
            width: image.naturalWidth,
            height: image.naturalHeight,
          };
        }),
      );

      if (!active) {
        return;
      }

      const failure = results.find((result) => result.status === "rejected");
      if (failure?.status === "rejected") {
        console.error("Could not preload every catalogue page.", failure.reason);
        objectUrls.forEach((url) => URL.revokeObjectURL(url));
        setLoadError(true);
        return;
      }

      setPages(
        results.map((result) => {
          if (result.status !== "fulfilled") {
            throw new Error("Catalogue page loading did not complete.");
          }

          return result.value;
        }),
      );
    };

    void loadPages();

    return () => {
      active = false;
      abortController.abort();
      objectUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) {
      return;
    }

    const resizeObserver = new ResizeObserver(([entry]) => {
      setPageWidth(Math.min(980, Math.max(220, Math.floor(entry.contentRect.width))));
    });

    resizeObserver.observe(stage);
    return () => resizeObserver.disconnect();
  }, []);

  const pageHeight = Math.round(pageWidth / PAGE_ASPECT_RATIO);
  const isReady = pages.length === PAGE_COUNT && pageWidth > 0;

  const flipPage = (direction: "next" | "previous") => {
    const pageFlip = bookRef.current?.pageFlip();
    if (direction === "next") {
      pageFlip?.flipNext();
    } else {
      pageFlip?.flipPrev();
    }
  };

  return (
    <div>
      <div className="catalogue-book-intro">
        <div>
          <span className="eyebrow">TURN THE PAGES</span>
          <h2>Explore the WSD ZapWrap range.</h2>
        </div>
        <p>Use the arrows, swipe, or turn a page to explore the full brochure.</p>
      </div>
      <div className="catalogue-reader-shell">
        <div className="catalogue-book" ref={stageRef}>
          {loadError ? (
            <div className="catalogue-flipbook-loading catalogue-load-error" role="alert">
              <p>We couldn&apos;t load every brochure page. Please refresh to try again.</p>
              <button
                type="button"
                className="catalogue-page-button"
                onClick={() => window.location.reload()}
              >
                Refresh catalogue
              </button>
            </div>
          ) : isReady ? (
            <div className="catalogue-flipbook-stage">
              <HTMLFlipBook
                ref={bookRef}
                key={pageWidth}
                className="catalogue-flipbook"
                style={{}}
                startPage={currentPage}
                size="fixed"
                width={pageWidth}
                height={pageHeight}
                minWidth={220}
                maxWidth={980}
                minHeight={156}
                maxHeight={692}
                drawShadow
                flippingTime={700}
                usePortrait
                startZIndex={0}
                autoSize={false}
                maxShadowOpacity={0.35}
                showCover
                mobileScrollSupport
                clickEventForward
                useMouseEvents
                swipeDistance={30}
                showPageCorners
                disableFlipByClick={false}
                onFlip={(event: { data: number }) => setCurrentPage(event.data)}
              >
                {pages.map((page, index) => (
                  <div className="catalogue-flip-page" key={PAGE_SOURCES[index]}>
                    <Image
                      className="catalogue-page-image"
                      src={page.src}
                      alt={`WSD ZapWrap product brochure page ${index + 1}`}
                      fill
                      sizes="(max-width: 760px) calc(100vw - 80px), 980px"
                      loading="eager"
                      unoptimized
                    />
                  </div>
                ))}
              </HTMLFlipBook>
            </div>
          ) : (
            <div className="catalogue-flipbook-loading" role="status" aria-live="polite">
              <LoaderCircle className="catalogue-loading-spinner" size={24} aria-hidden="true" />
              <span>
                Loading brochure pages: {loadedPages} of {PAGE_COUNT}
              </span>
              <progress
                value={loadedPages}
                max={PAGE_COUNT}
                aria-label="Brochure loading progress"
              />
            </div>
          )}
        </div>
      </div>
      {isReady && (
        <div className="catalogue-book-controls">
          <div
            className="catalogue-reader-navigation"
            role="group"
            aria-label="Brochure page controls"
          >
            <button
              type="button"
              className="catalogue-page-button"
              onClick={() => flipPage("previous")}
              disabled={currentPage <= 0}
              aria-label="Previous page"
            >
              <ChevronLeft size={18} aria-hidden="true" />
              Previous
            </button>
            <span className="catalogue-page-indicator" aria-live="polite">
              Page {currentPage + 1} of {PAGE_COUNT}
            </span>
            <button
              type="button"
              className="catalogue-page-button"
              onClick={() => flipPage("next")}
              disabled={currentPage >= PAGE_COUNT - 1}
              aria-label="Next page"
            >
              Next
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
          <a
            className="catalogue-open-link"
            href="/WSD%20ZapWrap%20Product%20Brochure.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Open full-size brochure <ExternalLink size={15} aria-hidden="true" />
          </a>
        </div>
      )}
    </div>
  );
}
