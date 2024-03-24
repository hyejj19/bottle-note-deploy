import Navbar from './_components/navbar';
import Header from './_components/header';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="bg-white flex flex-col w-full mx-auto max-w-[400px] min-h-screen">
      <Header />
      <main className="flex-1 overflow-y-auto p-5">{children}</main>
      <div className="mt-auto">
        <Navbar />
      </div>
    </div>
  );
}
