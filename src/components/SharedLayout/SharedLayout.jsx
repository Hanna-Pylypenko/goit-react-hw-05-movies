import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import { AppBar } from 'components/AppBar/AppBar';
export const SharedLayout = () => {
  return (
    <Container>
      <AppBar />
      <Outlet />
    </Container>
  );
};
