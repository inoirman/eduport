import { CreateUser, IUserRepository } from '../CreateUser'
import { User } from '../../../entities'

// Мок репозитория
class UserRepositoryMock implements IUserRepository {
  users = new Map()

  async save(user: User): Promise<void> {
    this.users.set(user.email, user)
  }

  async existsByEmail(email: string): Promise<boolean> {
    return this.users.has(email)
  }
}

describe('CreateUser', () => {
  it('should create a new user with a unique email', async () => {
    const userRepository = new UserRepositoryMock()
    const createUser = new CreateUser(userRepository)

    const email = 'test@example.com'
    await createUser.execute('Test User', email, 'password123', [])

    expect(userRepository.users.has(email)).toBeTruthy()
  })

  // Тут можно добавить больше тестов, например, проверка на дублирование email
})
