const mainElement = document.querySelector("main")

const kata1 = document.createElement("h1")
kata1.append("Kata1")
mainElement.append(kata1)

let counter1 = 0
  while (counter1 < 20) {
    console.log(counter1)
    counter1 += 1
    mainElement.append(counter1 + ", ")
  }

  const Kata2 = document.createElement("h1")
  Kata2.append("Kata2")
  mainElement.append(Kata2)
  
  let counter2 = 0
  while (counter2 < 20) {
    console.log(counter2)
    counter2 += 2
    mainElement.append(counter2 + ", ")
  } 
  
  const Kata3 = document.createElement("h1")
  Kata3.append("Kata3")
  mainElement.append(Kata3)

  let counter3 = 1
  while (counter3 < 19) {
    console.log(counter3)
    counter3 += 2
    mainElement.append(counter3 + ", ")
  }

  const Kata4 = document.createElement("h1")
  Kata4.append("Kata4")
  mainElement.append(Kata4)

  let counter4 = 0
  while (counter4 < 100) {
    console.log(counter4)
    counter4 += 5
    mainElement.append(counter4 + ", ")
  }

  const Kata5 = document.createElement("h1")
  Kata5.append("Kata5")
  mainElement.append(Kata5)

  let counter5 = 1
  while (counter5 <= 100) {
    const isSquare = Number.isInteger(Math.sqrt(counter5));
    if (isSquare)
     {mainElement.append(counter5 + ", ")
    console.log(counter5)
    }
    counter5 += 1 
    
  }

  const Kata6 = document.createElement("h1")
  Kata6.append("Kata6")
  mainElement.append(Kata6)

counter6 = 20
while (counter6 > 1) {
    console.log(counter6)
    counter6 -= 1
    mainElement.append(counter6 + ", ")

}

const Kata7 = document.createElement("h1")
  Kata7.append("Kata7")
  mainElement.append(Kata7)

counter7 = 20
  while (counter7 >= 2) { 
    console.log(counter7)
   counter7 -= 2
    mainElement.append(counter7 + ", ")
    
  }

  const Kata8 = document.createElement("h1")
  Kata8.append("Kata8")
  mainElement.append(Kata8)

  counter8 = 21
  while (counter8 > 1) {
    console.log(counter8)
    counter8 -= 2
    mainElement.append(counter8 + ", ")

  }

  const Kata9 = document.createElement("h1")
  Kata9.append("Kata9")
  mainElement.append(Kata9)

  counter9 = 105
  while (counter9 >= 5) {
    console.log(counter9)
    counter9 -= 5
    mainElement.append(counter9 + ", ")
  }

  const Kata10 = document.createElement("h1")
  Kata10.append("Kata10")
  mainElement.append(Kata10)

  counter10 = 100
  while (counter10 >= 1) {
    const isSquare = Number.isInteger(Math.sqrt(counter10));
  if (isSquare) 
  {mainElement.append(counter10 + ", ")
  console.log(counter10)
  }
  counter10 -= 1 
}



const sampleArray = 
  [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,];

const Kata11 = document.createElement("h1")
  Kata11.append("Kata11")
  mainElement.append(Kata11)

  let newArray = []
    for (counter11 = 0; counter11 <= 0; counter11 +=1) [
        mainElement.append(sampleArray + ", ")
    ]

    const Kata12 = document.createElement("h1")
  Kata12.append("Kata12")
  mainElement.append(Kata12)

  for (let i = 0; i < sampleArray.length; i+=1){
      if (sampleArray[i] % 2 === 0) {
          mainElement.append(sampleArray[i] + ", ")
      }
  }

    const Kata13 = document.createElement("h1")
    Kata13.append("Kata13")
    mainElement.append(Kata13)

    for (let i = 0; i < sampleArray.length; i +=1){
        if (sampleArray[i] % 2 != 0) {
            mainElement.append(sampleArray[i] + ", ")

        }
    }

    const Kata14 = document.createElement("h1")
    Kata14.append("Kata14")
    mainElement.append(Kata14)

    for (let i = 0; i < sampleArray.length; i += 1){
    mainElement.append((sampleArray[i] * sampleArray[i]) + ", ")
    }

    const Kata15 = document.createElement("h1")
    Kata15.append("Kata15")
    mainElement.append(Kata15)

    let sum = 0
        for (let counter15 = 0; counter15 <= 20; counter15 += 1){
            sum += counter15
        }
        mainElement.append(sum + ", ")

    const Kata16 = document.createElement("h1")
    Kata16.append("Kata16")
    mainElement.append(Kata16)

    let sum2 = 0
    for(let counter16 = 0; counter16 < sampleArray.length; counter16 += 1 ) {
       
    sum2 += sampleArray[counter16]
    }
    mainElement.append(sum2)

    const Kata17 = document.createElement("h1")
    Kata17.append("Kata17")
    mainElement.append(Kata17)

  min = Number.POSITIVE_INFINITY
  for(i = 0, l = sampleArray.length; i < l; i+=1 ){
      min = Math.min(min, sampleArray[i])
    }
    mainElement.append(min)

    //Found this code at https://stackoverflow.com/questions/8934877/obtain-smallest-value-from-array-in-javascript



    const Kata18 = document.createElement("h1")
    Kata18.append("Kata18")
    mainElement.append(Kata18)

    let largestNumber = 0
    for (let index = 0; index < sampleArray.length; index +=1){
        let currentNumber = sampleArray[index]
        if (currentNumber > largestNumber) {
        largestNumber = (currentNumber)

        }
    }
    mainElement.append(largestNumber)

    //Contributed to By:
    //Tyler Ammons, Nicole Foster, and Roy Wright










  
    