const addbooksbtn=document.querySelector('#addbooksbtn');
const addbook=document.querySelector('.addbook')
const form=document.querySelector('.frm');
const submitbtn=document.querySelector('.submitbtn');
const container=document.querySelector('.container');

let myLibrary=[];

function Book(title,pages,author,read){
    this.title=title,
    this.pages=pages,
    this.author=author,
    this.read=read
}

addbooksbtn.addEventListener("click", ()=>{
    addbooksbtn.style.display="none";
    form.style.display="revert";
    
});
function render(){
    let rendered=document.querySelectorAll('.rendered');
    rendered.forEach(element => {
        element.remove();
    });
    myLibrary.forEach(element => {
        let ritem = document.createElement('div');
        ritem.setAttribute("class" ,"card rendered");
        readinfo=element.read== "on" ? `already read`:`not read yet`
        ritem.innerHTML=`<div><h2 >Title : ${element.title}</h2 ><div><h2 >Pages: ${element.pages}</h2 ><div><h2 >Author : ${element.author}</h2 ><div><h2 >${readinfo}</h2 >`;
        container.insertBefore(ritem, addbook);
    });
    
}
function addBookToLibrary() {
    let title =document.querySelector('#title').value;
    let author=document.querySelector('#author').value;
    let pages=document.querySelector('#pages').value;
    let read=document.querySelector('#read').value;
    let newBook=new Book(title,author,pages,read);
    myLibrary.push(newBook);
}

submitbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    addBookToLibrary();
    console.log("submitted")
    render();
    addbooksbtn.style.display="revert";
    form.style.display="none";
});
