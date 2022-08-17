import { useLocation, useNavigate } from 'react-router-dom';

const GoBackBtn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const onGoBack = () => {
    navigate(location?.state.pathname ?? '/', { replace: true });
  };
  return (
    <button type="button" onClick={onGoBack}>
      Go back
    </button>
  );
};

export default GoBackBtn;
