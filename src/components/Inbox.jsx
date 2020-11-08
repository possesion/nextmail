import { useState } from 'react'
import styles from '../assets/scss/inbox.module.scss'

const Inbox = ({ messageBox }) => {
    const [activeMessage, setActiveMessage] = useState(1);
    const handleClick = (id) => (e) => {
        e.preventDefault();
        setActiveMessage(id);
    }
    return <section className={styles.layout}>

        <nav className={styles.navBar}>
            <form className={styles.form}>
                <input
                    className={styles.searchBar}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <img className={styles.searchImg} src="/nextmail/images/search.svg" alt="search" />
            </form>
        </nav>
        <div className={styles.header}>
            <h2>Inbox</h2>
            <div>
                <span className={styles.span}>Sort by  </span>
                <select className={styles.selectOptions}>
                    <option value="unread">unread</option>
                    <option value="sent">sent</option>
                    <option value="featured">featured</option>
                    <option value="drafts">drafts</option>
                </select>
            </div>
        </div>
        <ul className={styles.wrapper} id="list-tab" role="tablist" style={{ height: '580px' }}>
            {messageBox.map(({ id, title, contact, time, attachment }) => {
                return <li key={id} className={activeMessage === id ? styles.active : ''}>
                    <div>
                        <a href="/" onClick={handleClick(id)}>
                            <div className={styles.message}>
                                <div className={styles.title}>
                                    <div>
                                        <span className={styles.dot}>
                                            <img src="/nextmail/images/dot.svg" alt="dot" />
                                        </span>
                                        {title}
                                    </div>
                                    <span className={styles.span}>{time}</span>
                                </div>
                                <div className={styles.text}>{contact} {attachment !== '' ? <img style={{ marginLeft: '190px' }} src={attachment} alt="pin" /> : null}</div>
                            </div>
                        </a>
                    </div>
                </li>
            })}
        </ul>
    </section>
}

export default Inbox;