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
  // get saved animal from local storage
  var animal = JSON.parse(localStorage.getItem("savedAnimal"))

  // use a boolean to keep track of whether an animal has been saved
  var hasSavedAnimal=false;

  // check if animal exists in local storage
  if (animal==null)
  {
    // if there is no saved animal, the button should display the Save Animal text
    // and generate a new animal
    document.getElementById("button-storage").textContent = "Save Animal";
    animal = generateRandomAnimal();

  }
  else
  {
    // if there is a saved animal, the button should display Clear Animal text
    // change boolean to note that this animal has been saved
    document.getElementById("button-storage").textContent = "Clear Animal";
    hasSavedAnimal = true;
  }

  // update the page based on the animal properties
  document.getElementById("animal-properties").textContent = 
                          animal.name + ",  " + animal.age + " years old";
  document.getElementById("animal-img").setAttribute("src", animal.image);

  document.getElementById("button-storage").addEventListener("click", function()
  {
    // if clearing the animal
    if (hasSavedAnimal) 
    {
      // clear animal from local storage
      // hide button and show message to user
      localStorage.removeItem("savedAnimal");
      document.getElementById("button-storage").style.display = "none";
      document.getElementById("button-action-text").textContent = "Cleared!";
      document.getElementById("button-action-text").style.display = "block";
    }

    // saving the animal
    else 
    {
      // save animal to local storage
      // hide button and show message to user
      localStorage.setItem("savedAnimal", JSON.stringify(animal));
      document.getElementById("button-storage").style.display = "none";
      document.getElementById("button-action-text").textContent = "Saved!";
      document.getElementById("button-action-text").style.display = "block";
    }
  });

}