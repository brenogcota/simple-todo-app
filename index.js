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
                content.innerHTML = `<strong>usuário já existe!</strong>`;
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
                    content.innerHTML = `<strong>Usuário ${value} não encontrado</strong>`;
                } else {
                    _this.render(_this.searchResults);
                }
            }
            
        })
    },

    render: function(users) {
        const content = document.getElementById('content');

        if(users.length > 0) {
            content.innerHTML = '';

            users.map(user => {
                content.append(`
                    ${user}
                `)
            })
            
        } else {
            content.innerHTML = `<strong>OPS, Ainda não há usuários.</strong>`;
        }
    }
}

TODO_APP.Init();