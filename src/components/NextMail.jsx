import { useState } from 'react'
import MailOutput from './MailOutput'
import Navigation from './Navigation'
import Inbox from './Inbox.jsx'
import styles from '../assets/scss/nextMail.module.scss'

const NextMail = () => {
  const mailBox = [
    { label: 'Inbox', icon: '/nextmail/images/inbox.svg', count: '(200)' },
    { label: 'Sent Mail', icon: '/nextmail/images/sent.svg', count: '' },
    { label: 'Drafts', icon: '/nextmail/images/draft.svg', count: '' },
    { label: 'Trash', icon: '/nextmail/images/trash.svg', count: '(2)' },
    { label: 'Attachments', icon: '/nextmail/images/attachments.svg', count: '' },
    { label: 'More...', icon: '/nextmail/images/more.svg', count: '' }
  ];
  const listElements = ['LinkedIn'];
  const labels = [
    { name: 'Personal', icon: '/nextmail/images/personal.svg', count: '(2)' },
    { name: 'Clients', icon: '/nextmail/images/clients.svg', count: '' },
    { name: 'Work', icon: '/nextmail/images/work.svg', count: '(2)' },
    { name: 'Friends', icon: '/nextmail/images/friends.svg', count: '' }
  ];
  const messages = [
    { id: 1, title: 'Design Language', contact: 'Salman Shah', time: '8:00 PM', attachment: '' },
    { id: 2, title: 'Nextmail New Look', contact: 'Salman Shah', time: '11:00 AM', attachment: '/nextmail/images/pin.svg' },
    { id: 3, title: 'Interview with Shopify ', contact: 'Aisha Dialo', time: '8:00 PM', attachment: '' },
    { id: 4, title: 'Narcos Season 2', contact: 'Netflix', time: 'PM', attachment: '' },
    { id: 5, title: 'Top Stories of the Day', contact: 'TechCrunch', time: 'Yesterday', attachment: '' },
    { id: 6, title: 'Upadates from Kevin', contact: 'Goodreads', time: 'Yesterday', attachment: '' },
    { id: 7, title: '2016', contact: 'randomGuy', time: '09 Oct, 16', attachment: '' },
    { id: 8, title: 'Goldfinger', contact: 'Bond', time: 'Oct, 1964', attachment: '' }

  ];
  const profile = { name: 'Salman  Shah', img: 'profileImg', mail: 'shah.salman4@gmail.com' };
  return (
    <div className={styles.container}>
      <Navigation mailBox={mailBox} listElements={listElements} labels={labels} profile={profile} />
      <Inbox messageBox={messages} />
      <MailOutput profile={profile} />
    </div>
  )
}

export default NextMail;