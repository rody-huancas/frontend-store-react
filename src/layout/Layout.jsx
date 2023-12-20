import { Outlet } from "react-router-dom";
import { Header, Footer } from "components";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="w-full px-10 xl:px-0 xl:w-[1200px] mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
