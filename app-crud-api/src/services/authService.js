const USER_KEY = 'isAuthenticated'

export default {
  login(username, password) {
    if (username === 'admin' && password === '1234') {
      localStorage.setItem(USER_KEY, 'true')
      return true
    }

    return false
  },

  logout() {
    localStorage.removeItem(USER_KEY)
  },

  isAuthenticated() {
    return localStorage.getItem(USER_KEY) === 'true'
  }
}