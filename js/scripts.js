/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// const liElements = document.querySelectorAll('h2.fw-bolder')
// // console.log(liElements)

// liElements.forEach(function(li){
//     li.addEventListener('click',function(e){
//         let python_list = document.querySelector('ul.python_list')
//         let django_list = document.querySelector('ul.django_list')
//         let git_list = document.querySelector('ul.git_list')
//         let pandas_list = document.querySelector('ul.pandas_list')
//         if (e.target.textContent === 'Python' && python_list.style.display === "none"){
//             python_list.style.display = ""
//             django_list.style.display = "none"
//             git_list.style.display = "none"
//             pandas_list.style.display = "none"
//         }   else if (e.target.textContent === 'Django' && django_list.style.display === "none"){
//             django_list.style.display = ""
//             python_list.style.display = "none"
//             git_list.style.display = "none"
//             pandas_list.style.display = "none"
//         }   else if (e.target.textContent === 'Git' && git_list.style.display === "none"){
//             git_list.style.display = ""
//             python_list.style.display = "none"
//             django_list.style.display = "none"
//             pandas_list.style.display = "none"
//         }   else if (e.target.textContent === 'Pandas' && pandas_list.style.display === "none"){
//             pandas_list.style.display = ""
//             python_list.style.display = "none"
//             git_list.style.display = "none"
//             django_list.style.display = "none"
//         }   else{
//             python_list.style.display = "none"
//             django_list.style.display = "none"
//             git_list.style.display = "none"
//             pandas_list.style.display = "none"
//         }
//     })
// })

const liElements = document.querySelectorAll('h3.fw-bolder')
// console.log(liElements)

liElements.forEach(function(li){
    li.addEventListener('click',function(e){
        let item_name = e.target.textContent
        // console.log(e.target.textContent) // Python
        let item = document.getElementById(`${item_name}`)
        let style = item.getAttribute('style')
        // console.log(style)

        let all_item = document.querySelectorAll('ul.list')

        for (let li of all_item){
            let all_item_style = li.getAttribute('style')
            // console.log(all_item_style)
            if (all_item_style === "display:show"){
                // console.log(li)
                li.setAttribute('style', 'display:none')
            }
        }

        if (style === "display:none") {
            item.setAttribute('style', 'display:show')
        }   else{
            item.setAttribute('style', 'display:none')
        }
    })
})

// md파일 수정전 : block에 바로 md 파일 보이도록
// const mdElements = document.querySelectorAll('li.md_name')
// // console.log(mdElements)

// mdElements.forEach(function(li){
//     li.addEventListener('click',function(e){
//         // console.log(li.id)
//         let md_block = li.querySelector('md-block.md')
//         // let src = md_block.getAttribute('src')
//         let style = md_block.getAttribute('style')
//         // console.log(md_block)
//         // console.log(src)
//         if (style === "display:none") {
//             // console.log('yes')
//             md_block.setAttribute('style', 'display:show')
//         }   else{
//             // console.log('no')
//             md_block.setAttribute('style', 'display:none')
//         }
//     })
// })

// md파일 수정후 : aside만들고 md 파일은 화면 가운데에 보이도록 하기
const mdElements = document.querySelectorAll('li.md_name')
// console.log(mdElements)

mdElements.forEach(function(li){
    li.addEventListener('click',function(e){
        let item_name = e.target.innerText
        // console.log(item_name) // Python
        let item = document.getElementById(`${item_name}`)
        // console.log(item)
        let style = item.getAttribute('style')
        // console.log(style)
        let text = document.querySelector("div.child")
        let all_item = document.querySelectorAll('md-block.md')

        for (let li of all_item){
            let all_item_style = li.getAttribute('style')
            console.log(all_item_style)
            if (all_item_style === "display:show"){
                console.log(li)
                li.setAttribute('style', 'display:none')
            }
        }
        if (style === "display:none") {
            text.style.cssText = "top: 15%";
            document.getElementById('markdown_box').setAttribute('style', 'display:show')
            item.setAttribute('style', 'display:show')
        }   else{
            text.style.cssText = "top: 50%";
            document.getElementById('markdown_box').setAttribute('style', 'display:none')
            item.setAttribute('style', 'display:none')
        }
    })
})

// 검색기능구현
function printName(){
    const name = document.getElementById('search').value;  //intro
    // console.log(name)
    let item = document.getElementById(`${name}`)
    let style = item.getAttribute('style')
    let text = document.querySelector("div.child")
    let all_item = document.querySelectorAll('md-block.md')

    // 다른 md파일 열려있으면 닫아라.
    for (let li of all_item){
        let all_item_style = li.getAttribute('style')
        // console.log(all_item_style)
        if (all_item_style === "display:show"){
            li.setAttribute('style', 'display:none')
        }

    if (style === "display:none") {
        text.style.cssText = "top: 15%";
        document.getElementById('markdown_box').setAttribute('style', 'display:show')
        item.setAttribute('style', 'display:show')
    }   else{
        text.style.cssText = "top: 50%";
        document.getElementById('markdown_box').setAttribute('style', 'display:none')
        item.setAttribute('style', 'display:none')
    }
  }
}

// function printName(){

//     const addValue = document.getElementById('search').value;
//     console.log(addValue)
//     // 2. 추가할 li element 생성
//     // 2-1. 추가할 li element 생성
//     const li = document.createElement("li");
    
//     let all_item = document.querySelectorAll('li.md_name')
//     // console.log(all_item)
//     for (let li2 of all_item){
//         let all_item_value = li2.innerText
//         // console.log(all_item_value)
//         // document.getElementById("suggestions").innerText = name;
//         if (all_item_value.includes(`${addValue}`)){
//             li.setAttribute('id',all_item_value);
//             const textNode = document.createTextNode(all_item_value);
//             li.appendChild(textNode);
//             document.getElementById('suggest').appendChild(li);
//         }
//     }
// }
//     2-2. li에 id 속성 추가 
//     if ()
//     li.setAttribute('id',addValue);
    
//     // 2-3. li에 text node 추가 
//     const textNode = document.createTextNode(addValue);
//     li.appendChild(textNode);
    
//     // 3. 생성된 li를 ul에 추가
//     document.getElementById('suggest').appendChild(li);
//     }

// const input = document.querySelector('input#directory_upload');
// const preview = document.querySelector('.file_list');
 
// input.addEventListener('change', showTextFile);
 
// function showTextFile() {
//     const selectedFiles = input.files;
//     const list = document.createElement('ul');
//     preview.appendChild(list);
 
//     for(const file of selectedFiles) {
//         const listItem = document.createElement('li');
//         const summary = document.createElement('div');
 
//         summary.textContent = file.webkitRelativePath;
 
//         listItem.appendChild(summary);
//         list.appendChild(listItem);
//     }
// }