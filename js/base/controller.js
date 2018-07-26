window.Controller = function (options) {
    var { init } = options;
    let object = {
        view: null,
        model: null,
        init: function (view, model) {
            this.view = view;
            this.model = model;
            this.model.init();
            console.log(this === object)
            init.call(this, view, model)
            this.bindEvents.call(this);
        }
    }

    for (let key in options) {
        if (key !== 'init') {
            object[key] = options[key]
        }
    }

    return object;
}