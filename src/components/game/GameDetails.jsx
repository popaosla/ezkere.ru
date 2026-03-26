import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import { formatPrice, calcDiscount } from '../../utils/formatPrice'
import s from './GameDetails.module.css'

function getRatingClass(score) {
  if (score >= 75) return s.ratingGreen
  if (score >= 50) return s.ratingYellow
  return s.ratingRed
}

export default function GameDetails({ game }) {
  const { addToCart, isInCart } = useCart()
  const navigate = useNavigate()
  const inCart = isInCart(game.id)
  const finalPrice = calcDiscount(game.price, game.discountPercent)

  const req = game.systemRequirements
  const reqFields = [
    { key: 'os', label: 'ОС' },
    { key: 'processor', label: 'Процессор' },
    { key: 'memory', label: 'Память' },
    { key: 'graphics', label: 'Видеокарта' },
    { key: 'storage', label: 'Место на диске' },
  ]

  return (
    <div className={s.page}>
      <Link to="/catalog" className={s.back}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
        Назад в каталог
      </Link>

      <div className={s.top}>
        <div className={s.coverWrapper}>
          <img src={game.coverImage} alt={game.title} className={s.cover} />
        </div>

        <div className={s.info}>
          <h1 className={s.title}>{game.title}</h1>

          <div className={s.meta}>
            <span className={s.metaItem}>{game.developer}</span>
            <span className={s.metaSep}>/</span>
            <span className={s.metaItem}>{game.publisher}</span>
            <span className={s.metaSep}>/</span>
            <span className={s.metaItem}>{new Date(game.releaseDate).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            {game.metacriticScore > 0 && (
              <div className={s.ratingWrapper}>
                <span className={`${s.ratingBig} ${getRatingClass(game.metacriticScore)}`}>
                  {game.metacriticScore}
                </span>
                <span className={s.ratingTooltip}>Оценка Metacritic</span>
              </div>
            )}
          </div>

          <div className={s.platformTags}>
            {game.platforms.map(p => (
              <span key={p} className={s.platformTag}>{p}</span>
            ))}
          </div>

          <div className={s.tags}>
            {game.genres.map(g => <span key={g} className={s.tag}>{g}</span>)}
            {game.tags.map(t => <span key={t} className={s.tag}>{t}</span>)}
          </div>

          <div className={s.priceSection}>
            {game.discountPercent > 0 && (
              <span className={s.discountBadge}>-{game.discountPercent}%</span>
            )}
            {game.price === 0 ? (
              <span className={s.freeLabel}>Бесплатно</span>
            ) : (
              <>
                {game.discountPercent > 0 && (
                  <span className={s.oldPrice}>{formatPrice(game.price)}</span>
                )}
                <span className={s.priceBig}>{formatPrice(finalPrice)}</span>
              </>
            )}
          </div>

          <div className={s.actions}>
            {inCart ? (
              <button className={s.inCartBtn} onClick={() => navigate('/cart')}>
                В корзине — перейти
              </button>
            ) : (
              <button className={s.addBtn} onClick={() => addToCart(game.id)}>
                Добавить в корзину
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Store links */}
      {(game.storeLinks.steam || game.storeLinks.psStore || game.storeLinks.xboxStore) && (
        <div>
          <h2 className={s.sectionTitle}>Доступно в магазинах</h2>
          <div className={s.storeLinks}>
            {game.storeLinks.steam && (
              <a href={game.storeLinks.steam} target="_blank" rel="noopener noreferrer" className={`${s.storeLink} ${s.storeSteam}`}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 12-5.373 12-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/></svg>
                Steam
              </a>
            )}
            {game.storeLinks.psStore && (
              <a href={game.storeLinks.psStore} target="_blank" rel="noopener noreferrer" className={`${s.storeLink} ${s.storePS}`}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.985 2.596v17.548l3.915 1.261V6.688c0-.69.304-1.151.794-.991.636.181.76.814.76 1.505v5.876c2.441 1.193 4.362-.002 4.362-3.153 0-3.237-1.126-4.675-4.438-5.827-1.307-.448-3.728-1.186-5.393-1.502z"/><path d="M1.465 17.33l3.28-1.17v-1.453l-2.51.891c-.863.301-1.003-.128-1.003-.128-.127-.394.28-.611.28-.611l3.233-1.147v-1.56l-4.475 1.583S-.155 14.217.017 15.14c.17.923 1.448 2.19 1.448 2.19zm20.126-3.163c-1.615-.763-3.636-.683-5.044.147l-2.03.713v1.56l3.637-1.297c.863-.301 1.003.128 1.003.128.127.394-.28.611-.28.611l-4.36 1.548v1.56l5.669-2.022c.924-.327 1.643-.832 1.869-1.442.255-.685-.06-1.329-.464-1.506z"/></svg>
                PlayStation Store
              </a>
            )}
            {game.storeLinks.xboxStore && (
              <a href={game.storeLinks.xboxStore} target="_blank" rel="noopener noreferrer" className={`${s.storeLink} ${s.storeXbox}`}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.102 21.033A11.947 11.947 0 0 0 12 24a11.96 11.96 0 0 0 7.902-2.967c1.877-1.912-4.316-8.709-7.902-11.417-3.582 2.708-9.779 9.505-7.898 11.417zm17.47-4.213c.753-2.004.928-4.39.428-6.616-.524.263-3.081 1.726-5.49 4.622 2.96 3.234 4.578 2.556 5.062 1.994zM2.428 16.82c.483.563 2.1 1.24 5.062-1.994C5.08 11.732 2.523 10.27 2 10.004c-.5 2.225-.326 4.612.428 6.616zM12 3.79S9.546 0 6.448 0A3.215 3.215 0 0 0 4.94.46C7.028 1.403 9.157 3.46 12 6.794 14.843 3.46 16.972 1.4 19.06.46A3.215 3.215 0 0 0 17.552 0C14.454 0 12 3.79 12 3.79z"/></svg>
                Xbox Store
              </a>
            )}
          </div>
        </div>
      )}

      {/* Description */}
      <div className={s.description}>
        <h2 className={s.sectionTitle}>Описание</h2>
        <p className={s.descText}>{game.description}</p>
      </div>

      {/* System Requirements */}
      {req && req.minimum && (
        <div>
          <h2 className={s.sectionTitle}>Системные требования</h2>
          <div className={s.reqGrid}>
            <div className={s.reqColumn}>
              <h3 className={s.reqTitle}>Минимальные</h3>
              {reqFields.map(f => (
                <div key={f.key} className={s.reqRow}>
                  <span className={s.reqLabel}>{f.label}</span>
                  <span className={s.reqValue}>{req.minimum[f.key]}</span>
                </div>
              ))}
            </div>
            {req.recommended && (
              <div className={s.reqColumn}>
                <h3 className={s.reqTitle}>Рекомендуемые</h3>
                {reqFields.map(f => (
                  <div key={f.key} className={s.reqRow}>
                    <span className={s.reqLabel}>{f.label}</span>
                    <span className={s.reqValue}>{req.recommended[f.key]}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
