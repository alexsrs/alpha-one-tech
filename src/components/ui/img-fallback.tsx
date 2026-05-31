import React, { useState } from "react";

type ImgWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallback?: string;
};

export default function ImgWithFallback({
  fallback = "/assets/placeholder.svg",
  alt = "",
  className,
  src,
  ...rest
}: ImgWithFallbackProps) {
  const [error, setError] = useState(false);

  return (
    <img
      src={error ? fallback : src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...rest}
    />
  );
}
