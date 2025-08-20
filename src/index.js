import { getUserByEmail } from './userService.js'

async function main() {
  try {
    // Example usage
    const user = await getUserByEmail('test@example.com')
    console.log('User found:', user)
  } catch (error) {
    console.error('Error:', error)
  }
}

main()
