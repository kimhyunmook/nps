export default function Image({ src, alt }: { src: string; alt: string }) {
  const img = src as unknown as { src: string };
  return <img src={img.src} alt={alt} />;
}
