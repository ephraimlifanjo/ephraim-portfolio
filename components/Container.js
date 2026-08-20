export default function Container({ className = "", children, as: Tag = "div" }) {
  return <Tag className={`mx-auto w-full max-w-7xl px-5 sm:px-7 lg:px-10 ${className}`}>{children}</Tag>;
}
