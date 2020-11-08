import React from 'react'
import styles from '../assets/scss/mailOutput.module.scss'
const MailOutput = (props) => {
    const { profile } = props;

    return <div className={styles.layout}>

        <div className={styles.menu}>
            <div className={styles.circle}>
                <img src="/nextmail/images/letter.svg" alt="letter" />
            </div>
            <div className={styles.circle}>
                <img src="/nextmail/images/back.svg" alt="back" />
            </div>
            <div className={styles.circle}>
                <img src="/nextmail/images/alarm.svg" alt="alarm" />
            </div>
            <div className={styles.circle}>
                <img src="/nextmail/images/burger.svg" alt="burger" />
            </div>
            <div className={styles.circle}>
                <img src="/nextmail/images/marker.svg" alt="marker" />
            </div>
            <div className={styles.circle}>
                <img src="/nextmail/images/trash.svg" alt="letter" />
            </div>
        </div>
        <div className={styles.messageHeader}>
            <div className={styles.messageTitle}>Nextmail New Look</div>
            <div className={styles.profile}>
                <img src="/nextmail/images/profile.svg" alt="profileImg" />
                <div className={styles.sender}>
                    <div className={styles.name}>{profile.name}</div>
                    <div className={styles.mail}>From:  {profile.mail}</div>
                </div>
                <div className={styles.time}>11: 00 AM, Today</div>
            </div>
        </div>
        <div className={styles.divider} />
        <section className={styles.textPosition}>
            <div className={styles.article}>
                <p>Hello Adithya,</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident. <br /></p>
                <p className={styles.signature}>Cheers <br /> DesignAvenger</p>

            </div>
            <div className={styles.attachment}>
                <div>
                    <img src="/nextmail/images/file.png" alt="file" />
                    <span>Sample.pdf</span>
                </div>
            </div>
            <div className={styles.btnGroup}>
                <button className={styles.reply}>
                    <span>
                        <img src="/nextmail/images/left.svg" alt="left" />
                    </span>
                        Reply
                </button>
                <button className={styles.forward}>
                    <span>
                        <img src="/nextmail/images/right.svg" alt="right" />
                    </span>
                        Forward
                </button>
            </div>
        </section>
    </div>
}

export default MailOutput;