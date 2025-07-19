/* console.log([]+1+2)
console.log(typeof function(){})
console.log(typeof null == typeof undefined)
console.log(""+1+2) */

// Sort an array which has 2 elements inside every index and we need to sort is bases on the 2nd element [["1":2],["2":1],["3":3]]
function sortArray(arr) {
  return arr.sort((a, b) => a[1] - b[1])
}

/* console.log(sortArray([["1", 2], ["2", 1], ["3", 3]])); */

/* console.log(Number.NEGATIVE_INFINITY)
console.log(Infinity)

console.log('A  &* man &*('.replace(/[^a-zA-Z]/g,'')) */

const obj = {
  a: 1,
  b: 2,
  c: 3,
}

/* console.log(Object.entries(obj)) */

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

function myGroupBy(context, callback) {
  if (!Array.isArray(context)) {
    throw new TypeError("Iterable must be an array")
  }
  let result = {}
  for (let item of context) {
    let key = callback(item)
    let coercedKey = String(key)
    if (!result[coercedKey]) {
      result[coercedKey] = []
    }
    result[coercedKey]?.push(item)
  }

  return result
}

const res = myGroupBy(awards, ({ category, year }) => `${category}-${year}`)
const prizes = Object.values(res)?.map((categoryAndYearWiseList) => {
  //calculate research topics for every category bases on year
  const yearWiseTopics = myGroupBy(
    categoryAndYearWiseList,
    ({ research }) => research
  )
  const totalResearchTopics = Object.keys(yearWiseTopics)?.length
  const winners = categoryAndYearWiseList?.map((eachContributor) => {
    let winnersForEachTopic = yearWiseTopics[eachContributor?.research]?.length
    const share = (1 / totalResearchTopics / winnersForEachTopic).toFixed(2)
    return {
      name: eachContributor?.name,
      share,
    }
  })
  return {
    category: categoryAndYearWiseList[0]?.category,
    year: categoryAndYearWiseList[0]?.year,
    winners,
  }
})

console.log(JSON.stringify(prizes, null, 4))
