!function () {
    var view = View('#msg-container');
    var model = Model({ resourceName: 'Message' });
    var controller = {
        view: null,
        model: null,
        messageList: null,
        myForm: null,
        init: function (view, model) {
            this.view = view;
            this.model = model;
            this.messageList = view.querySelector('#msgList');
            this.myForm = view.querySelector('#postMessage');

            this.model.init();
            this.loadMessages();
            this.bindEvents();
        },

        loadMessages: function () {
            this.model.fetch()
                .then(
                    (message) => {
                        let array = message.map((item) => item.attributes);
                        array.forEach(element => {
                            let li = document.createElement('li');
                            li.innerText = element.name + ':  ' + element.content;
                            this.messageList.appendChild(li);
                        });
                    },
                    () => { }
                )
        },

        bindEvents: function () {
            let myForm = this.myForm;
            myForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveMessage();
            })
        },
        saveMessage: function () {
            let content = this.view.querySelector('input[name=content]').value;
            let name = this.view.querySelector('input[name=name]').value;

            if (content) {
                this.model.save({ name, content }).then(
                    (object) => {
                        // window.location.reload()
                        let li = document.createElement('li');
                        li.innerText = object.attributes.name + ':' + object.attributes.content;
                        // console.log(this)
                        this.messageList.appendChild(li);
                        this.view.querySelector('input[name=content]').value = '';
                        this.view.querySelector('input[name=name]').value = '';
                        console.log(object);
                    }
                )
            }
        }
    };

    controller.init.call(controller, view, model)
}.call()