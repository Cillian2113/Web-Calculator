import useAnalyticsEventTracker from './AnalyticsEventTracker';

const github = () => {
	const gaEventTracker = useAnalyticsEventTracker('github');
	return(
		<a href="https://github.com/Cillian2113" onClick={()=>gaEventTracker('github')}><img src={require('./github-logo.png')} /></a>
	)};
