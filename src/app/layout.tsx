import "./globals.css";
import Sidebar from "../components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F8F4F0]">
        <div className="flex">
          <Sidebar />

          <main
            id="main-content"
            className="
    flex-1
    transition-all
    duration-500
    min-w-0
    pb-[90px]
    xl:pb-0
  "
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
