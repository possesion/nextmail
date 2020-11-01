import React from 'react'
import styles from '../css/mailOutput.module.css'
const MailOutput = (props) => {
    const { profile, article } = props;
    console.log(profile.name)
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
        <div className={styles.content}>
            <div className={styles.messageTitle}>Nextmail New Look</div>
            <div className={styles.profile}>
                <img src="/nextmail/images/profile.svg" alt="profileImg" className={styles.profileImg} />
                <div style={{ marginLeft: '5px' }}>
                    <div className={styles.name}>{profile.name}</div>
                    <div className={styles.mail}>{profile.mail}</div>
                </div>
            </div>
            <div className={styles.article} style={{ width: '90%' }}>
                <p>Hello Adithya, <hr className="mt-2" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident. <br />
                    <p className={styles.signature}>Cheers <br /> DesignAvenger</p>
                </p>
            </div>
            <div className={styles.attachment}>
                <div className="p-1">
                    <img src="/nextmail/images/file.png" alt="file" />
                    <span>Sample.pdf</span>
                </div>
            </div>
            <div className={styles.btnGroup}>
                <button className={styles.reply}><span><img className="mr-1" src="/nextmail/images/left.svg" alt="left" /></span>Reply</button>
                <button className={styles.forward}><span><img className="mr-1" src="/nextmail/images/right.svg" alt="right" /></span>Forward</button>
            </div>
        </div>
    </div>
}

export default MailOutput;