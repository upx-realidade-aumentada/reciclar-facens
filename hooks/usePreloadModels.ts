import { items } from "@/data/items";
import { useGLTF } from "@react-three/drei/core";
import { useEffect, useState } from "react";

export function usePreloadModels() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    function preload() {
      for (const item of items) {
        useGLTF.preload(item.src);
      }

      setLoaded(true);
    }

    preload();
  }, []);

  return loaded;
}
