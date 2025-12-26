import './globals.css';

export const metadata = {
  title: 'Personal Portfolio',
  description: 'A premium personal profile.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
