import Layout from "@/layouts/Layout";

export default function WrappLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      {children}
    </Layout>
    
  );
}
