// <!-- --------------------------------Create A Footer Section-------------------------- -->

const section = document.querySelectorAll('section')
const navLink = document.querySelectorAll('header nav a')
window.scroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let  height=sec.offsetHeight;
        let id=sec.getattribute('id')
        if(top>=offset && top< offset + height){
            navLink.forEach(links=>{
                links.classlist.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            })
        }
    })

    // <!-- --------------------------------Create A Sticky Navbar-------------------------- -->
var header=document.querySelector('header')
header.classList.toggle("sticky",window.scrollY>100)

menubar.classList.remove('bx-x')
navbar.classList.remove('active')
};
    // <!-- --------------------------------Create  a Toggle Changer-------------------------- -->

let menubar=document.querySelector('#menu')
let navbar=document.querySelector('.navbar')
menubar.onclick=()=>{
   
    menubar.classList.toggle('bx-x')
    navbar.classList.toggle('active')   
   
}
    // <!-- --------------------------------Create  a Text Changer-------------------------- -->
    // const type = newtyped('.textline',{
    //     strings:['Frontend Developer','Blogger','Youtuber'],
    //     typeSpeed:100,
    //     backSpeed:100,
    //     backDelay:1000,
    //     loop:true
    // })
    // function sendEmail(){
    //     Email.send({
    //         Host : "smtp.gmail.com",
    //         Username : "sakshijadhav895650@gmail.com",
    //         Password : "sakshi900",
    //         To : 'sj7301826@gmail.com',
    //         From :document.getElementById("email").value,
    //         Subject : "New contact form for enquiry",
    //         Body : "And this is the body"
    //     }).then(
    //       message => alert(message)
    //     );
    // }
   







