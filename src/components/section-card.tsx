export default function SectionCard({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section className="py-8 px-4 sm:py-12 sm:px-8 lg:py-16 lg:px-12 z-0 relative bg-white sm:rounded-[20px] rounded-[10px]  lg:rounded-[40px] my-[-10px]  sm:my-[-20px] lg:my-[-40px]">
      {children}
    </section>
  );
}
