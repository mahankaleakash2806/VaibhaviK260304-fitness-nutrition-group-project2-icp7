function showRoutine(){
    const  routine = document.getElementById("daily-routine");
    routine.classList.add("d-block");
    setTimeout(() => {
        routine.classList.remove("d-block");
    }, 10000);
}