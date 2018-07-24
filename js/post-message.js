!function () {

    var view = document.querySelector('#msg-container');
    var model = {
        fetch: function () {
            var query = new AV.Query('Message');
            return query.find();//返回一个promise对象
        },
        save: function (name, content) {
            var Message = AV.Object.extend('Message');
            //在表中创建一行数据
            var message = new Message();
            //save 的内容是msg:hello db
            return message.save({
                content,
                name
            })
        }
    };
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

            this.initAV();
            this.loadMessages();
            this.bindEvents();
        },
        initAV: function () {
            var APP_ID = 'EsjoEbJOVRWCfmt1KEBHE6Oh-gzGzoHsz';
            var APP_KEY = 'Cr9DM62TKuO6h8UmeoLm06sd';

            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
            console.log('success!')
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
                this.model.save(name, content).then(
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