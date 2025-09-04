"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useDecodedPathname = () => {
  const pathname = usePathname();
  const [hash, setHash] = useState<string>("");

  const stripLocale = (path: string) => {
    const parts = path.split("/");

    if (parts.length > 1 && parts[1].length === 2) {
      return "/" + parts.slice(2).join("/");
    }
    return path;
  };

  useEffect(() => {
    const updateHash = () => {
      setHash(window.location.hash);
    };

    updateHash();

    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  return {
    pathname: stripLocale(pathname) + hash,
    hash,
  };
};
