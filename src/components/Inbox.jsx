import { useState } from 'react'
import styles from '../css/inbox.module.css'
const Inbox = ({ messageBox }) => {
    // const [active, setActive] = useState(false);

    return <section className={styles.layout}>

        <nav className="navbar navbar-light bg-light w-100 m-auto mt-4">
            <form className="form mx-4 w-100">
                <input
                    className="form-control mr-sm-2 rounded-pill"
                    type="search"
                    placeholder=" Search"
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
        {/* <div class="col-12"> */}
        <ul className={styles.wrapper + " list-group overflow-auto"} id="list-tab" role="tablist" style={{ height: '606px' }}>
            {messageBox.map(({ title, contact, time }) => {
                return <li className={styles.list}>
                    <a class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">
                        <div className="pl-2">
                            <div className={styles.title}>{title}<span className={styles.span}>{time}</span></div>
                            <div className={styles.text}>{contact}</div>
                        </div>
                    </a>
                </li>

            })}

        </ul>
        {/* </div> */}
    </section>
}

export default Inbox;