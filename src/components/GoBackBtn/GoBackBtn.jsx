import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const GoBackBtn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  console.log(searchParams);
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
