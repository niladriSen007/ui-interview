const awards = [
  {
    name: "James Peebles",
    category: "Physics",
    research: "Theoretical discoveries in physical cosmology",
    year: 2019,
  },
  {
    name: "Michel Mayor",
    category: "Physics",
    research: "Discovery of an exoplanet orbiting a solar-type star",
    year: 2019,
  },
  {
    name: "Didier Queloz",
    category: "Physics",
    research: "Discovery of an exoplanet orbiting a solar-type star",
    year: 2019,
  },
  {
    name: "John B. Goodenough",
    category: "Chemistry",
    research: "Development of lithium-ion batteries",
    year: 2019,
  },
  {
    name: "M. Stanley Whittingham",
    category: "Chemistry",
    research: "Development of lithium-ion batteries",
    year: 2019,
  },
  {
    name: "Akira Yoshino",
    category: "Chemistry",
    research: "Development of lithium-ion batteries",
    year: 2019,
  },
  {
    name: "Arthur Ashkin",
    category: "Physics",
    research: "Optical tweezers and their application to biological systems",
    year: 2018,
  },
  {
    name: "Gerard Mourou",
    category: "Physics",
    research: "Method of generating high-intensity, ultra-short optical pulses",
    year: 2018,
  },
  {
    name: "Donna Strickland",
    category: "Physics",
    research: "Method of generating high-intensity, ultra-short optical pulses",
    year: 2018,
  },
  {
    name: "Frances H. Arnold",
    category: "Chemistry",
    research: "Directed evolution of enzymes",
    year: 2018,
  },
  {
    name: "George P. Smith",
    category: "Chemistry",
    research: "Phage display of peptides and antibodies.",
    year: 2018,
  },
  {
    name: "Sir Gregory P. Winter",
    category: "Chemistry",
    research: "Phage display of peptides and antibodies.",
    year: 2018,
  },
]

const res = Object.groupBy(
  awards,
  ({ category, year }) => `${category}-${year}`
)

/* console.log(res) */
/* {
  'Physics-2019': [
    {
      name: 'James Peebles',
      category: 'Physics',
      research: 'Theoretical discoveries in physical cosmology',
      year: 2019
    },
    {
      name: 'Michel Mayor',
      category: 'Physics',
      research: 'Discovery of an exoplanet orbiting a solar-type star',
      year: 2019
    },
    {
      name: 'Didier Queloz',
      category: 'Physics',
      research: 'Discovery of an exoplanet orbiting a solar-type star',
      year: 2019
    }
  ],
  'Chemistry-2019': [
    {
      name: 'John B. Goodenough',
      category: 'Chemistry',
      research: 'Development of lithium-ion batteries',
      year: 2019
    },
    {
      name: 'M. Stanley Whittingham',
      category: 'Chemistry',
      research: 'Development of lithium-ion batteries',
      year: 2019
    },
    {
      name: 'Akira Yoshino',
      category: 'Chemistry',
      research: 'Development of lithium-ion batteries',
      year: 2019
    }
  ],
  'Physics-2018': [
    {
      name: 'Arthur Ashkin',
      category: 'Physics',
      research: 'Optical tweezers and their application to biological systems',
      year: 2018
    },
    {
      name: 'Gerard Mourou',
      category: 'Physics',
      research: 'Method of generating high-intensity, ultra-short optical pulses',
      year: 2018
    },
    {
      name: 'Donna Strickland',
      category: 'Physics',
      research: 'Method of generating high-intensity, ultra-short optical pulses',
      year: 2018
    }
  ],
  'Chemistry-2018': [
    {
      name: 'Frances H. Arnold',
      category: 'Chemistry',
      research: 'Directed evolution of enzymes',
      year: 2018
    },
    {
      name: 'George P. Smith',
      category: 'Chemistry',
      research: 'Phage display of peptides and antibodies.',
      year: 2018
    },
    {
      name: 'Sir Gregory P. Winter',
      category: 'Chemistry',
      research: 'Phage display of peptides and antibodies.',
      year: 2018
    }
  ]
} */

const prizes = Object.values(res)?.map((prizeGroup) => {
  // PrizeGroup is an array of winners with same category-year
  // example -
  // [
  /*   {
      name: 'Frances H. Arnold',
      category: 'Chemistry',
      research: 'Directed evolution of enzymes',
      year: 2018
    },
    {
      name: 'George P. Smith',
      category: 'Chemistry',
      research: 'Phage display of peptides and antibodies.',
      year: 2018
    },
    {
      name: 'Sir Gregory P. Winter',
      category: 'Chemistry',
      research: 'Phage display of peptides and antibodies.',
      year: 2018
    }  */
  const groupByResearch = Object.groupBy(prizeGroup, ({ research }) => research)
  /*  console.log(groupByResearch) */
  /*  {
  'Directed evolution of enzymes': [
    {
      name: 'Frances H. Arnold',
      category: 'Chemistry',
      research: 'Directed evolution of enzymes',
      year: 2018
    }
  ],
  'Phage display of peptides and antibodies.': [
    {
      name: 'George P. Smith',
      category: 'Chemistry',
      research: 'Phage display of peptides and antibodies.',
      year: 2018
    },
    {
      name: 'Sir Gregory P. Winter',
      category: 'Chemistry',
      research: 'Phage display of peptides and antibodies.',
      year: 2018
    }
  ]
} */
  const noOfTopics = Object.keys(groupByResearch).length // depends on the number of research
  const winnersWithShare = prizeGroup?.map((winner) => {
    const noOfCoWinners = groupByResearch[winner.research]?.length
    const share = (1 / noOfTopics / noOfCoWinners)?.toFixed(2)
    return {
      name: winner.name,
      share,
    }
  })

  return {
    category: prizeGroup[0]?.category,
    year: prizeGroup[0]?.year,
    winners: winnersWithShare,
  }
})

console.log(JSON.stringify(prizes, null, 2))


// Steps -
// Firstly need to groupBy the object category-year  ex- Chemistry-2019, Physics-2019, Chemistry-2018, Physics-2018
// Then need to take all the values means the arrays from the previous output object
// Then in each array need to groupBy the research ex- Directed evolution of enzymes, Phage display of peptides and antibodies.
// Then need to find the research topic length
// Then need to find the share
// Then need to return the object
