function myGroupBy(collection, callback) {
  if (!Array.isArray(collection)) {
    throw new TypeError(`${collection} is not iterable`)
  }

  if (typeof callback !== "function") {
    throw new TypeError("Callback is not of type function")
  }

  const result = {}

  for (let item of collection) {
    let key = callback(item)
    const coercedKey = String(key)
    if (!result[coercedKey]) {
      result[coercedKey] = []
    }
    result[coercedKey].push(item)
  }
  return result
}

const input = [
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

const obj = myGroupBy(input, ({ year, category }) => `${category}-${year}`)
const prize = Object.values(obj)?.map((categoryAndYearWise) => {
  const researchTopicWiseGroupBy = myGroupBy(
    categoryAndYearWise,
    ({ research }) => research
  )
  const researchTopicInaYear = Object.keys(researchTopicWiseGroupBy)?.length
  const winners = categoryAndYearWise?.map((everyWinner) => {
    const noOfWinners = researchTopicWiseGroupBy[everyWinner?.research]?.length
    const share = (1 / researchTopicInaYear / noOfWinners)?.toFixed(2)
    return {
      name: everyWinner?.name,
      share,
    }
  })

  return {
    category: categoryAndYearWise[0]?.category,
    year: categoryAndYearWise[0]?.year,
    winners,
  }
})

console.log(JSON.stringify(prize, null, 2))
