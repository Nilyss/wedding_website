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
      <p className={'footer__copyright'}>© DECRESSAC Nicolas 2023</p>
    </footer>
  )
}
