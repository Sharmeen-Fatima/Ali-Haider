const = form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        BackBtn = form.querySelector(".BackBtn"),
        allInput = form.querySelectorAll(".first input");

    nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
            alert("input is empty")
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive')); 