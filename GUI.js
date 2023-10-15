(function() {
        var gui = document.createElement('div');
        gui.style.position = 'fixed';
        gui.style.color = '#fff';
        gui.style.bottom = '50%';
        gui.style.right = '50%';
        gui.style.zIndex = '9999';
        gui.style.background = 'pink';
        gui.style.padding = '10px';
        gui.style.borderRadius = '5px';
        gui.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
        var title = document.createElement('h2');
        title.style.marginTop = '0';
        title.style.marginBottom = '10px';
        title.textContent = 'GUI';

        var cloak = document.createElement('button');
        cloak.textContent = 'Tab Cloak';
        cloak.addEventListener('click', function() {
            fetch('https://bookmarkify.it/bookmarklets/62379/raw').then(data => {
                        data.text().then(text => {
                                eval(text)
                        })
                 });
        });
            gui.appendChild(title); gui.appendChild(cloak); document.body.appendChild(gui);
        })();
