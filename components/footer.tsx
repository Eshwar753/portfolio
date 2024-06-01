import React from "react";

export default function Footer() {

    const currentYear = new Date().getFullYear();
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
         Eshwar&copy;{currentYear}.  All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js, TypeScript, Tailwind CSS, Shadcn/ui, Aceternity/ui,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}