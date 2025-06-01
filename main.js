const email = document.getElementById('inEmail')
const btnSubmit = document.getElementById('btnSubmit')
const btnDiv = document.getElementById('btnDiv')
const iconAlert = document.getElementById('iconAlert')
const emailAlert = document.getElementById('emailAlert')

// validacao de mail
function validarEmail(email) {
    const expressaoRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return expressaoRegular.test(email)
}

btnSubmit.addEventListener('click', () => {
    const userEmail = email.value

    if (!validarEmail(userEmail)) {
        email.classList.add('text-soft-red', 'border-2', 'border-soft-red', 'bg-[url("/images/icon-error.svg")]', 'bg-no-repeat', 'bg-position-[center_right_1.5rem]')
        btnDiv.classList.add('border-2', 'border-soft-red')
        const paragraph = document.createElement('p')
        paragraph.innerText = 'Please provide a valid email'
        paragraph.classList.add('text-soft-red', 'text-[16px]', 'text-start', 'pl-8')
        emailAlert.appendChild(paragraph)
    }
    else {
        email.classList.add('text-emerald-200', 'border-2', 'border-emerald-200', 'bg-white')
        btnDiv.classList.add('border-2', 'border-emerald-200', 'bg-[#E8F0FE]')
    }
})