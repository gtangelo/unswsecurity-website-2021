import React from 'react';

interface SvgIconLinkProps {
  href: string;
  width?: string;
  src: string;
  alt: string;
}

const SvgIconLink = ({
  href, width = '50px', src, alt,
}: SvgIconLinkProps) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img src={src} width={width} alt={alt} />
    </a>
  );
};

export default SvgIconLink;
