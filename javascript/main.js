window.onload = () => {
    
    const menu = () => {

        let ativa = document.querySelector('.ativa')
        let fecha = document.querySelector('.fecha')
        let campo = document.querySelector('.menu_mobile ul')

        ativa.addEventListener("click", () => {

            if(campo.classList.contains("menu")){
                campo.classList.remove("menu")
            }

            else{
                campo.classList.add("menu")
            }
        })

        fecha.addEventListener('click', () => {
            campo.classList.remove("menu")
        })

    }

    menu()
}