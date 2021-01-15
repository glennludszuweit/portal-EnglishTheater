# Model

## Company
  aboutUs: String,
  owners: [
    {
      position: String,
      bio: String
      email: String
    }
  ],
  casts: [
    {
      image: String,
      name: String,
      bio: String,
      email: String
    }
  ],
  mission: String,
  supportUs: {
    message: String,
    bankName: String,
    accountHolder: String,
    iban: String,
    bic: String,
  },
  partners: [
    {
      image: String,
      url: String
    }
  ],

## User 
  name: String,
  image: String,
  email: String,
  address: String,
  bio: String,
  role: {
    type: String,
    enum: [
      'admin',
      'author',
      'regular'
    ]
  }

## Courses
  category: {
    type: String,
    enum: [
      'weekly courses', 
      'online workshops', 
      'holiday workshops', 
      'school workshops'
    ]
  },
  courses: [
      {
        announcement: String,
        media: String,
        ageGroup: String,
        description: String,
        location: String,
        dateTime: String,
        price: String,
        moreInfo: String
      }
    ],
  media: String,
  ageGroup: String,
  description: String,
  location: String,
  dateTime: String,
  price: String,
  moreInfo: String
  termsAndConditions: String

## Shows
  title: String,
  image: String,
  description: String,
  casts: [
    {
      name: String,
      role: String
    }
  ],
  dateTime: String,
  location: String

## Blog
  title: String,
  author: String,
  image: String,
  content: String

## Articles
  title: String,
  author: String,
  image: String,
  content: String,
  url: String

## Announcements
  message: String,
  url: String,
  category: {
    type: String,
    enum: [
      'general',
      'courses',
      'shows',
      'blog',
      'articles
    ]
  }

