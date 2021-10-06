const table = document.getElementById('table');

const btn = document.getElementById('btn')
function tinhd(r1,r2){
    let t1 = 0
    let t2 = 1
    let t;
    let q;
    let r;
    
    while(r2>=0){
        const listTd = document.createElement('tr');
        q = Math.trunc(r1/r2);
        r = r1%r2;
        t = t1 - q*t2
        listTd.innerHTML =`
        <td>${q}</td>
        <td>${r1}</td>
        <td>${r2}</td>
        <td>${r}</td>
        <td>${t1}</td>
        <td>${t2}</td>
        <td>${t}</td>`

        r1 = r2
        r2 = r;
        t1 = t2;
        t2 = t;
        table.appendChild(listTd)
    }

}
btn.addEventListener("click",()=>{
    const r1 = document.getElementById('r1').value;
    const r2 = document.getElementById('r2').value;
    
    tinhd(r1,r2)
})
// tinhd(700,401)
