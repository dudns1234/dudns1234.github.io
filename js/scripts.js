/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
const liElements = document.querySelectorAll('h2.fw-bolder')
// console.log(liElements)

liElements.forEach(function(li){
    li.addEventListener('click',function(e){
        let python_list = document.querySelector('ul.python_list')
        let django_list = document.querySelector('ul.django_list')
        let git_list = document.querySelector('ul.git_list')
        let pandas_list = document.querySelector('ul.pandas_list')
        if (e.target.textContent === 'Python' && python_list.style.display === "none"){
            python_list.style.display = ""
            django_list.style.display = "none"
            git_list.style.display = "none"
            pandas_list.style.display = "none"
        }   else if (e.target.textContent === 'Django' && django_list.style.display === "none"){
            django_list.style.display = ""
            python_list.style.display = "none"
            git_list.style.display = "none"
            pandas_list.style.display = "none"
        }   else if (e.target.textContent === 'Git' && git_list.style.display === "none"){
            git_list.style.display = ""
            python_list.style.display = "none"
            django_list.style.display = "none"
            pandas_list.style.display = "none"
        }   else if (e.target.textContent === 'Pandas' && pandas_list.style.display === "none"){
            pandas_list.style.display = ""
            python_list.style.display = "none"
            git_list.style.display = "none"
            django_list.style.display = "none"
        }   else{
            python_list.style.display = "none"
            django_list.style.display = "none"
            git_list.style.display = "none"
            pandas_list.style.display = "none"
        }
    })
})

// commet_click.forEach((commet_click1) => {
//     commet_click1.addEventListener('click', (event)=>{
//         let postId = event.target.dataset
//         console.log(postId)
//         // let display = document.getElementById("comment_div").style.display
//         let comment_all = document.querySelector(`#comment${postId}`)
//         let comment_show = document.querySelector(`#comment_div${postId}`)
//         console.log(comment_all) 
//         console.log(comment_show) 
//         if (Boolean(comment_all.style.display =='' && comment_show.style.display == "none")){   // comment_all.style.display == 'show' 로 하면 안됨
//             comment_all.style.display = "none"
//             comment_show.style.display = ""
//             console.log(comment_all) 
//             console.log(comment_show)
//         }else{ 		
//             comment_all.style.display = ""
//             comment_show.style.display = "none"
//         } 
//         })

//     })