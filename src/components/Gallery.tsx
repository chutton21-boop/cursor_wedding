"use client";

import { useCallback, useRef, useState } from "react";

const TILE_COLS = 6;
const TILE_ROWS = 3;
const TILE_SIZE = 200;
const GAP = 16;
const TILE_WIDTH = TILE_COLS * TILE_SIZE + (TILE_COLS - 1) * GAP;
const TILE_HEIGHT = TILE_ROWS * TILE_SIZE + (TILE_ROWS - 1) * GAP;
const TILES_X = 5;
const TILES_Y = 5;

function wrapPosition(x: number, y: number) {
  let wx = x;
  let wy = y;
  while (wx > 0) wx -= TILE_WIDTH;
  while (wx < -TILE_WIDTH) wx += TILE_WIDTH;
  while (wy > 0) wy -= TILE_HEIGHT;
  while (wy < -TILE_HEIGHT) wy += TILE_HEIGHT;
  return { x: wx, y: wy };
}

const ITEMS: { src: string; alt: string; title: string }[] = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80", alt: "Wedding rings", title: "Rings" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&q=80", alt: "Wedding bouquet", title: "Bouquet" },
  { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&q=80", alt: "Wedding ceremony", title: "Ceremony" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&q=80", alt: "Wedding cake", title: "Cake" },
  { src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&q=80", alt: "Wedding reception", title: "Reception" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", alt: "Wedding couple", title: "Couple" },
  { src: "https://images.unsplash.com/photo-1529634806795-6795177?w=400&q=80", alt: "Wedding venue", title: "Venue" },
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&q=80", alt: "Wedding decor", title: "Decor" },
  { src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400&q=80", alt: "Wedding dance", title: "First dance" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80", alt: "Wedding rings", title: "Rings" },
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&q=80", alt: "Wedding table", title: "Tables" },
  { src: "https://images.unsplash.com/photo-1529634806795-6795177?w=400&q=80", alt: "Wedding flowers", title: "Flowers" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", alt: "Wedding couple", title: "Couple" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&q=80", alt: "Wedding cake", title: "Cake" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&q=80", alt: "Wedding bouquet", title: "Bouquet" },
  { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&q=80", alt: "Wedding ceremony", title: "Ceremony" },
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&q=80", alt: "Wedding decor", title: "Decor" },
  { src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400&q=80", alt: "Wedding dance", title: "First dance" },
];

function GridTile({ isDragging }: { isDragging: boolean }) {
  return (
    <div
      className="grid shrink-0 gap-4"
      style={{
        gridTemplateColumns: `repeat(${TILE_COLS}, ${TILE_SIZE}px)`,
        pointerEvents: isDragging ? "none" : "auto",
      }}
    >
      {ITEMS.map(({ src, alt, title }, i) => (
        <div
          key={i}
          className="group relative aspect-square w-[200px] overflow-hidden rounded-sm"
        >
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            draggable={false}
          />
          <div
            className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            aria-hidden
          >
            <span className="font-body text-body-s text-white">{title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Gallery() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const lastPointer = useRef({ x: 0, y: 0 });

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    lastPointer.current = { x: e.clientX, y: e.clientY };
    setIsDragging(true);
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastPointer.current.x;
      const dy = e.clientY - lastPointer.current.y;
      lastPointer.current = { x: e.clientX, y: e.clientY };
      setPosition((p) => {
        const next = wrapPosition(p.x + dx, p.y + dy);
        return next;
      });
    },
    [isDragging]
  );

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    setIsDragging(false);
  }, []);

  const handlePointerCancel = useCallback((e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    setIsDragging(false);
  }, []);

  return (
    <section
      className="min-h-0 flex-1 overflow-hidden border-t border-border bg-muted"
      aria-label="Photo gallery"
    >
      <div
        className="h-full min-h-[60vh] w-full cursor-grab select-none overflow-hidden active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        style={{ touchAction: "none" }}
      >
        <div
          className="inline-flex origin-top-left"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        >
          <div
            className="flex flex-col"
            style={{ gap: GAP, width: TILE_WIDTH * TILES_X + GAP * (TILES_X - 1), height: TILE_HEIGHT * TILES_Y + GAP * (TILES_Y - 1) }}
          >
            {Array.from({ length: TILES_Y }, (_, row) => (
              <div key={row} className="flex" style={{ gap: GAP }}>
                {Array.from({ length: TILES_X }, (_, col) => (
                  <GridTile key={`${row}-${col}`} isDragging={isDragging} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
