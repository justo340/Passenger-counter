// initialize the count to zero
let count = 0

// getting the document object model
let countElement = document.getElementById('count')
let saveEl = document.getElementById('save-El')


// listen for clicks on the increment button

function increment() {
    // show the button was clicked
    console.log('increment button was clicked')

    // increment the count variable
    count += 1

    // show the count
    console.log(count)

    // change the count on the html
    countElement.textContent = count

}




function saveValue() {
    // show the button was clicked
    console.log('save button was clicked')

    // the saved value
    let countStr = count + " - "

    // append the previous entries on the html
    saveEl.textContent += countStr

    // reset count to zero
    count = 0

    //reset the html value to zero
    countElement.textContent = 0

}