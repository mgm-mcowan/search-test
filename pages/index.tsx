import React from 'react';
import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {

  const handleNavigation = (url: string) => {
    window.location.assign(url);
  }

  const simulateAnalytics = (url: string) => {
    console.log(url);
  }

  React.useEffect(() => {
    const handleUnloadEvent = (event: any) => {
      event.preventDefault();
      console.log("unload event was called")
      event.returnValue = '';
    }

    window.addEventListener('unload', handleUnloadEvent);

    return () => {
      window.removeEventListener('unload', handleUnloadEvent);
    }
  }, [])

  return (
    <>
      <Head>
        <title>MGMResorts - Search DEBUG</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
        </div>
        <div className={styles.grid}>
          {searchResults.map((result) => (
            <div
              key={result.title}
              className={styles.card}
            >
              <h2 className={inter.className}>
                {result.title}
              </h2>
              <p className={inter.className}>
                {result.propertyName} - {result.contentType}
              </p>
              <button style={{ marginTop: 8 }} onClick={() => handleNavigation(result.bookingUrl)}>Navigate</button>
              <a style={{ marginTop: 8, marginLeft: 16 }} href={result.bookingUrl} onClick={() => simulateAnalytics(result.bookingUrl)}>Navigate</a>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

const searchResults = [
  {
    "url": "https://mgmresorts.com/en/entertainment/mgm-grand-las-vegas/ka-cirque-du-soleil-show.html",
    "image": "//static.mgmresorts.com/content/dam/MGM/mgm-grand/entertainment/shows/ka-by-cirque-du-soleil/campaign/mgm-grand-entertainment-shows-ka-branding-logo.jpg",
    "title": "KÀ by Cirque du Soleil",
    "propertyId": "66964e2b-2550-4476-84c3-1a4c0c5c067f",
    "propertyName": "MGM Grand Las Vegas",
    "description": "A masterpiece in storytelling, this ultra lavish production uses mind-bending acrobatics, fierce martial arts, blazing pyrotechnics and jaw-dropping aerial adventures.",
    "bookingUrl": "https://mgmresorts.com/jump/show/#/show-listing&showFilter=ka-by-cirque-du-soleil",
    "contentType": "ENTERTAINMENT",
    "cuisine": "",
    "price": "$$",
    "availability": "",
    "__typename": "ContentSearchResult"
  },
  {
    "url": "https://mgmresorts.com/en/entertainment/luxor/blue-man-group.html",
    "image": "//static.mgmresorts.com/content/dam/MGM/luxor/entertainment/shows/blue-man-group/luxor-entertainment-blue-main-group-updated-logo-2022.jpg",
    "title": "Blue Man Group",
    "propertyId": "607c07e7-3e31-4e4c-a4e1-f55dca66fea2",
    "propertyName": "",
    "description": "Leave your expectations at the door and let three bald and blue men take you on a spectacular journey filled with music, laughter and surprises.",
    "bookingUrl": "https://mgmresorts.com/jump/show/#/show-listing&showFilter=blue-man-group",
    "contentType": "ENTERTAINMENT",
    "cuisine": "",
    "price": "Starting from $49",
    "availability": "",
    "__typename": "ContentSearchResult"
  },
  {
    "url": "https://mgmresorts.com/en/entertainment/excalibur/tournament-of-kings.html",
    "image": "//static.mgmresorts.com/content/dam/MGM/excalibur/entertainment/shows/tournament-of-kings/excalibur-entertainment-tok-blue-knight-tile.tif",
    "title": "Tournament of Kings",
    "propertyId": "f8d6a944-7816-412f-a39a-9a63aad26833",
    "propertyName": "",
    "description": "Tournament of Kings is Las Vegas’ ultimate dinner and a show experience.",
    "bookingUrl": "https://mgmresorts.com/jump/show/#/show-listing&showFilter=tournament-of-kings",
    "contentType": "ENTERTAINMENT",
    "cuisine": "",
    "price": "$$",
    "availability": "",
    "__typename": "ContentSearchResult"
  },
  {
    "url": "https://luxor.mgmresorts.com/en/entertainment/the-terry-bradshaw-show.html",
    "image": "//static.mgmresorts.com/content/dam/MGM/luxor/entertainment/shows/terry-bradshaw/luxor-entertainment-terry-bradshaw-show-2020-season.jpg",
    "title": "The Terry Bradshaw Show",
    "propertyId": "607c07e7-3e31-4e4c-a4e1-f55dca66fea2",
    "propertyName": "Luxor Hotel & Casino",
    "description": "Terry Bradshaw performances through the end of 2021 have been cancelled. Legendary professional football player and iconic entertainer Terry Bradshaw returns to the Las Vegas Strip with his musical, comedy and storytelling production, “The Terry Bradshaw Show,” a limited engagement at Luxor Hotel and Casino.",
    "bookingUrl": "",
    "contentType": "ENTERTAINMENT",
    "cuisine": "",
    "price": "",
    "availability": "",
    "__typename": "ContentSearchResult"
  },
  {
    "url": "https://mgmresorts.com/en/entertainment/excalibur/the-australian-bee-gees.html",
    "image": "//static.mgmresorts.com/content/dam/MGM/excalibur/entertainment/shows/the-australian-bee-gees/excalibur-entertainment-bee-gees-main-silhouette.tif",
    "title": "The Australian Bee Gees Show",
    "propertyId": "f8d6a944-7816-412f-a39a-9a63aad26833",
    "propertyName": "Excalibur Hotel & Casino",
    "description": "It's Saturday Night Fever every night with The Australian Bee Gees Show – A Tribute to the Bee Gees. One of the most successful and adored acts in musical history is recreated on the Las Vegas stage in a multi-media concert event. With over 22 years of experience \"Jive Talkin'\" you will be danced, sang and swept away with hits like, \"Staying Alive,\" \"You Should Be Dancing,\" and \"How Deep Is Your Love.\"",
    "bookingUrl": "https://mgmresorts.com/jump/show/#/show-listing&showFilter=the-australian-bee-gees",
    "contentType": "ENTERTAINMENT",
    "cuisine": "",
    "price": "Starting from $39.95",
    "availability": "",
    "__typename": "ContentSearchResult"
  },
  {
    "url": "https://mgmresorts.com/en/entertainment/excalibur/mackingcomedymagic.html",
    "image": "//static.mgmresorts.com/content/dam/MGM/excalibur/entertainment/shows/mac-king/excalibur-entertainment-mac-king.jpg",
    "title": "The Mac King Comedy Magic Show",
    "propertyId": "f8d6a944-7816-412f-a39a-9a63aad26833",
    "propertyName": "Excalibur Hotel & Casino",
    "description": "Mac King is widely regarded as the #1 comedy magician working in the world today. In his 70-minute show, Mac captivates audiences as he casts out a fishing line over their heads and catches live goldfish out of mid-air, does amazing stunts with a grizzly bear and his pet guinea pig “Colonel Sanders,” performs amazing sleight-of-hand, makes his head completely disappear in a paper bag, and renders himself invisible, all while remaining unbelievably funny. Because of his quick wit and extensive...",
    "bookingUrl": "https://mgmresorts.com/jump/show/#/show-listing&showFilter=the-mac-king-comedy-magic-show",
    "contentType": "ENTERTAINMENT",
    "cuisine": "",
    "price": "Starting from $44.95",
    "availability": "",
    "__typename": "ContentSearchResult"
  },
  {
    "url": "https://mgmresorts.com/en/entertainment/mgm-grand-las-vegas/eagles.html",
    "image": "//static.mgmresorts.com/content/dam/MGM/shared/mgm-grand/grand-garden-arena/2022/mgm-grand-entertainment-grand-garden-arena-eagles.jpg",
    "title": "Eagles: The Final Hotel California Show of 2022",
    "propertyId": "66964e2b-2550-4476-84c3-1a4c0c5c067f",
    "propertyName": "MGM Grand Las Vegas",
    "description": "Don't Miss the Eagles at MGM Grand Garden Arena Saturday May 28, 2022!",
    "bookingUrl": "https://www.axs.com/events/428947/eagles-tickets?skin=grandgarden",
    "contentType": "ENTERTAINMENT",
    "cuisine": "",
    "price": "",
    "availability": "",
    "__typename": "ContentSearchResult"
  },
  {
    "url": "https://mgmresorts.com/en/things-to-do/bellagio/fountains-of-bellagio.html",
    "image": "//static.mgmresorts.com/content/dam/MGM/bellagio/hotel/exterior/bellagio-hotel-exterior-aerial-fountains-with-paris.tif",
    "title": "Fountains of Bellagio",
    "propertyId": "44e610ab-c209-4232-8bb4-51f7b9b13a75",
    "propertyName": "Bellagio Hotel & Casino",
    "description": "The most famous performer in Las Vegas, tirelessly thrilling crowds with show after show, each one as magical as the last.",
    "bookingUrl": "",
    "contentType": "ENTERTAINMENT",
    "cuisine": "",
    "price": "Free",
    "availability": "",
    "__typename": "ContentSearchResult"
  },
  {
    "url": "https://luxor.mgmresorts.com/en/entertainment/blue-man-group-sensory-friendly-show.html",
    "image": "//static.mgmresorts.com/content/dam/MGM/luxor/entertainment/shows/blue-man-group/luxor-entertainment-shows-blue-man-group-paint-splatter-drums-side-view.tif",
    "title": "Blue Man Group Sensory-Friendly Show",
    "propertyId": "607c07e7-3e31-4e4c-a4e1-f55dca66fea2",
    "propertyName": "Luxor Hotel & Casino",
    "description": "This event has been cancelled.",
    "bookingUrl": "",
    "contentType": "ENTERTAINMENT",
    "cuisine": "",
    "price": "$$",
    "availability": "",
    "__typename": "ContentSearchResult"
  },
  {
    "url": "https://mgmresorts.com/en/entertainment/mgm-grand-las-vegas/david-copperfield.html",
    "image": "//static.mgmresorts.com/content/dam/MGM/mgm-grand/entertainment/shows/david-copperfield/lifestyle/mgm-grand-entertainment-david-copperfield-head-shot-v4.jpg",
    "title": "David Copperfield",
    "propertyId": "66964e2b-2550-4476-84c3-1a4c0c5c067f",
    "propertyName": "MGM Grand Las Vegas",
    "description": "David Copperfield is a legendary showman known as the \"greatest illusionist of our time.\" Experiencing his show is proof that \"magic is as vast as the imagination.\"",
    "bookingUrl": "https://mgmresorts.com/jump/show/#/show-listing&showFilter=david-copperfield",
    "contentType": "ENTERTAINMENT",
    "cuisine": "",
    "price": "$$",
    "availability": "",
    "__typename": "ContentSearchResult"
  }
]