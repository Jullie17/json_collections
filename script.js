let minions = document.getElementById('minionCharts');

function printToPage(incoming) {
  outputParagraph.innerHTML = incoming;
}

let minionJson = [
  {
    "Name" : "Stuart",
    "imageURL" : "stuart.PNG",
    "Eyes" : "Brown",
    "Hair" : "Black",
    "Appearances":"Despicable Me, Despicable Me 2, Minions, Orientation Day, Minions Paradise, Minions Oscars Segment 2016, Despicable Me 3, Minions: The Rise of Gru"
  },
  {
    "Name" : "Phil",
    "imageURL" : "phill.PNG",
    "Eyes" : "Brown",
    "Hair" : "Black",
    "Appearances" : "Despicable Me, Competition"
  },
  {
    "Name" : "Kevin",
    "imageURL" : "kevin.PNG",
    "Eyes" : "Brown",
    "Hair" : "Black",
    "Appearances" : "Despicable Me 2, Training Wheels, Minions, Minions Paradise, Minions Oscars Segment 2016, Despicable Me 3, Minions: The Rise of Gru"
  },
  {
    "Name" : "Tim",
    "imageURL" : "tim.PNG",
    "Eyes" : "Dark Brown",
    "Hair" : "Black",
    "Appearances" : "Despicable Me 2, Orientation Day"
  },
  {
    "Name" : "Dave",
    "imageURL" : "dave.PNG",
    "Eyes" : "Brown",
    "Hair" : "Black",
    "Appearances" : "Despicable Me, Despicable Me 2, Minions, Despicable Me 3, Home Makeover, Orientation Day, Puppy, Despicable Me: Minion Rush, AMC Promo, Mower Minions"
  },
  {
    "Name" : "Carl",
    "imageURL" : "carl.PNG",
    "Eyes" : "Dark Brown",
    "Hair" : "Black",
    "Appearances" : "Despicable Me"
  },
  {
    "Name" : "Lance",
    "imageURL" : "lance.PNG",
    "Eyes":"Dark Brown",
    "Hair":"Black",
    "Appearances":"Despicable Me 2, Banana, Despicable Me 3"
  },
  {
    "Name" : "Jerry",
    "imageURL" : "jerry.PNG",
    "Eyes":"Brown",
    "Hair": "Black",
    "Appearances": "Despicable Me, Home Makeover, Banana, Competition, Despicable Me 3"
  }
]

for (var i = 0; i < minionJson.length; i++) {
  createElements(minionJson[i]);
}

function createElements (incomingJSON) {
  //items
  let contentElement = document.createElement("DIV");
  contentElement.classList.add('items');

  //Names for each minions
  let mName = document.createElement("H2");
  mName.classList.add('contentTitle');
  mName.innerText = incomingJSON['Name'];
  contentElement.appendChild(mName);

  //image for each Minions
  let mImg = document.createElement("IMG");
  mImg.classList.add('minionsImage');
  mImg.src = incomingJSON['imageURL'];
  contentElement.appendChild(mImg);

  let mChart = document.createElement("DIV");
  mChart.classList.add('pContain');
  contentElement.appendChild(mChart);

  //Eye color for each Minions
  let mEyes = document.createElement("P");
  mEyes.classList.add('eyes');
  mEyes.innerText = "Eye Color: " +" "+ incomingJSON['Eyes'];
  mChart.appendChild(mEyes);

  //Appearnces for each Minions on movies
  let mHair = document.createElement("P");
  mHair.classList.add('strength');
  mHair.innerText = "Hair Color: " +" "+ incomingJSON ['Hair'];
  mChart.appendChild(mHair);

  let mAppear = document.createElement("P");
  mAppear.classList.add('appearance');
  mAppear.innerText = "Appearances: " +" "+ incomingJSON ['Appearances'];
  mChart.appendChild(mAppear);

  minions.appendChild(contentElement);
}
