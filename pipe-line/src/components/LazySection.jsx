// src/components/LazySection.jsx

import { useInView } from "react-intersection-observer";

export default function LazySection({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px", // Start loading 200px before it becomes visible
  });

  return (
    <div ref={ref}>
      {inView ? children : <div style={{ minHeight: "500px" }} />}
    </div>
  );
}
