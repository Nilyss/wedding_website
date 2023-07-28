import './footer.scss'

import brandingLogo from '../../../assets/logo.png'

export default function Footer() {
  return (
    <footer className={'footer'}>
      <figure className={'footer__logoWrapper'}>
        <img
          className={'footer__logoWrapper__img'}
          src={brandingLogo}
          alt="logo"
        />
      </figure>
      <a href={"https://ndecressac.fr"} className={'footer__copyright'}>© 2023 by Nicolas Decressac</a>
    </footer>
  )
}
