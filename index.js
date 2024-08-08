

const claimBtn = document.getElementById("claim_btn");

const firstNameInput = document.forms["claim_form"]["first_name"]
const lastNameInput = document.forms["claim_form"]["last_name"]
const emailInput = document.forms["claim_form"]["email"]
const passwordInput = document.forms["claim_form"]["password"]


claimBtn.addEventListener('click', (e)=> {
    e.preventDefault()


    //do checks

    //firstName check 
    nameCheck('First Name', firstNameInput)
    // if(firstNameInput.value === "") {
    //     firstNameInput.parentNode.classList.add("input_and_error");
    //     firstNameInput.parentNode.querySelector('img').classList.remove("d-none");
    //     firstNameInput.classList.add("error_border");
    //     firstNameInput.parentNode.parentNode.querySelector("p").classList.remove('d-none')
    //     firstNameInput.parentNode.parentNode.querySelector("p").innerText = "First Name cannot be empty"   
    // }else {
    //     firstNameInput.parentNode.classList.remove("input_and_error");
    //     firstNameInput.parentNode.querySelector('img').classList.add("d-none");
    //     firstNameInput.classList.remove("error_border");
    //     firstNameInput.parentNode.parentNode.querySelector("p").classList.add('d-none')
    // }

    //lastName check
    nameCheck('Last Name', lastNameInput)


    //email check
    emailCheck(emailInput)
   

    //password check
    nameCheck("Password", passwordInput)

   
    console.log('you clicked')
})


function nameCheck(nameType, nameElt) {
    if(nameElt.value === "") {
        // nameElt.parentNode.classList.add("input_and_error");
        // nameElt.parentNode.querySelector('img').classList.remove("d-none");
        // nameElt.classList.add("error_border");
        // nameElt.parentNode.parentNode.querySelector("p").classList.remove('d-none')
        displayError(nameElt)
        nameElt.parentNode.parentNode.querySelector("p").innerText = `${nameType} cannot be empty`   
    }else {
        // nameElt.parentNode.classList.remove("input_and_error");
        // nameElt.parentNode.querySelector('img').classList.add("d-none");
        // nameElt.classList.remove("error_border");
        reset(nameElt)
        nameElt.parentNode.parentNode.querySelector("p").classList.add('d-none')
    }
}

function displayError(elt) {
    elt.parentNode.classList.add("input_and_error");
    // elt.style.color = 'rgba(199, 37, 37, 0.4)'
    elt.parentNode.querySelector('img').classList.remove("d-none");
    elt.classList.add("error_border");
    elt.parentNode.parentNode.querySelector("p").classList.remove('d-none')
}

function reset(elt) {
    elt.parentNode.classList.remove("input_and_error");
        elt.parentNode.querySelector('img').classList.add("d-none");
        elt.classList.remove("error_border");
        // elt.style.color = 'initial'
        elt.parentNode.parentNode.querySelector("p").classList.add('d-none')


}

function emailCheck(emailElt) {
    const emailIsCorrect = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if(emailElt.value === "") {
        displayError(emailElt)
        emailElt.parentNode.parentNode.querySelector("p").innerText = `Email cannot be empty`   

    }
    else if(!emailIsCorrect.test(emailElt.value)) {
        // emailElt.parentNode.classList.add("input_and_error");
        // emailElt.parentNode.querySelector('img').classList.remove("d-none");
        // emailElt.classList.add("error_border");
        // emailElt.parentNode.parentNode.querySelector("p").classList.remove('d-none')
        displayError(emailElt)
        emailElt.parentNode.parentNode.querySelector("p").innerText = `Looks like this is not an email`   
    } else {
        reset(emailElt)
    }
}