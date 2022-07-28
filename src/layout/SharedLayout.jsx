import { Header } from 'components/Header/Header.styled';
import { Nav } from 'layout/common/Nav.styled';
import { NavItem } from 'layout/common/NavItem.styled';
import { Main } from './common/Main.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Nav>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/movies">Movies</NavItem>
        </Nav>
      </Header>
      <Main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default SharedLayout;
