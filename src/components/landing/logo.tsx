import type { SVGProps } from 'react';

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      {...props}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="currentColor"
        d="M208 48H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16Zm-40 64h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V64a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16Z"
        opacity=".2"
      />
      <path
        fill="currentColor"
        d="M208 40a24 24 0 0 0-24 24v128a24 24 0 0 0 24 24h16a8 8 0 0 0 0-16h-16a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h16a8 8 0 0 0 0-16ZM48 216h128a8 8 0 0 1 8 8h16a8 8 0 0 0 0-16h-16a24 24 0 0 0-24-24H48a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h16a8 8 0 0 0 0-16H48a24 24 0 0 0-24 24v128a24 24 0 0 0 24 24Zm88-104h-32V80a8 8 0 0 0-16 0v32H56a8 8 0 0 0 0 16h32v32a8 8 0 0 0 16 0v-32h32a8 8 0 0 0 0-16Zm72 80v-48a8 8 0 0 0-16 0v48a8 8 0 0 0 16 0Z"
      />
    </svg>
  );
}
