const form = document.getElementById('form');
const formButton = document.getElementById('form__button');
const user = document.getElementById('user');
const deleteBtn = document.getElementById('delete__btn');
const clearBtn = document.getElementById('clear__button');

const updateUI = (data) =>{
    console.log("UpdateUI:",data);
}
// const updateUI =(data) =>{
//     console.log("Update UI:",data);
// }

/*---
<li class="user__item">
              <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src="https://picsum.photos/id/338/400/400"
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>- Mr Akhror Soliev</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- 25 years old.</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>-Fergana, Uzbekistan</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- Male</span>
              </div>
            </li>
            <li class="user__item">
              <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src="https://picsum.photos/id/338/400/400"
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>- Mr Akhror Soliev</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- 25 years old.</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>-Fergana, Uzbekistan</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- Male</span>
              </div>
            </li>
            <li class="user__item">
              <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src="https://picsum.photos/id/338/400/400"
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>- Mr Akhror Soliev</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- 25 years old.</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>-Fergana, Uzbekistan</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- Male</span>
              </div>
            </li>
            <li class="user__item">
              <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src="https://picsum.photos/id/338/400/400"
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>- Mr Akhror Soliev</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- 25 years old.</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>-Fergana, Uzbekistan</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- Male</span>
              </div>
            </li>
            <li class="user__item">
              <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src="https://picsum.photos/id/338/400/400"
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>- Mr Akhror Soliev</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- 25 years old.</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>-Fergana, Uzbekistan</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- Male</span>
              </div>
            </li>
            <li class="user__item">
              <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src="https://picsum.photos/id/338/400/400"
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>- Mr Akhror Soliev</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- 25 years old.</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>-Fergana, Uzbekistan</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- Male</span>
              </div>
            </li>
            <li class="user__item">
              <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src="https://picsum.photos/id/338/400/400"
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>- Mr Akhror Soliev</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- 25 years old.</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>-Fergana, Uzbekistan</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- Male</span>
              </div>
            </li>
            <li class="user__item">
              <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src="https://picsum.photos/id/338/400/400"
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>- Mr Akhror Soliev</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- 25 years old.</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>-Fergana, Uzbekistan</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- Male</span>
              </div>
            </li>
            <li class="user__item">
              <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src="https://picsum.photos/id/338/400/400"
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>- Mr Akhror Soliev</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- 25 years old.</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>-Fergana, Uzbekistan</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- Male</span>
              </div>
            </li>
---*/