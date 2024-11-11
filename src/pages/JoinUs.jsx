// Components
import SuccessAnalysis from '../components/SuccessAnalysis'
import LoadingAnalysis from '../components/LoadingAnalysis'
import RejectedAnalysis from '../components/RejectedAnalysis'
import ProfileAnalysis from '../components/ProfileAnalysis'

// Redux
import { useSelector } from 'react-redux'

const JoinUs = () => {
  const profile = useSelector((state) => state.ProfileReducer);
  const { item, isError, isLoading } = profile;

  if (isLoading) return <LoadingAnalysis />;
  if (isError) return <RejectedAnalysis />;
  if (!item?.id) return <ProfileAnalysis />;
  
  return <SuccessAnalysis />
}

export default JoinUs;
