export const metadata = {
  title: 'GitHub Badge Counter',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
