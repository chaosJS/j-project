window.Model = function (options) {
    let resourceName = options.resourceName
    return {
        init: function () {
            var APP_ID = 'EsjoEbJOVRWCfmt1KEBHE6Oh-gzGzoHsz';
            var APP_KEY = 'Cr9DM62TKuO6h8UmeoLm06sd';

            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
            console.log('success!')
        },
        fetch: function () {
            var query = new AV.Query(resourceName);

            query.lessThanOrEqualTo('createdAt', new Date());
            query.descending('createdAt');
            query.limit(5);
            return query.find();//返回一个promise对象
        },
        save: function (obj) {
            var Message = AV.Object.extend(resourceName);
            //在表中创建一行数据
            var message = new Message();
            //save 的内容是msg:hello db
            return message.save(obj)
        }
    }
}