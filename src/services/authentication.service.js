export class AuthenticationService {
  #authenticatedUser
  #localStorageIdentifier

  constructor() {
    this.#authenticatedUser = {
      username: 'Daenerys Targaryen',
      nickname: 'mhysa',
      password: 'dracarys'
    }
    this.#localStorageIdentifier = '@dragon-ui:authenticated-user'
  }

  login(payload) {
    const { nickname, password, persistSession } = payload

    if (
      nickname === this.#authenticatedUser.nickname &&
      password === this.#authenticatedUser.password
    ) {
      persistSession &&
        localStorage.setItem(
          this.#localStorageIdentifier,
          JSON.stringify(this.#authenticatedUser)
        )

      return this.#authenticatedUser
    } else {
      throw Error({ message: 'Credenciais Inválidas' })
    }
  }

  logout() {
    localStorage.removeItem(this.#localStorageIdentifier)
  }

  getAuthenticatedUser() {
    return JSON.parse(localStorage.getItem(this.#localStorageIdentifier))
  }
}
