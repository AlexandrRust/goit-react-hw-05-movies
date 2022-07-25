import { Header } from 'components/Header/Header.styled';
import { Nav } from 'components/Nav/Nav.styled';
import { NavItem } from 'components/Nav/NavItem.styled';
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
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
