import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const MainLayout = styled.main`
    padding-left: 10vw;
    padding-right: 10vw;
  `;

  return (
    <>
      <MainLayout>{children}</MainLayout>
    </>
  );
};

export default Layout;
