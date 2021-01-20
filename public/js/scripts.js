document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('#form');
    const btn = document.querySelector('.btn');


    btn.addEventListener('click', function(e) {
        e.preventDefault();
        let data = {};
        const elements = [...form.elements];
        for (let el of elements){
            if(el.type !== 'submit'){
                data[el.name] = el.value
                console.log(el.value, el.type);
            }
        }
        console.log(data);
        fetch('createUser', {
           method: 'Post',
           headers: {
            'Content-Type': 'application/json;charset=utf-8'
           },
           body: JSON.stringify(data)
        }).then((response) => {
            return response.json();
        })
        .then((data)=>{
            console.log(data);
            form.insertAdjacentHTML(`beforeend`, `<p class= "alert alert-success">Inserted</p>`)
        })
    });


});