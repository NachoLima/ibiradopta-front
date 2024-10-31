// app/Head.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dream Tree',
  description: 'Bienvenido a Dream Tree - Explora nuestras características y servicios',
};

export default function Head() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </>
  );
}
