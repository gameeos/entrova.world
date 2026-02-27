export interface FooterSectionItem {
  content: string;
  href: string;
}

export interface FooterSectionProps {
  title: string;
  items: FooterSectionItem[];
}

export default function FooterSection({ title, items }: FooterSectionProps) {
  return (
    <div>
      <h4 className="text-2xl text-base-100">{title}</h4>
      <ul>
        {items.map(({ content, href }) => (
          <li
            key={content}
            className="text-[#444444] hover:text-[#9588e8] my-2.5"
          >
            <a href={href}>{content}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
