onload=function(){

    const scrollUpBtn = document.querySelector('.scrollUpBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { 
        scrollUpBtn.style.display = 'block'; 
    } else {
        scrollUpBtn.style.display = 'none'; 
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
        return new bootstrap.Dropdown(dropdownToggleEl);
    });
});

}




