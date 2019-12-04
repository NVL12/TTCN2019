import { sign } from '../../services/jwt'
import { success, error } from '../../services/response/'

export const login = ({ user, body: { role } }, res, next) => {
  if (user.role !== role) return res.status(401).json({ message: 'You\'re unauthorized!' });
  if (user.blocked === true) return res.status(401).json({ message: 'You\'re not allowed to login because you have been blocked your account!' });
  return sign(user.id)
    .then((token) => ({ token, user: user.view(true) }))
    .then(success(res, 201))
    .catch(error(res))
}
