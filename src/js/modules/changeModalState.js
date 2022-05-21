import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('height');

    function bindActionsToElems (event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                if (elem.lenght > 1) {
                    state[prop] = i;
                } else {
                    state[prop] = item.value;
                }
            });
    
        });
    }

    bindActionsToElems('click', windowForm, 'form');
    bindActionsToElems('input', windowHeight, 'height');
    bindActionsToElems('input', windowWidth, 'width');
    bindActionsToElems('change', windowType, 'type');
    bindActionsToElems('change', windowProfile, 'profile');

};

export default changeModalState;