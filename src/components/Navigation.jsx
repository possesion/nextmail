import React from 'react'
import styles from '../css/navigation.module.css'


const Navigation = (props) => {
  const { mailBox, listElements, labels, profile } = props;
  return (
    <div className={styles.layout}>
      <div className={styles.innerBox}>
        <button><span><img  className="mr-1" src="/nextmail/images/compose.svg" alt="compose" /></span>Compose</button>
        <h3>MAILBOX</h3>
        <ul>
          {mailBox.map(({ label, icon, count }) => (
            <li key={label} className={styles.mailbox}>
              <a href="#" className="d-flex">
                <div className={styles.icon}>
                  <img src={icon} alt="mailboxImg" />
                </div>
                <p>{label} {count}</p>
              </a>
            </li>

          ))}
        </ul>
        <hr />
        <h3>LISTS</h3>
        <ul>
          {listElements.map((element) => (
            <li key={element}>
              <a href="#" className="d-flex">
                <div className="icon"></div>
                <p>{element}</p>
              </a>
            </li>

          ))}
        </ul>
        <hr />
        <h3>LABELS</h3>
        <ul>
          {labels.map(({ name, icon }) => (
            <li key={name} className={styles.mailbox}>
              <a href="#" className="d-flex">
                <div className={styles.icon}>
                  <img src={icon} alt="labelIcon" />
                </div>
                <p>{name}</p>
              </a>
            </li>

          ))}
        </ul>
      </div>
      <div className={styles.profile}>
        <img src="/nextmail/images/profile.svg" alt="profileImg" className={styles.profileImg} />
        <div style={{ marginLeft: '5px' }}>
          <div className={styles.name}>{profile.name}</div>
          <div className={styles.mail}>{profile.mail}</div>
        </div>
      </div>
    </div>)
};

export default Navigation;