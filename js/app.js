document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-kaiju-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();

    const kaijuListItem = createKaijuListItem(event.target);
    const kaijuList = document.querySelector('#kaiju-list');
    kaijuList.appendChild(kaijuListItem);

    event.target.reset();
}

const createKaijuListItem = function (form) {
    const kaijuListItem = document.createElement('li');
    kaijuListItem.classList.add('kaiju-list-item');

    const name = document.createElement('h5');
    name.textContent = form.name.value;
    kaijuListItem.appendChild(name);

    const gender = document.createElement('p');
    gender.textContent = form.gender.value;
    kaijuListItem.appendChild(gender);

    const dob = document.createElement('p');
    dob.textContent = form.dob.value;
    kaijuListItem.appendChild(dob);

    const type = document.createElement('p');
    type.textContent = form.type.value;
    kaijuListItem.appendChild(type);

    const treatment = document.createElement('p');
    treatment.textContent = form.treatment.value;
    kaijuListItem.appendChild(treatment);

    const vet = document.createElement('p');
    vet.textContent = form.vet.value;
    kaijuListItem.appendChild(vet);

    const registered = document.createElement('p');
    registered.textContent = form.registered.value;
    kaijuListItem.appendChild(registered);

    return kaijuListItem;
}

const handleDeleteAllClick = function (event) {
    const kaijuList = document.querySelector('#kaiju-list');
    kaijuList.innerHTML = '';
}
