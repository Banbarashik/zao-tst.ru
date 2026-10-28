export default function CatalogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //! used to be gap-6, not space-y-6. check here if there's a problem with spacings
    <article className="@container flex w-full flex-col space-y-6 lg:overflow-x-auto">
      {children}
    </article>
  );
}
