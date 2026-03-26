/**
 * Скрипт импорта игр из games.js в PocketBase
 *
 * Использование:
 *   node scripts/import-games.js https://api.ezkere.ru admin@email.com пароль
 *
 * Или для локального PocketBase:
 *   node scripts/import-games.js http://127.0.0.1:8090 admin@email.com пароль
 */

import PocketBase from 'pocketbase'

// Импортируем данные игр
import { games, genres, platforms } from '../src/data/games.js'

const [,, pbUrl, email, password] = process.argv

if (!pbUrl || !email || !password) {
  console.error('Использование: node scripts/import-games.js <PB_URL> <ADMIN_EMAIL> <ADMIN_PASSWORD>')
  console.error('Пример: node scripts/import-games.js https://api.ezkere.ru admin@ezkere.ru MyPassword123')
  process.exit(1)
}

const pb = new PocketBase(pbUrl)

async function run() {
  // Авторизация как суперюзер
  console.log('Авторизация...')
  await pb.collection('_superusers').authWithPassword(email, password)
  console.log('Авторизация успешна!\n')

  // Проверяем, есть ли уже игры
  const existing = await pb.collection('games').getList(1, 1)
  if (existing.totalItems > 0) {
    console.log(`В базе уже ${existing.totalItems} игр. Удалить и импортировать заново? (Ctrl+C чтобы отменить)`)
    // Удаляем все существующие
    const allGames = await pb.collection('games').getFullList()
    for (const game of allGames) {
      await pb.collection('games').delete(game.id)
    }
    console.log('Старые записи удалены.\n')
  }

  // Импортируем игры
  console.log(`Импорт ${games.length} игр...`)
  let success = 0
  let failed = 0

  for (const game of games) {
    try {
      await pb.collection('games').create({
        slug: game.slug,
        title: game.title,
        titleRu: game.titleRu || '',
        description: game.description || '',
        shortDescription: game.shortDescription || '',
        developer: game.developer || '',
        publisher: game.publisher || '',
        releaseDate: game.releaseDate || '',
        price: game.price,
        discountPercent: game.discountPercent || 0,
        platforms: game.platforms || [],
        genres: game.genres || [],
        metacriticScore: game.metacriticScore || 0,
        coverImage: game.coverImage || '',
        screenshots: game.screenshots || [],
        storeLinks: game.storeLinks || {},
        systemRequirements: game.systemRequirements || {},
        isTrending: game.isTrending || false,
        isFeatured: game.isFeatured || false,
        tags: game.tags || []
      })
      success++
      process.stdout.write(`\r  ${success}/${games.length} — ${game.title}`)
    } catch (err) {
      failed++
      console.error(`\n  ОШИБКА: ${game.title} — ${err.message}`)
    }
  }

  console.log(`\n\nГотово! Импортировано: ${success}, ошибок: ${failed}`)
  console.log(`\nЖанры (${genres.length}): ${genres.join(', ')}`)
  console.log(`Платформы (${platforms.length}): ${platforms.map(p => p.name).join(', ')}`)
}

run().catch(err => {
  console.error('Ошибка:', err.message)
  process.exit(1)
})
