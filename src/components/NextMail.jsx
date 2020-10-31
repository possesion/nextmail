import { useState } from 'react'
import MailOutput from './MailOutput'
import Navigation from './Navigation'
import Inbox from './Inbox.jsx'
import styles from '../css/nextMail.module.css'



const NextMail = () => {
  const [mailBox, setMailbox] = useState([
    { label: 'Inbox', icon: '/images/inbox.svg', count: '(200)' },
    { label: 'Sent Mail', icon: '/images/sent.svg', count: '' },
    { label: 'Drafts', icon: '/images/draft.svg', count: '' },
    { label: 'Trash', icon: '/images/trash.svg', count: '(2)' },
    { label: 'Attachments', icon: '/images/attachments.svg', count: '' },
    { label: 'More...', icon: '/images/more.svg', count: '' }
  ]);
  const [listElements, setListElements] = useState(['LinkedIn']);
  const [labels, setLabels] = useState([
    { name: 'Personal', icon: '/images/personal.svg' },
    { name: 'Clients', icon: '/images/clients.svg' },
    { name: 'Work', icon: '/images/work.svg' },
    { name: 'Friends', icon: '/images/friends.svg' }
  ]);
  const [messages, setMessages] = useState([
    { title: 'Design Language', contact: 'Salman Shah', time: '8:00 PM' },
    { title: 'Nextmail New Look', contact: 'Salman Shah', time: '11:00 AM' },
    { title: 'Interview with Shopify ', contact: 'Aisha Dialo', time: '8:00 PM' },
    { title: 'Narcos Season 2', contact: 'Netflix', time: 'PM' },
    { title: 'Day', contact: 'TechCrunch', time: 'Yesterday' },
    { title: 'Kevin', contact: 'Goodreads', time: 'Yesterday' },
    { title: '2016', contact: 'randomGuy', time: '09 Oct, 16' },
    { title: 'Goldfinger', contact: 'Bond', time: 'Oct, 1964' }

  ]);
  const [profile, setProfile] = useState({ name: 'Salman Shah', img: 'profileImg', mail: 'shah.salman4@gmail.com' });
  return (
    <div className={styles.container}>
      <Navigation mailBox={mailBox} listElements={listElements} labels={labels} profile={profile} />
      <Inbox messageBox={messages} />
      <MailOutput profile={profile} />
    </div>
  )
}

export default NextMail;