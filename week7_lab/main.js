/** object constructors **/
function Llama(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "Weird-lookin alpaca-llama hybrid";
  this.image = "llama.png";
}

function Puppy(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "Strangely-shaped dog; a geometric experiment";
  this.image = "puppy.png";
}

function Lizard(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "five-year-old drawn lizard";
  this.image = "lizard.png";
}

/*** global variables ***/
let animals = [new Llama(), new Puppy(), new Lizard()];
let names = ["Baekhyun", "Kai", "Luhan", "Chen", "Chanyeol", "Xiumin",
             "Tao", "Kris", "Sehun", "D.O.", "Lay", "Suho"];


/*** functions ***/
// get a random index for an array from 0 to maxIndex (not inclusive)
function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

// generates either a Llama, Puppy, or Lizard with a random name and random age
function generateRandomAnimal() {
  let randomIdx = getRandomIndex(animals.length);
  let randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Llama) 
  {
    return new Llama(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Puppy) 
  {
    return new Puppy(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Lizard) 
  {
    return new Lizard(generateRandomName(), generateRandomAge());
  }
}


// generates a random name from a list of names
function generateRandomName() {
  let randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

// generates a random age from 0 to 5
function generateRandomAge() {
  return getRandomIndex(5);
}

/*** document load ****/
function onLoad() {
  // generate a random animal when the document opens
  var animal = generateRandomAnimal();
  console.log(animal)
  // update the page based on the animal properties
  document.getElementById("animal-properties").textContent = 
                          animal.name + ",  " + animal.age + " years old";
  let imageTag = document.getElementById("animal-img");
  imageTag.setAttribute("src", animal.image);
  imageTag.setAttribute("alt", animal.image_alt);
}