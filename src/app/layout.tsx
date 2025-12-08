import './globals.css'

export const metadata = {
  title: 'Trip Roadmap',
  description: 'Trip Roadmap UI',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <main className="w-full container-max px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
