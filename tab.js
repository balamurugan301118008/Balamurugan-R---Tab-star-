const btns = document.querySelectorAll("button")
const content = document.querySelectorAll(".content")

for(let i=0; i<btns.length; i++){
    btns[i].addEventListener("click",(e)=>{
        for(let c=0;c<content.length; c++){
            let data = e.target.dataset.id
            if( data === content[c].id){
                content[c].classList.add("active")
                btns[i].classList.add("active")
            }
            else{
                content[c].classList.remove("active")
                btns[i].classList.remove("active")
            }
        } 
    })
}









































// <-------I do this codes ---------> 

// const btns = document.querySelectorAll('.tab-btn')
// const content = document.querySelectorAll('.content')

// for(let i=0; i<btns.length; i++){
//     btns[i],addEventListener('click',function(e){
//         // alert("hi")
//         const tar = e.target.dataset.id
//         // console.log(e.target.dataset.id);
//         for(let c=0; c<content.length; c++){
//             if(tar === content[c].id){
//                 content[c].classList.add('active')
//                 // btns[i].classList.add('active')
//                 // console.log(content,"active");
//             }
//             else{
//                 content[c].classList.remove('active')
//                 // btns[i].classList.remove('active')

//                 // console.log(content,"inactive");

//             }
//         }
//     })
// }

// <---- avinesh reference this codes------->

// const buttons = document.querySelectorAll('.tab-btn')
// const contentEl = document.querySelectorAll('.content')

// for(let i=0; i<buttons.length; i++){
//     buttons[i].classList.remove("active")
//     buttons[i].addEventListener('click', function(e){

//     for(let i=0; i<contentEl.length; i++){
//         contentEl[i].classList.remove('active')
//     }
//         // console.log(e.target);
//         let id = e.target.dataset.id
//         //id='vision'
//         let ele = document.getElementById(id)
//         console.log(ele);
//         // let ele = document.getElementById('vision')

//         ele.classList.add('active')
//         for(let i=0; i<buttons.length; i++){
//             buttons[i].classList.remove('active')
            
//         }
//         buttons[i].classList.add('active')
//     })
// }




// const btns = document.querySelectorAll(".tab-btn")
// const content = document.querySelectorAll(".content")


// for(let i=0; i<btns.length; i++){
//     btns[i].addEventListener("click",(e)=>{
//         let event = e.target.dataset.id
//         for(let c=0; c<content.length; c++){
//             if(event == content[c].id){
//                 // content[c].classList.add("active")
//                 content[i].classList.add("active")
//                 btns[i].classList.add("active")
//             }
//             else{
//                 content[c].classList.remove("active")
//                 btns[i].classList.remove("active")
//             }
//         }
//     })
// }