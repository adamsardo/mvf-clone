import type { ImageAsset, InfoSection, NavItem, NewsPost, WinnerEntry, WinnerYear } from "@/types/mvf";

export const navItems: NavItem[] = [
  { label: "Apply", href: "/apply" },
  { label: "Grants", href: "/grants" },
  { label: "About", href: "/about" },
  { label: "Past Winners", href: "/past-winners" },
  { label: "Alumni", href: "/alumni" },
  { label: "FAQs", href: "/faqs" },
  { label: "Support Us", href: "/support-us" },
  { label: "Contact", href: "/contact" },
];

export const siteEmail = "info@mooneevalleyfoundation.org.au";

export const footerCopy =
  "MVF (‘the Foundation’) awards grants to young adults within Melbourne’s north-west, helping them achieve excellence in education, training, community or other personal endeavours that will ultimately benefit the broader community. We also provide encouragement awards to students at local high schools who have shown resilience when faced with tough situations in their final years.";

export const images = {
  hero: {
    src: "/images/mvf/005-9a9415e7-5d7f-4798-8069-dec43727cd39-jpeg.jpg",
    alt: "Moonee Valley Foundation award recipients smiling at awards night",
    width: 1440,
    height: 1200,
  },
  joinHands: {
    src: "/images/mvf/020-home.jpg",
    alt: "Hands stacked together in a circle",
    width: 865,
    height: 525,
  },
  contact: {
    src: "/images/mvf/028-2023-awards-2-edited-edited-jpg.jpg",
    alt: "Moonee Valley Foundation awards night attendees",
    width: 720,
    height: 826,
  },
  applyHero: {
    src: "/images/mvf/029-bard-sbp00757-jpg.jpg",
    alt: "Moonee Valley Foundation awards night group",
    width: 1440,
    height: 1200,
  },
  support: {
    src: "/images/mvf/042-6466b2ac-8e28-4869-9c68-8d866f4452fb-jpeg.jpg",
    alt: "Young people gathered in a circle with hands together",
    width: 1440,
    height: 540,
  },
  aboutAlumni: {
    src: "/images/mvf/040-alumni-13-jpg.jpg",
    alt: "Moonee Valley Foundation alumni and board members at a reunion",
    width: 720,
    height: 555,
  },
} satisfies Record<string, ImageAsset>;

export const awardNightImages: ImageAsset[] = [
  { src: "/images/mvf/006-home.jpg", alt: "Award ceremony moment", width: 284, height: 287 },
  { src: "/images/mvf/007-home.jpg", alt: "Award recipients group photo", width: 191, height: 151 },
  { src: "/images/mvf/008-home.jpg", alt: "Speaker at award ceremony", width: 191, height: 126 },
  { src: "/images/mvf/009-home.jpg", alt: "Award recipient speaking at lectern", width: 249, height: 357 },
  { src: "/images/mvf/010-home.jpg", alt: "Award night group", width: 226, height: 172 },
  { src: "/images/mvf/011-home.jpg", alt: "Award being presented", width: 226, height: 175 },
  { src: "/images/mvf/012-home.jpg", alt: "Awards audience", width: 177, height: 133 },
  { src: "/images/mvf/013-home.jpg", alt: "Awards night audience at tables", width: 298, height: 133 },
];

export const posts: NewsPost[] = [
  {
    slug: "pursuing-pleasure-with-piera",
    title: "Pursuing Pleasure with Piera",
    excerpt:
      "A little operatic teaser from MVF alumna Piera Dennestein's show presented as part of the Melbourne Fringe in 2025, performed at Chapel Off Chapel.",
    date: "Feb 11",
    readTime: "1 min read",
    author: "jcanaway8",
    image: {
      src: "/images/mvf/043-pursuing-pleasure-with-piera.jpg",
      alt: "Pursuing Pleasure with Piera",
      width: 740,
      height: 386,
    },
    body: [
      "A little operatic teaser from MVF alumna Piera Dennestein's show presented as part of the Melbourne Fringe in 2025, performed at Chapel Off Chapel.",
      "https://www.youtube.com/watch?v=CKCbn9kMVNg",
    ],
  },
  {
    slug: "congratulations-to-our-2022-awardees",
    title: "Congratulations to our past awardees",
    excerpt:
      "Charlotte Davitt, Kunal Mutreja, Alex Paporakis and Marissa Williamson show the breadth of excellence and community contribution supported by MVF.",
    date: "Nov 11, 2022",
    readTime: "2 min read",
    author: "Kunal Mutreja",
    image: {
      src: "/images/mvf/047-congratulations-to-our-2022-awardees.jpg",
      alt: "Congratulations to our past awardees",
      width: 405,
      height: 720,
    },
    body: [
      "Updated: Feb 12",
      "Charlotte Davitt works with young people as a football and cricket coach, as well as playing herself, and is studying psychology; her grant will fund a program educating young people on the importance of mental health and addressing bullying, plus raising awareness of Australia's Indigenous history.",
      "Kunal Mutrjea has a master's in Construction Management, and a double degree in Building Design and Civil Engineering, but in lockdown he discovered a passion for digital marketing and web design. He wants to build on his self-taught knowledge by studying Digital Marketing Strategy at RMIT, and MVF is very happy to support that goal.",
      "Alex Paporakis works as a medical scientist in the transplant unit of the Red Cross, and aspires to a career in genetic research, but his weekend passion is revegetating city spaces through the group he founded, Urban Bushland Initiative, and helping community feel connected to these wild spaces. His grant funding will help support the Urban Bushland group.",
      "Elite amateur boxer Marissa Williamson was unable to receive her award in person as she was busy training!",
      "Marissa started boxing at 16 to improve her fitness for AFLW, but an injury ended her footy dreams - and boxing opened another door. After 19 fights she won her first Victorian and National titles, in the same year - 2019. She was also named 2019 NAIDOC junior Sportsperson of the Year. In 2020 Marissa exited the foster care system at 18 just as COVID hit, making her homeless, but she stuck with her training and is working with a new coach to take her to the next level. Her grant will help support her ongoing training costs.",
      "MVF is pleased to support all these young Melburnians in their pursuit of excellence, and wishes them all well for the future.",
    ],
  },
  {
    slug: "congratulations-to-our-award-winners-for-2022",
    title: "Congratulations to our recent award winners",
    excerpt:
      "Congratulations to our award winners for 2022. Thanks to Moonee Valley City Council for hosting the night.",
    date: "Nov 11, 2022",
    readTime: "1 min read",
    author: "Kunal Mutreja",
    image: {
      src: "/images/mvf/051-congratulations-to-our-award-winners-for-2022.jpg",
      alt: "Congratulations to our recent award winners",
      width: 740,
      height: 1316,
    },
    body: [
      "Updated: Nov 29, 2023",
      "Congratulations to our award winners for 2022. Thanks to Moonee Valley City Council for hosting the night, and for mayor (and MVF alumna!) for speaking and presenting an award.",
      "Thanks also to Lucy Norvill, a 2021 recipient, for updating us on her fascinating work with the Caroline Chisholm Society and the report her grant helped to fund.",
      "Missing is recipient Marissa Williamson, 2019 Australian Boxing Champion and the First Aboriginal Cultural Heritage Office for Agriculture Victoria, who was busy at training!",
    ],
  },
  {
    slug: "this-musical-world-interview-with-erica-rasmussen",
    title: "THIS MUSICAL WORLD: Interview with Erica Rasmussen",
    excerpt:
      "Interview with Erica Rasmussen about Crashendo, student creativity, music education, and sustaining a philanthropic music program.",
    date: "Nov 11, 2022",
    readTime: "4 min read",
    author: "Kunal Mutreja",
    image: {
      src: "/images/mvf/027-this-musical-world-interview-with-erica-rasmussen.gif",
      alt: "THIS MUSICAL WORLD: Interview with Erica Rasmussen",
      width: 627,
      height: 627,
    },
    body: [
      "Interview with: Erica Rasmussen",
      "Interview by: Mandy Stefanakis",
      "It is extremely important to me to ensure we are empowering our students to understand themselves as music makers and creators as much as music presenters. They really are the composers of the future.’ – Erica Rasmussen",
      "Adaptations of independent music programs initially inspired by the El Sistema approach provide fascinating insights into the individual directions such programs take. Based at Laverton P – 12 in Melbourne, Crashendo is unique in this regard. I spoke with its Director, Erica Rasmussen, about the program.",
      "Crashendo is partially based on the El Sistema approach. However, you’ve adapted that approach in a range of ways. Can you talk about those adaptations and the reasoning behind them?",
      "Crashendo was originally inspired by El Sistema but, yes, we have made some adaptations over the ten years to suit our particular educational environment, the background of the students, and probably most significantly in a fairly organic way – the program reflects the various teaching methods and styles of the teaching artists (past and present). My approach is collaborative and I like to think that I have allowed for each teaching artist to bring their unique experiences to the program, and these have helped shape the direction of our program. I have worked in a variety of schools and have been lucky to have a number of mentors through my own teaching journey that have helped me shape my views on how to run Crashendo most effectively and sustainably, and how to provide a safe, engaging learning environment for our students. Although, I know I’m still learning!",
      "Ensuring that students are encouraged in their musical creativity is really important to you and seems a quite unique aspect of Crashendo. Can you talk about how this developed, why it is important to you, how the students respond to this aspect of the program, and what the challenges are in sustaining it.",
      "Yes, it is extremely important to me to ensure we are empowering our students to understand themselves as music makers and creators as much as music presenters. They really are the composers of the future, and we should be encouraging them to think of themselves as such!",
      "There is always so much positive feedback from the students when we do composition or improvisation projects. We have worked with sound artist/composer Nat Grant who wrote music together with our students and we were able to publish the music in full scores. There was so much pride amongst the students in regard to what they had achieved. The feedback included things such as ‘during my experience I felt more brave and amazing’, or ‘I loved learning new sounds’, or ‘trying to compose a song was fun and interesting’, and even ‘a dream come true!’.",
      "We have worked with Play on Philly, an El Sistema program in Philadelphia USA, to exchange student-written picture scores. We performed and recorded their picture compositions, and sent them over, then they returned the favour by performing and recording our picture scores. It was a fabulous musical exchange, all centred around student composition. In the feedback from the students, they enjoyed creating their own music, being creative with it in the visual sense, and then being able to use it as a way to connect with other students their age on the other side of the world.",
      "There are just so many benefits to including composition and improvisation into ensemble programs – creativity, team building, sense of ownership, individual and collective pride, independence, sense of identity, negotiation, collaboration, increased skills on the instrument, development of extended techniques, the list just goes on.",
      "There can be challenges in sustaining the inclusion of composition in our program. I do consult a lot with my team and some of the feedback they give me is – the levels between the students varies too much, it’s too hard to learn music in the ensemble setting without individual lessons as it is, their technique is not at the level it needs to be, it’s hard to manage the challenging behaviours of the students, not all the students can practice at home etc etc. I absolutely understand and agree that these are tough challenges that we deal with all the time with our program. But can we change the conversation around? Can we flip it? Instead of, ‘We don’t have the time to do composition because the students need to focus on their technique to be able to play the pieces,’ can we say, ‘Let’s get them to create their own music in order to learn about technique.’ Why can’t composition and improvisation be a catalyst for conversation about technique? For a discussion about keys? Why can’t they make up their own technical exercises? Maybe the negotiating required to write a group piece will help with behavioural issues? There are so many possibilities and I believe composition and improvisation sessions could only help with the challenges we face with student learning.",
      "Erica Rasmussen performs at an event in which audience members responded visually to the ensemble’s music.",
      "How have you adapted the program in regard to the restrictions of COVID?",
      "We took Crashendo online for two of the lockdowns. I was impressed with the participation rate, especially as our students faced many challenges in regard to technology, access to devices and home learning space. The parents were really grateful for the online lessons, as they acknowledged how important the music was for their child’s well-being and continued engagement with learning.",
      "I suppose the most disappointing thing has been no public concerts. But we are having our first one again on 8th September – this is really exciting! For the students and the teachers!",
      "What are your visions for the future of Crashendo?",
      "Definitely to have more composition and improvisation! I would like to see much more student-led initiatives and to have the opportunity to have guest artists come and work with the students. This not only invigorates the students, but gives new ideas to our teachers. I would also like to see more collaboration with music programs in other schools or settings. And for our students to get out in the community again. It would be great to access some regular professional development for the teaching team too. I think this would be a great asset to our program.",
      "It is also really important to keep Crashendo sustainable. We are fully reliant on philanthropic support and private donations. I want to keep this program going for as long as possible.",
    ],
  },
];

export const grantSections: InfoSection[] = [
  {
    title: "Award of Excellence",
    body: [
      "Applications open in March each year and close on May 31.",
      "Our grants recognise excellence in a chosen field of interest, whether this is academic, sporting, environmental, artistic, or vocational.",
      "We especially welcome initiatives that aim or have the potential to improve the lives and experiences of people within Melbourne’s north-west.",
      "Grants up to the total value of $10,000 are available each year.",
    ],
    bullets: [
      "Costs associated with education or training",
      "Travel to and attendance at a conference or event",
      "Tools and equipment",
      "The pursuit of academic projects",
      "Meet an identified local community need",
      "Promote community access, participation, and inclusion",
    ],
  },
  {
    title: "Eligibility",
    body: ["To be eligible for a Moonee Valley Foundation Grant, you must meet the following eligibility criteria:"],
    bullets: [
      "Be part of the north-west community: live, work, play, or sport in the region.",
      "Be between 17-32 years of age.",
      "Be able to use the funding within 2 years of receiving the grant.",
    ],
  },
  {
    title: "Selection Criteria",
    body: ["Written applications and personal interviews are assessed on the following basis:"],
    bullets: [
      "Community benefit of the activity.",
      "Demonstrated excellence in your field of endeavour.",
      "Importance of proposal to your chosen field of endeavour.",
      "Personal presentation skills and ability to advocate for the proposal.",
    ],
  },
  {
    title: "School Encouragement Grants",
    body: [
      "The Foundation also provides encouragement awards to students at local high schools who have shown resilience when faced with tough situations in their final years.",
      "These awards acknowledge effort, persistence, and community-minded achievement.",
    ],
  },
];

export const aboutSections: InfoSection[] = [
  {
    title: "About",
    body: [
      "The Moonee Valley Foundation awards grants to young adults within Melbourne’s north-west to achieve excellence in education, training, community or other personal endeavours that will ultimately benefit the broader community.",
      "We believe that supporting young people in their pursuit of excellence can not only improve their lives but lift up the whole community.",
    ],
  },
  {
    title: "Our Mission",
    body: [
      "MVF administers Awards and Grants to young adults within Melbourne’s north-west.",
      "The Foundation encourages young adults to achieve excellence in education, training, community or other personal endeavours, which ultimately benefits the broader community.",
    ],
  },
  {
    title: "Our History",
    body: [
      "The Foundation was formed as Essendon Anniversary Scholarship Trust Fund in 1986.",
      "Since then grants have been awarded to outstanding individuals passionate about making a difference in the municipality.",
      "Moonee Valley Foundation operates separately from council and is managed by a Board of Directors consisting of local business and professional people on a voluntary basis.",
    ],
  },
];

export const alumniSections: InfoSection[] = [
  {
    title: "Get involved",
    body: [
      "Stay in touch by liking our Facebook page and joining our LinkedIn group.",
      "We’d love to hear how the grant has helped you to succeed in your career or other personal endeavours and encourage you to contact us to share your stories at any time.",
      "From time to time, we also host reunions and other events and encourage past awardees to attend. You are also warmly welcome to attend future grant ceremonies to connect with new and past grant recipients.",
      "Finally, you can also support the Moonee Valley Foundation by promoting future grant rounds to your family and friends.",
    ],
  },
  {
    title: "Alumni news and events",
    body: [
      "On 5th May 2016, we held our first reunion, and welcomed about 20 past recipients, spanning several decades of awards, as well as councilors, supporters, and board members.",
      "Historian Anne Kershaw, who received a grant in 1988, spoke of the impact her scholarship had on her career, networking, understanding of her industry, and personal growth – a fascinating story.",
      "The group was also welcomed by community dignitaries, who noted the breadth of expertise and skill in the assembled alumni, and the value to the community of encouraging such talent.",
    ],
  },
  {
    title: "Keep in touch",
    body: [
      "Are you a previous Moonee Valley Foundation award winner?",
      `If we do not have your current details and you would like to receive information about alumni news and events, please contact us at ${siteEmail}.`,
    ],
  },
];

export const faqs = [
  {
    number: "01",
    question: "What happens if I am shortlisted as a finalist?",
    answer:
      "Once Award of Excellence Grant applications are reviewed, finalists will be contacted to arrange an interview. You will meet a panel of Moonee Valley Foundation board members who will review applications based on how well they meet the outlined criteria, the suitability of the budget, and presentation at the interview. If chosen for an award, recipients are required to lodge a written report to the Moonee Valley Foundation at the conclusion of their project. All applicants will be advised of the outcome of your application.",
  },
  {
    number: "02",
    question: "When do grant presentations take place, and do I have to attend?",
    answer:
      "The grant presentations take place in August of each year. Winners are required to attend the ceremony, however alternative arrangements can be made by exception, for example, if you are overseas at the time of the ceremony.",
  },
];

const rawPastWinners = `
2025
Alissa Rose Probyn
Promoting script for TV show
Anthony Probyn
Recording costs for a music EP
2024
Marissa Williams
Boxing costs for Paris Olympics
Neisha Scully
Law student attending UN in Geneva
Bronte Dowling
Internship at Disney World
Rebecca Mann
Compete at world kayak championships
Amelia Purtell
Study Masters of Architecture in USA
Adam Sardo - IT student*
Alissa Rose Probyn - film creator*
2023
Ella Nunan
London International Youth Science Forum
James Emerson
Master of Performance (Vocal) London
Amalie Allan*
Musician
2022
Charlotte Davitt
Junior Football coach
Kunal Mutreja
Website design
Alexander Paporakis
Urban Bushland
2021
Lucy Norville
Master of Public Policy
Adele Roeder
Community Garden
2020
No award made
2019
Abbey Slattery
Vocalist
Srikar Maddi
Startup mentor
2018
Elizabeth Howes
Teacher
Piera Dennerstein
Opera singer
Justin Nott
Artist
Connor Utri*
Artist
2017
Nancy Green
Athlete
Elise Foster
Ballet Dancer
2016
Emanuele ‘Manny’ Mamo
Songwriter and Music educator
Piera Dennerstein
Opera singer
Simon Baldwin
Trombonist
Mira Oosterweghel*
Artist
Cameron Searle*
Athlete
2015
Dr Cassie Atkinson-Quinton
Chiropractor
Ezel Doruk
Actor
Meghan Sinnott
Rhythmic gymnast
Trent O’Dea*
Volleyball player
2014
Jessica Yu
Creative writer
Louisa Trewartha
Musician
Patrick Francis
Mayoral Art Award
Daniel Hernandez*
Musician/artist
2013
Samantha Cole
Podiatrist
Dr Yi Yu (Avril) Lim
Veterinarian
Caterina Pizzati*
Flamenco dancer
2012
Anna van Veldhuisen
Musician/Teacher
Stephan Moravski
Architect
Chloe Nott*
Fashion student
2011
Stephan Moravski
Architect
Atreyi Bala*
Medical student
Daffyd Camp*
Musician
Josephine Di Giacomo*
Music teacher
Lachlan Diamond
Apprentice chef
2010
Rebecca Sanders
Teacher
Edward Cavanagh
Historian
Elena Tucker
Medical research
Georgina Humphries
Installation artist
Patrick Francis*
Artist
2009
Georgia Ioakimidis-MacDougall
Artist
Shouqie Goussous
Engineer
Erica Rasmussen
Musician
Erin Young*
Jennifer Bashford*
Steven Sutherland*
2008
Liam Castellas
Wicket keeping Cricket studies
Ryan Nolan
Studies regarding needs of retired swimmers
Jonathan Candy
Apprenticeship Grant for Hairdressing
Matthew Kneale*
2007
Cara Williams
Financial support for local community magazine produced and written by young people
Daniel Martin*
World Junior Athletics Championship in Europe
Sophie Dunn*
International Youth Science Forum in England
2006
Angela Tan
Medical Research in USA
Chris Erickson
Race Walking expenses
Timothy Cummins
Arabic language study in Tunisia
2005
Clare Bunworth
Australian Volunteer Internation Youth Program Papua New Guinea
Fiona Camp
Master of Education in Music
Liz Tripodi
Italian musical producer
Edward Musial
Gymnastics coach
Sean Stevens
Compile history of Keilor St Bernard’s Athletics Club
Amy Bourke
Primary School Teacher – Further Education
Dean Gourley*
Musical Composition
Jacqueline Micallef*
Music Studies
2004
Nathan Smith
Choreography & Production
Zan Rowe
Radio Music conference – Texas
2003
David Sullivan
Commercial/ Law studies
Sandra Porter*
Athletic Pursuits
2002
Rebecca Plueckhahn
Art/Music studies East Arnhem Land
Rachel Fantauzzo
Triathlete
2001
Evan Symons
Medical student, overseas practical work
Jade Leonard
Singer and composer – studying in USA
Kate Foenander*
National Youth Science Week – Sth Africa
Hanna Maxwell*
Youth Parliament
2000
Heather Cummins
Musician-Study in England
Pauline Truong
Lawyer-voluntary work in Vanuatu
1999
Adam Basil
Australian National Track & Field athletics
Sarah Kennedy*
National Student debating team
Daniel Creasey*
Participant in model U.N. (Holland)
Kebron Mano*
Athletics
1998
No award made
1997
Anna Condos
Cellist (Switzerland)
Gillian Schroeter
Performing Arts Student (Wales)
1996
Gabriel Liberatore
PhD-Student, Parkinson Disease Research (USA)
1995
Matthew Tighe
Oboist (Germany)
Leanne Yeung
Physiotherapist (London)
1994
Damian Becker
Leader of a chronic-illness peer support programme Canadian conference
1993
Julie Burn
Psychologist
Adam Basil*
Athletics
1992
Samantha Brown
Ballroom Dancer
Noraine Singletary
Race Relations Study (USA)
1991
Tim O’Leary
Psychiatric Worker (England USA)
Essendon Athletics Club
Disability Integration Program
1990
Alison O’Connor
Town Planner (Europe)
Brendon Edwards
Baseballer (USA)
1989
Russell Miller
Orthopaedic (Surgeon)
1988
Tracy Sjorgen
Physiotherapist (Europe)
Anne Kershaw
Historian (London)
1987
No awards made
1986
David McNicol
Pianist (London)
`;

function parsePastWinners(raw: string): WinnerYear[] {
  const lines = raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const groups: WinnerYear[] = [];
  let current: WinnerYear | undefined;
  let pending: string | undefined;

  for (const line of lines) {
    if (/^\d{4}$/.test(line)) {
      if (pending && current) current.entries.push({ name: pending });
      current = { year: line, entries: [] };
      groups.push(current);
      pending = undefined;
      continue;
    }

    if (!current) continue;
    if (line.toLowerCase().startsWith("no award")) {
      if (pending) current.entries.push({ name: pending });
      current.entries.push({ name: line });
      pending = undefined;
      continue;
    }

    if (!pending) {
      pending = line;
    } else {
      const entry: WinnerEntry = { name: pending, detail: line };
      current.entries.push(entry);
      pending = undefined;
    }
  }

  if (pending && current) current.entries.push({ name: pending });
  return groups;
}

export const pastWinners = parsePastWinners(rawPastWinners);

