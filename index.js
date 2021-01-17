const TODO_APP = {

    users: [],
    searchResults: [],

    Init: function() {
        this.register();
        this.render(this.users);
        this.search();
        console.log('APP Initialized')
    },
    
    register: function() {
        const addButton = document.getElementById('addButton');
        const _this = this;

        addButton.addEventListener('click', function(e) {
            const createInput = document.getElementById('create');
            const value = createInput.value;
            const newUser = _this.users;

            if(newUser.indexOf(value) == -1 && value.length > 0) {
                _this.users.push(value);
                createInput.value = '';
                _this.render(_this.users);
            } else {
                _this.error('usuário já existe!');
            }
        })
        

    },

    search: function() {
        const searchButton = document.getElementById('searchButton');
        const _this = this;

        searchButton.addEventListener('click', function(e) {
            const searchInput = document.getElementById('search');
            const value = searchInput.value;
        
            if(value.length > 0) {
                _this.searchResults = _this.users.filter(user => user == value)
                searchInput.value = '';
                if(_this.searchResults.length < 1) {
                    _this.error(`Usuário ${value} não encontrado`);
                } else {
                    _this.render(_this.searchResults);
                }
            }
            
        })
    },

    error: function(str) {
        const message = document.getElementById('message');
        message.innerHTML = `<strong>${str}</strong>`;
    },

    render: function(users) {
        const content = document.getElementById('content');
        const message = document.getElementById('message');
        message.innerHTML = '';

        if(users.length > 0) {
            content.innerHTML = '';
            const ul = document.createElement('ul');
            ul.classList.add('list')

            users.map(user => {
                const li = document.createElement('li');
                li.append(`
                    ${user}
                `)
                ul.append(li)
            })
            
            content.append(ul)
            
        } else {
            content.innerHTML = `<strong>OPS, Ainda não há usuários.</strong>`;
        }
    }
}

TODO_APP.Init();