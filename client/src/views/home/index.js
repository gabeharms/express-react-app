import { withRouter } from 'react-router-dom'
import requireAuth from '../../decorators/requireAuth'
import Home from './Home'

export default withRouter(requireAuth(Home));
