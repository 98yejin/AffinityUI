import React from "react";

interface AnchorItem {
  key: string;
  href: string;
  title: string;
}

interface AnchorProps {
  items: AnchorItem[];
  replace?: boolean;
}

const Anchor: React.FC<AnchorProps> = ({ items, replace = false }) => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    if (replace) {
      window.history.replaceState(null, "", href);
    } else {
      window.history.pushState(null, "", href);
    }
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="anchor-container">
      {items.map((item) => (
        <a
          key={item.key}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className="anchor-link"
        >
          {item.title}
        </a>
      ))}
    </div>
  );
};

export default Anchor;
