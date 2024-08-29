
//Функция для отображения содержимого по идентификатору с учетом скрытия всех остальных
function showContent(contentId)
    //Скрыть все содержимое

document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu');
    const menuK1 = document.querySelector('.menu-k1');
    const menuK2 = document.querySelector('.menu-k2');
    const menuK3 = document.querySelector('.menu-k3');
    const menuK4 = document.querySelector('.menu-k4');
    const menuK5 = document.querySelector('.menu-k5');

    menu.style.display = 'none';
    menuK1.style.display = 'none';
    menuK2.style.display = 'none';
    menuK3.style.display = 'none';
    menuK4.style.display = 'none';
    menuK5.style.display = 'none';
});

function showMenu() {
    const menu = document.querySelector('.menu');
    const menuK1 = document.querySelector('.menu-k1');
    const menuK2 = document.querySelector('.menu-k2');
    const menuK3 = document.querySelector('.menu-k3');
    const menuK4 = document.querySelector('.menu-k4');
    const menuK5 = document.querySelector('.menu-k5');

    menu.style.display = 'block';
    menuK1.style.display = 'none';
    menuK2.style.display = 'none';
    menuK3.style.display = 'none';
    menuK4.style.display = 'none';
    menuK5.style.display = 'none';
}

function hideMenu() {
    const menu = document.querySelector('.menu');
    const menuK1 = document.querySelector('.menu-k1');
    const menuK2 = document.querySelector('.menu-k2');
    const menuK3 = document.querySelector('.menu-k3');
    const menuK4 = document.querySelector('.menu-k4');
    const menuK5 = document.querySelector('.menu-k5');

    menu.style.display = 'none';
    menuK1.style.display = 'block';
    menuK2.style.display = 'none';
    menuK3.style.display = 'none';
    menuK4.style.display = 'none';
    menuK3.style.display = 'none';
}

function showMenuTwo() {
    const menu = document.querySelector('.menu');
    const menuK1 = document.querySelector('.menu-k1');
    const menuK2 = document.querySelector('.menu-k2');
    const menuK3 = document.querySelector('.menu-k3');
    const menuK4 = document.querySelector('.menu-k4');
    const menuK5 = document.querySelector('.menu-k5');

    menu.style.display = 'none';
    menuK1.style.display = 'none';
    menuK2.style.display = 'block';
    menuK3.style.display = 'none';
    menuK4.style.display = 'none';
    menuK5.style.display = 'none';
}

function showMenuThree() {
    const menu = document.querySelector('.menu');
    const menuK1 = document.querySelector('.menu-k1');
    const menuK2 = document.querySelector('.menu-k2');
    const menuK3 = document.querySelector('.menu-k3');
    const menuK4 = document.querySelector('.menu-k4');
    const menuK5 = document.querySelector('.menu-k5');

    menu.style.display = 'none';
    menuK1.style.display = 'none';
    menuK2.style.display = 'none';
    menuK3.style.display = 'block';
    menuK4.style.display = 'none';
    menuK5.style.display = 'none';
}

function showMenuFour() {
    const menu = document.querySelector('.menu');
    const menuK1 = document.querySelector('.menu-k1');
    const menuK2 = document.querySelector('.menu-k2');
    const menuK3 = document.querySelector('.menu-k3');
    const menuK4 = document.querySelector('.menu-k4');
    const menuK5 = document.querySelector('.menu-k5');

    menu.style.display = 'none';
    menuK1.style.display = 'none';
    menuK2.style.display = 'none';
    menuK3.style.display = 'none';
    menuK4.style.display = 'block';
    menuK5.style.display = 'none';
}

function showMenuFive() {
    const menu = document.querySelector('.menu');
    const menuK1 = document.querySelector('.menu-k1');
    const menuK2 = document.querySelector('.menu-k2');
    const menuK3 = document.querySelector('.menu-k3');
    const menuK4 = document.querySelector('.menu-k4');
    const menuK5 = document.querySelector('.menu-k5');

    menu.style.display = 'none';
    menuK1.style.display = 'none';
    menuK2.style.display = 'none';
    menuK3.style.display = 'none';
    menuK4.style.display = 'none';
    menuK5.style.display = 'block';
}

const btnUp = {
    el: document.querySelector('.btn-up'),
    scrolling: false,
    show() {
        if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
            this.el.classList.remove('btn-up_hide');
            this.el.classList.add('btn-up_hiding');
            window.setTimeout(() => {
                this.el.classList.remove('btn-up_hiding');
            }, 300);
        }
    },
    hide() {
        if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
            this.el.classList.add('btn-up_hiding');
            window.setTimeout(() => {
                this.el.classList.add('btn-up_hide');
                this.el.classList.remove('btn-up_hiding');
            }, 300);
        }
    },
    addEventListener() {
        // при прокрутке окна (window)
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            if (this.scrolling && scrollY > 0) {
                return;
            }
            this.scrolling = false;
            // если пользователь прокрутил страницу более чем на 200px
            if (scrollY > 200) {
                // сделаем кнопку .btn-up видимой
                this.show();
            } else {
                // иначе скроем кнопку .btn-up
                this.hide();
            }
        });
        // при нажатии на кнопку .btn-up
        document.querySelector('.btn-up').onclick = () => {
            this.scrolling = true;
            this.hide();
            // переместиться в верхнюю часть страницы
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}

btnUp.addEventListener();

//Добавляем обработчик события keypress для поля ввода поисквого запроса
document.getElementById('searchInput').addEventListener('keypress', function (e) {
    //Проверяем нажатие клавиши Enter (код клавиши 13)
    if (e.key === 'Enter') {
        e.preventDefault(); //Отменяем дейчтвие по умолчание (отправку формы)
        searchTable();
    }
});

// Добавляем обработчик события click для кнопки "reset"
document.querySelector('.reset').addEventListener('click', function () {
    document.getElementById('searchResults').innerHTML = '';
});

// Добавляем обработчик события keyup для поля ввода поискового запроса
document.getElementById('searchInput').addEventListener('keyup', function () {
    var searchInput = document.getElementById('searchInput');

    if (searchInput.value.trim() === '') {
        //Поле ввода пустое, отображаем содержимое вкладок
        document.querySelectorAll('.tab-pane').forEach(function (tab) {
            tab.style.display = 'block'
        });
    }
});

//Добавляем обработчик событий для переключения вкладок и очистки результатов поиска
document.querySelectorAll('.nav-link, .menu-item').forEach(function (item) {
    item.addEventListener('click', function () {
        document.getElementById('searchResults').innerHTML = ''; //Очищаем результат поиска
        document.getElementById('searchInput').value = ''; //Очищаем поле ввода
    });
});

//Добавляем обработчик события для нажатия клавиш
document.getElementById('searchInput').addEventListener('keydown', function(event) {
    
    //Проверяем, что нажатя клавиша - backspace
    if (event.key === 'Backspace') {
        //Проверяем, что поле поиска пустое
        if (document.getElementById('searchInput').value.trim() === '') {
            //очищаем результат поиска
            var searchResults = document.getElementById('searchResults');
            searchResults.innerHTML = '';
            //Предотвращаем дальнейшее выполнение функции searchTable
            event.preventDefault();
        }
    }
});


 //Фунция поиска и вывода результата
 function searchTable() {
    var searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();
    var tableRows = document.querySelectorAll('#head-content tbody tr, #head-k2-content tbody tr, #head-k3-content tbody tr, #head-k4-content tbody tr, #head-k5-content tbody tr, #com-content tbdoy tr, #tovar-content tbody tr, #buh-content tbody tr, #finance-content tbody tr, #plan-content tbody tr, #mark-content tbody tr, #proiz-content tbody tr, #obc-content tbody tr, #it-content tbody tr, #cadr-content tbody tr, #im-content tbody tr, #other-content tbody tr, #proiz-k1-content tbody tr, #pekar-content tbody tr, #kulenar-content tbody tr, #svk-content tbdoy tr, #sklad-content tbody tr, #oper-content tbody tr, #tz-content tbody tr, #proiz-k2-content tbody tr, #pekar-k2-content tbody tr, #kulenar-k2-content tbody tr, #svk-k2-content tbody tr, #sklad-k2-content tbody tr, #oper-k2-content tbody tr, #tz-k2-content tbody tr, #proiz-k3-content tbody tr, #pekar-k3-content tbody tr, #kulenar-k3-content tbody tr, #svk-k3-content tbody tr, #sklad-k3-content tbody tr, #oper-k3-content tbody tr, #tz-k3-content tbody tr, #inj-k3-content tbody tr, #proiz-k4-content tbody tr, #pekar-k4-content tbody tr, #kulenar-k4-content tbody tr, #svk-k4-content tbody tr, #sklad-k4-content tbody tr, #oper-k4-content tbody tr, #tz-k4-content tbody tr, #inj-k4-content tbody tr, #proiz-k5-content tbody tr, #pekar-k5-content tbody tr, #kulenar-k5-content tbody tr, #svk-k5-content tbody tr, #sklad-k5-content tbody tr, #oper-k5-content tbody tr, #tz-k5-content tbody tr, #inj-k5-content tbody tr');
    var searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    var searchResultsHeader = document.createElement('h4');
    searchResultsHeader.textContent = 'Результат поиска';
    searchResultsHeader.style.marginTop = '20px';
    searchResultsHeader.style.textAlign = 'center';
    searchResults.appendChild(searchResultsHeader);

    var table = document.createElement('table');
    table.classList.add('table', 'table-striped', 'table-hover');
    var tableHead = document.createElement('thead');
    var headRow = document.createElement('tr');
    headRow.innerHTML = '<th scope="col">Внутренний номер</th><th scope="col">Имя внутреннего абонента</th>';
    tableHead.appendChild(headRow);

    var tableBody = document.createElement('tbody');

    tableRows.forEach(function (row) {
        var internalNumber = row.querySelector('th').textContent.toLocaleLowerCase();
        var name = row.querySelector('td').textContent.toLocaleLowerCase();

        if (internalNumber.includes(searchQuery) || name.includes(searchQuery)) {
            var resultRow = document.createElement('tr');
            resultRow.innerHTML = '<th scope="row">' + internalNumber + '</th><td>' + name + '</td>';
            tableBody.appendChild(resultRow);
        }
    });

    table.appendChild(tableHead);
    table.appendChild(tableBody);
    searchResults.appendChild(table);
}
