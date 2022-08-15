import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';
const SharedLayout = () => {
  return (
    <Container>
      <AppBar />
      <Outlet />
    </Container>
  );
};
export default SharedLayout;
