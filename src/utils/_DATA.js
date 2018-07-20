let questions = {
    "4808c5c8-8e49-4f9a-bfd1-96f3a8b2e447": {
      id: "4808c5c8-8e49-4f9a-bfd1-96f3a8b2e447",
      option1: "Eat Pizza",
      option2: "Eat Salad",
      timestamp: 1518122597860,
    },
    "bf2cd792-9e11-4dd3-ae01-42f66d142362": {
        id: "bf2cd792-9e11-4dd3-ae01-42f66d142362",
        option1: "Drive a BMW",
        option2: "Drive a Mercedes",
        timestamp: 1518122597861,
      },
      "d8410323-2730-4b67-8ecc-d3ff6e2fa361": {
        id: "d8410323-2730-4b67-8ecc-d3ff6e2fa361",
        option1: "Drive a Diesel",
        option2: "Drive a Petrol",
        timestamp: 1518122597862,
      },
}

export function _getQuestions () {
    return new Promise((res, rej) => {
        setTimeout(() => res({...questions}), 1000)
    })
}
