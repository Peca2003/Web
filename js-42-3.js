var log = prompt('Введите логин');
    if (log == 'Админ'){
        var pass = prompt('Введите пароль');
        if (pass == 'Чёрный Властелин') alert('Добро пожаловать!');
        else if(pass == null) alert('Вход отменён');
        else alert('Пароль неверен');
    }
    else if (log == null){ alert('Вход отменён');
    }else {alert('Я вас не знаю');}
