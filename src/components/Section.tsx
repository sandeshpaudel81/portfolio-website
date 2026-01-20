export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      {children}
    </section>
  );
}
