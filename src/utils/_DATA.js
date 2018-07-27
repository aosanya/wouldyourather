let users = {
    sarah_edo: {
      id: "sarah_edo",
      name: "Sarah Drasner",
      avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
      questions: ['4808c5c8-8e49-4f9a-bfd1-96f3a8b2e447', 'bf2cd792-9e11-4dd3-ae01-42f66d142362', 'd8410323-2730-4b67-8ecc-d3ff6e2fa361', ],
    },
    tylermcginnis: {
      id: "tylermcginnis",
      name: "Tyler McGinnis",
      avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
      questions: [],
    },
    dan_abramov: {
      id: "dan_abramov",
      name: "Dan Abramov",
      avatarURL: "https://tylermcginnis.com/would-you-rather/dan.jpg",
      questions: [],
    }
  }

let questions = {
    "4808c5c8-8e49-4f9a-bfd1-96f3a8b2e447": {
        id: "4808c5c8-8e49-4f9a-bfd1-96f3a8b2e447",
        options: [{id : "4808c5c8-8e49-4f9a-bfd1-96f3a8b2e441" , option : "drive a Hydrogen powered car"},
                  {id : "4808c5c8-8e49-4f9a-bfd1-96f3a8b2e442" , option : "drive an Electric powered car"}],
        timestamp: 1518122597860,
        replies: [{user : 'tylermcginnis' ,option : "4808c5c8-8e49-4f9a-bfd1-96f3a8b2e441"}, {user : 'dan_abramov' ,option : "4808c5c8-8e49-4f9a-bfd1-96f3a8b2e442"}],
    },
    "bf2cd792-9e11-4dd3-ae01-42f66d142362": {
        id: "bf2cd792-9e11-4dd3-ae01-42f66d142362",
        options: [{id : "bf2cd792-9e11-4dd3-ae01-42f66d142363" , option : "drive a BMW"},
                  {id : "bf2cd792-9e11-4dd3-ae01-42f66d142364" , option : "drive a Mercedes"}],
        timestamp: 1518122597861,
        replies: [{user : 'tylermcginnis' ,option : "bf2cd792-9e11-4dd3-ae01-42f66d142363"}, {user : 'dan_abramov' ,option : "bf2cd792-9e11-4dd3-ae01-42f66d142364"}],
    },
    "d8410323-2730-4b67-8ecc-d3ff6e2fa361": {
        id: "d8410323-2730-4b67-8ecc-d3ff6e2fa361",
        options: [{id : "d8410323-2730-4b67-8ecc-d3ff6e2fa363" , option : "use a fully autonomous vehicle"},
                  {id : "d8410323-2730-4b67-8ecc-d3ff6e2fa364" , option : "use a partially autonomous vehicle"}],
        timestamp: 1518122597862,
        replies: [{user : 'tylermcginnis' ,option : "d8410323-2730-4b67-8ecc-d3ff6e2fa363"}, {user : 'dan_abramov' ,option : "d8410323-2730-4b67-8ecc-d3ff6e2fa364"}],
    },
}

export function _getQuestions () {
    return new Promise((res, rej) => {
        setTimeout(() => res({...questions}), 1000)
    })
}

export function _getUsers () {
    return new Promise((res, rej) => {
        setTimeout(() => res({...users}), 1000)
    })
}


export function _getCurrentUser () {
    console.log('step 1')
    console.log(localStorage.getItem('user'))
    const AUTHED_ID =localStorage.getItem('user')
    return new Promise((res, rej) => {
        res({AUTHED_ID})
    })
}