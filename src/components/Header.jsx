import Logo from '/images/pizza-logo.svg'
import { CartButton } from './CartButton'

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img width={38} src={Logo} alt="Pizza logo" />
          <div>
            <h1>Luno Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <nav className="header__cart" aria-label="Корзина">
          <CartButton children="520 ₽" outline />
        </nav>
      </div>
    </header>
  )
}
