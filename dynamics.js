 let loginbtn= document.querySelector('#login');
        let login_modal_ele= document.querySelector('.login_modal');
        let cross= document.querySelector('#cross');

        loginbtn.addEventListener('click',()=>{
            login_modal_ele.classList.add('show_modal');
            loginbtn.classList.add('show_button');
        });
        cross.addEventListener('click',()=>{
            login_modal_ele.classList.remove('show_modal');
            loginbtn.classList.remove('show_button')
        })